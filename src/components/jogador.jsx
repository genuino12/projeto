import React from 'react';
import './jogador.css';
import Nacionalidade from './nacionalidade';
import Times from './times';
import ValorMercado from './valormercado'; // Importando o componente
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
                    <ValorMercado valor={jogador.valor} /> {/* Passando o valor para o componente */}
                </div>
            ))}
        </div>
    );
}

export default Jogador;
