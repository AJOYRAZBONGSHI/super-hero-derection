import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Our Family Library</h1>
            <h3>Here are our family's favorite books And we do regular book collections..</h3>
            <h1>Our Budget : <span className='budget'>10 Lakh Taka</span></h1>
        </div>
    );
};

export default Header;