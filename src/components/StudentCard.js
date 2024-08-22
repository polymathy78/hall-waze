import React from 'react';

const StudentCard = ({ record, handleReturn }) => {
  // Determine the class based on the destination
  const getDestinationClass = (destination) => {
    switch (destination) {
      case 'Library':
        return 'library-card';
      case 'Gym':
        return 'gym-card';
      case 'Cafeteria':
        return 'cafeteria-card';
      case 'Auditorium':
        return 'auditorium-card';
      case 'Playground':
        return 'playground-card';
      case 'Laboratory':
        return 'laboratory-card';
      default:
        return '';
    }
  };

  return (
    <div
      className={`student-card ${getDestinationClass(
        record.Destination
      )}`}
    >
      <h4>{record.Name}</h4>
      <p>Destination: {record.Destination}</p>
      <p>
        Departure Time:{' '}
        {new Date(record.DepartureTime).toLocaleString()}
      </p>
      <button onClick={() => handleReturn(record.id)}>Return</button>
    </div>
  );
};

export default StudentCard;
