import React from 'react';
import './Nacionalidade.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Nacionalidade({ nacionalidades }) {
    return (
      <div className="nacionalidade-container">
        <FontAwesomeIcon icon={faGlobe} className="nacionalidade-icon" />
        <p className="nacionalidade-text">Nacionalidades:</p>
        <ul className="nacionalidade-list">
          {Array.isArray(nacionalidades) && nacionalidades.length > 0 ? (
            nacionalidades.map((nacionalidade, index) => (
              <li key={index} className="nacionalidade-item">
                {nacionalidade}
              </li>
            ))
          ) : (
            <li className="nacionalidade-item">Nenhuma nacionalidade disponível</li>
          )}
        </ul>
      </div>
    );
  }
  

export default Nacionalidade;
