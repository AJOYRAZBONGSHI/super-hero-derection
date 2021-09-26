import React from 'react';
import './CardInfo.css'

const CardInfo = (props) => {
    const { poets } = props;
    let book = 0;
    let names = '';
    for (const poet of poets) {
        book = book + poet.books;
        names = names + poet.name;
    }
    return (
        <div>
            <dir>
                <h2>Library Books Details</h2>
                <h3>Total Added : {props.poets.length} </h3>
                <h3>Total Books : {book}</h3>
                <button className='add-button'> <i className="fas fa-book"></i> Add to Library</button>
            </dir>
            <div>
                <ul className='poet-list'>
                    <h3>{names}</h3><br />
                </ul>
            </div>
        </div>
    );
};

export default CardInfo;