import React from 'react'
import Image from '../node_modules/next/image'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.leftNav}>
                <li><Image src="/logo.svg" alt="Ableton Logo" width={45} height={21} /></li>
                <li><a >Push</a></li>
                <li><a>Link</a></li>
                <li><a>Shop</a></li>
                <li><a>Packs</a></li>
                <li><a>Help</a></li>
                <li><a>More + </a></li>
            </ul>

            <ul className={styles.rightNav}>
                <li><span className={styles.blue}><a>Try Live for free</a></span></li>
                <li><a>Account</a></li>
                <li><a>Log in</a></li>
            </ul>
        </nav>
    )
}
