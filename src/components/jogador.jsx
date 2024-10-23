import React from 'react';
import './jogador.css';

function Jogador({ jogadores }) {
  return (
    <div className="jogadores-lista">
      {jogadores.map((jogador, index) => (
        <div key={index} className="jogador-container">
          <h3>{jogador.nome}</h3>
          <p>Camisa: <span>{jogador.numero}</span></p>
          <p>Time Atual: <span>{jogador.time}</span></p>
          <p>Gols Na Carreira: <span>{jogador.gols}</span></p>
        </div>
      ))}
    </div>
  );
}

export default Jogador;
