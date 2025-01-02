import React, { useState, useEffect } from 'react';

const StudentCard = ({ record, handleReturn }) => {
  const [elapsedTime, setElapsedTime] = useState('');

  useEffect(() => {
    if (record.DepartureTime) {
      const interval = setInterval(() => {
        const departure = new Date(record.DepartureTime);
        console.log(departure);
        const now = new Date();
        const diffMs = now - departure;

        const hours = Math.floor(diffMs / 3600000);
        const minutes = Math.floor((diffMs % 3600000) / 60000);
        const seconds = Math.floor((diffMs % 60000) / 1000);

        setElapsedTime(
          `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        );
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [record.departureTime]);
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
      <p>Time Gone: {elapsedTime}</p>
      <button onClick={() => handleReturn(record.id)}>Return</button>
    </div>
  );
};

export default StudentCard;
