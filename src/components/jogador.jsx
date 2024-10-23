import React from 'react';
import './jogador.css';
import Nacionalidade from './nacionalidade';
import Times from './components/Times';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faTshirt, faTrophy } from '@fortawesome/free-solid-svg-icons'; 

function Jogador({ jogadores }) {
  return (
    <div className="jogadores-lista">
      {jogadores.map((jogador, index) => (
        <div key={index} className="jogador-container">
          <h3>{jogador.nome}</h3>
          <p>
            <FontAwesomeIcon icon={faTshirt} /> Camisa: <span>{jogador.numero}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faFutbol} /> Time Atual: <span>{jogador.time}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faTrophy} /> Gols Na Carreira: <span>{jogador.gols}</span>
          </p>
          <Nacionalidade nacionalidades={jogador.nacionalidade} />
          <Times times={jogador.times} />
        </div>
      ))}
    </div>
  );
}

export default Jogador;
