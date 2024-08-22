// import React, { useState } from 'react';

// const StudentForm = ({ onSubmit }) => {
//   const [studentID, setStudentID] = useState('');
//   const [name, setName] = useState('');
//   const [destination, setDestination] = useState('');

//   // Array of destinations
//   const destinations = [
//     'Library',
//     'Gym',
//     'Cafeteria',
//     'Auditorium',
//     'Playground',
//     'Laboratory',
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const studentRecord = {
//       StudentID: studentID,
//       Name: name,
//       Destination: destination,
//       DepartureTime: new Date().toISOString(),
//       SchoolID: 'SchoolIDPlaceholder', // Replace with actual SchoolID
//       TeacherID: 'TeacherIDPlaceholder', // Replace with actual TeacherID
//     };

//     // Call the onSubmit function passed as a prop
//     onSubmit(studentRecord);

//     // Optionally reset the form fields after submission
//     setStudentID('');
//     setName('');
//     setDestination('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={studentID}
//         onChange={(e) => setStudentID(e.target.value)}
//         placeholder="Student ID"
//         required
//       />
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Student Name"
//         required
//       />
//       <select
//         value={destination}
//         onChange={(e) => setDestination(e.target.value)}
//         required
//       >
//         <option value="" disabled>
//           Select Destination
//         </option>
//         {destinations.map((dest, index) => (
//           <option key={index} value={dest}>
//             {dest}
//           </option>
//         ))}
//       </select>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default StudentForm;

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
