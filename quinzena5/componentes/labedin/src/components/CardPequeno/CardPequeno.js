import React from 'react';



function CardPequeno(props) {
    return (
        <div className="littlecard-container">
            <img src={ props.imagem } alt=""/>
            <div>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardPequeno;