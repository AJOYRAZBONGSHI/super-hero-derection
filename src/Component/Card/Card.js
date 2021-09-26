import React from 'react';
import './Card.css'

const Card = (props) => {
    const { image, name, birth, language, cityzen, books } = props.card;
    return (
        <div className="card">
            <img src={image} alt="" />
            <h3>Name : {name}</h3>
            <h4>Life-Cycle {birth}</h4>
            <h4>Language : {language}</h4>
            <h4>Citizen : {cityzen}</h4>
            <h4>Books in Your Library : {books}</h4>
            <button onClick={() => props.handleAddToLaLibrary(props.card)} className='add-button'> <i className="fas fa-book"></i> Add to Library</button>
        </div>
    );
};

export default Card;