import React from 'react';
import './time.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

function Times({ times }) {
  return (
    <div className="times-container">
      <h4><FontAwesomeIcon icon={faFutbol} /> Times Anteriores:</h4>
      <ul className="times-list">
        {times && times.length > 0 ? ( // Verifica se a lista de times não está vazia
          times.map((time, index) => (
            <li key={index} className="time-item">
              {time.nome} ({time.ano})
            </li>
          ))
        ) : (
          <li className="time-item">Nenhum time anterior disponível</li> // Mensagem caso não haja times
        )}
      </ul>
    </div>
  );
}

export default Times;
