import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import './time.css';

function Times({ times }) {
  return (
    <div>
      <h3>
        <FontAwesomeIcon icon={faFlag} /> Times Anteriores:
      </h3>
      <ul>
        {times.map((time, index) => (
          <li key={index}>
            {time.nome} ({time.ano})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Times;
