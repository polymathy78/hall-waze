import React from 'react';
import './Popup.css';

const Popup = ({ message }) => {
  if (!message) return null;

  return <div className="popup">{message}</div>;
};

export default Popup;
