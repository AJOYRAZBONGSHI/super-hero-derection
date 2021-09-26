import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import CardInfo from '../CardInfo/CardInfo';
import './CardContainer.css'

const CardContainer = () => {
    const [cards, setCards] = useState([]);
    const [addToLaLibrary, setAddToLaLibrary] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])

    const handleAddToLaLibrary = (card) => {

        const newPoetList = [...addToLaLibrary];
        const existing = addToLaLibrary.find(added => added.name === card.name);
        if (!existing) {
            newPoetList.push(card);
        }
        setAddToLaLibrary(newPoetList);
    }
    return (
        <div className='card-container'>
            <div className='cards'>
                {
                    cards.map(card => <Card
                        key={card.id}
                        card={card}
                        handleAddToLaLibrary={handleAddToLaLibrary}
                    ></Card>)
                }
            </div>
            <div className='card-info'>
                <CardInfo poets={addToLaLibrary}></CardInfo>
            </div>
        </div>
    );
};

export default CardContainer;