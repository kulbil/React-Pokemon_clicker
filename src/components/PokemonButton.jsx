import React from 'react';

function PokemonButton( {handleClick, image}) {
    return(
        <button
            className="w-90 aspect-square transform hover:scale-110 active:scale-100 transition-all"
            onClick={handleClick}
        >
            <img
                className="w-full h-full"
                src={image}
                alt="Pikachu Beauty" />
        </button>
    )
}

export default PokemonButton;