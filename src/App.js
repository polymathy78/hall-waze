import { Amplify } from 'aws-amplify';
import { signOut } from 'aws-amplify/auth';
import { fetchAuthSession } from 'aws-amplify/auth';
import React, { useState, useEffect } from 'react';
import {
  useTheme,
  View,
  Text,
  Image,
  Authenticator,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { generateClient } from 'aws-amplify/api';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'; // Use Routes instead of Switch

import awsExports from './aws-exports';
import StudentForm from './components/StudentForm';
import StudentCard from './components/StudentCard';
import Popup from './components/Popup';
import DataGraph from './components/DataGraph'; // New component for graphs
import { listStudentRecords, listStudents } from './graphql/queries';
import {
  createStudentRecord,
  updateStudentRecord,
} from './graphql/mutations';
import './App.css';

Amplify.configure(awsExports);

const API = generateClient();

export default function App() {
  const [records, setRecords] = useState([]);
  const [students, setStudents] = useState([]);
  const [popupMessage, setPopupMessage] = useState('');
  const [userGroup, setUserGroup] = useState(null);

  // Get the current authenticated user and their group
  useEffect(() => {
    const checkUserGroup = async () => {
      try {
        const session = await fetchAuthSession();

        const groups =
          session.tokens.accessToken.payload['cognito:groups'];
        console.log(groups);
        if (groups.includes('admins')) {
          setUserGroup('admin');
          console.log(userGroup);
        } else if (groups.includes('teachers')) {
          setUserGroup('teacher');
        } else {
          setUserGroup(null); // Handle unassigned users
        }
      } catch (error) {
        console.error('Error fetching user group:', error);
        setUserGroup(null);
      }
    };
    checkUserGroup();
  }, []);

  // Fetch student records
  const fetchRecords = async () => {
    try {
      const result = await API.graphql({ query: listStudentRecords });
      const fetchedRecords = result.data.listStudentRecords.items.map(
        (record) => ({
          ...record,
          returned: false, // Initially, set returned to false for all records
        })
      );
      setRecords(fetchedRecords);
    } catch (error) {
      console.error('Error fetching student records:', error);
    }
  };

  // Fetch student names and IDs
  const fetchStudents = async () => {
    try {
      const result = await API.graphql({ query: listStudents });
      setStudents(result.data.listStudents.items);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    fetchRecords();
    fetchStudents(); // Fetch student names and IDs when the component mounts
  }, []);

  const showPopup = (message) => {
    setPopupMessage(message);
    setTimeout(() => {
      setPopupMessage('');
    }, 3000); // Popup disappears after 3 seconds
  };

  const handleSubmit = async (studentRecord) => {
    const dingSound = new Audio('/sounds/ding.mp3'); // Path to the sound file

    try {
      const variables = {
        filter: { StudentID: { eq: studentRecord.StudentID } },
      };
      const result = await API.graphql({
        query: listStudentRecords,
        variables: variables,
      });
      const studentRecords = result.data.listStudentRecords.items;

      if (studentRecords.length > 0) {
        studentRecords.sort(
          (a, b) => new Date(b.ReturnTime) - new Date(a.ReturnTime)
        );
        const latestRecord = studentRecords[0];
        const currentTime = new Date();
        const lastReturnTime = new Date(latestRecord.ReturnTime);

        const timeDifference = currentTime - lastReturnTime;
        const oneHourInMilliseconds = 60 * 60 * 1000;

        if (timeDifference < oneHourInMilliseconds) {
          dingSound.play(); // Play the ding sound
          showPopup(
            'You cannot make a new submission within an hour of your last submission.'
          );
          return;
        }
      }

      await API.graphql({
        query: createStudentRecord,
        variables: { input: studentRecord },
      });
      showPopup('Student record created successfully');
      fetchRecords();
    } catch (error) {
      console.error('Error creating student record:', error);
    }
  };

  const handleReturn = async (id) => {
    try {
      const updatedRecord = {
        id,
        ReturnTime: new Date().toISOString(),
      };
      await API.graphql({
        query: updateStudentRecord,
        variables: { input: updatedRecord },
      });
      showPopup('Student has returned.');
      fetchRecords();
    } catch (error) {
      console.error('Error updating student record:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.reload(); // Reload the page to reflect the sign-out state
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const components = {
    Header() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
            alt="logo"
            src="/hall-waze.png"
            className="home-logo"
          />
        </View>
      );
    },

    Footer() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>
            &copy; All Rights Reserved
          </Text>
        </View>
      );
    },
  };

  return (
    <Authenticator components={components} hideSignUp>
      {({ signOut, user }) => (
        <Router>
          <div className="App">
            <nav className="navbar">
              <img src="/hall-waze.png" alt="Logo" className="logo" />
              <ul className="nav-links">
                {/* Show Home and Graphs for teachers */}
                {userGroup === 'teacher' && (
                  <>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/graphs">Graphs</a>
                    </li>
                  </>
                )}

                {/* Show only Graphs for admins */}
                {userGroup === 'admin' && (
                  <li>
                    <a href="/graphs">Graphs</a>
                  </li>
                )}
                <li>
                  <button
                    className="signout-button"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </nav>
            <Routes>
              {userGroup === 'teacher' ? (
                <>
                  <Route
                    path="/"
                    element={
                      <>
                        <StudentForm
                          onSubmit={handleSubmit}
                          students={students}
                        />
                        <hr />
                        <div className="student-records">
                          {records.map((record) =>
                            !record.ReturnTime ? (
                              <StudentCard
                                key={record.id}
                                record={record}
                                handleReturn={handleReturn}
                              />
                            ) : null
                          )}
                        </div>
                      </>
                    }
                  />
                  <Route
                    path="/graphs"
                    element={<DataGraph records={records} />}
                  />
                </>
              ) : null}

              {userGroup === 'admin' ? (
                <>
                  <Route
                    path="/"
                    element={<DataGraph records={records} />}
                  />
                </>
              ) : null}
            </Routes>
          </div>
          <Popup message={popupMessage} />
        </Router>
      )}
    </Authenticator>
  );
}
