import React from 'react'
import styles from './Header.module.css'
import image from '../assets/digibank.png';

export default function Header() {
    return (
        <div className={styles.header}>
            <img src={image} alt={image} />
        </div>
    )
}
