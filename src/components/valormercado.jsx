
import React from 'react';
import './valormercado.css';

function ValorMercado({ valor }) {
    return (
        <div className="valor-mercado-container">
            <h4>
                Valor de Mercado:
            </h4>
            <p className="valor-mercado">{valor}</p>
        </div>
    );
}

export default ValorMercado;
