import React from 'react';
import './Header.css';
import image from '../../icons/digibank.png';

export default function Header() {
    return (
        <div className='header'>
            <img src={image} alt="Header Image" />
        </div>
    )
}
