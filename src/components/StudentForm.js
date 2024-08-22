import React, { useState } from 'react';

const StudentForm = ({ students, onSubmit }) => {
  const [studentID, setStudentID] = useState('');
  const [selectedStudentName, setSelectedStudentName] = useState('');
  const [destination, setDestination] = useState('');

  // Array of destinations
  const destinations = [
    'Library',
    'Gym',
    'Cafeteria',
    'Auditorium',
    'Playground',
    'Laboratory',
  ];

  const handleStudentChange = (e) => {
    const selectedName = e.target.value;
    setSelectedStudentName(selectedName);

    const selectedStudent = students.find(
      (student) => student.name === selectedName
    );
    setStudentID(selectedStudent ? selectedStudent.id : '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentRecord = {
      StudentID: studentID,
      Name: selectedStudentName,
      Destination: destination,
      DepartureTime: new Date().toISOString(),
      SchoolID: 'SchoolIDPlaceholder', // Replace with actual SchoolID
      TeacherID: 'TeacherIDPlaceholder', // Replace with actual TeacherID
    };

    onSubmit(studentRecord);

    // Optionally reset the form fields after submission
    setSelectedStudentName('');
    setDestination('');
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <select
            value={selectedStudentName}
            onChange={handleStudentChange}
            required
          >
            <option value="" disabled>
              Select Student
            </option>
            {students.map((student) => (
              <option key={student.id} value={student.name}>
                {student.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Destination
            </option>
            {destinations.map((dest, index) => (
              <option key={index} value={dest}>
                {dest}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
