import React from 'react';

function ImagemButton(props) {
    return (
        <div className="image-button-container" >
            <img src={ props.imagem } alt=""/>
            <p>{ props.texto }</p>
        </div>

    )
}

export default ImagemButton;