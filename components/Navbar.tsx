import React from 'react'
import Image from '../node_modules/next/image'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <ul className={styles.leftNav}>
                    <li><Image src="/logo.svg" alt="Ableton Logo" width={45} height={21} /></li>
                    <li className={styles.mainNavItem}><a >Push</a></li>
                    <li className={styles.mainNavItem}><a>Link</a></li>
                    <li className={styles.mainNavItem}><a>Shop</a></li>
                    <li className={styles.mainNavItem}><a>Packs</a></li>
                    <li className={styles.mainNavItem}><a>Help</a></li>
                    <li className={styles.mainNavItem}><a>More + </a></li>
                </ul>

                <ul className={styles.rightNav}>
                    <li className={styles.mainNavItem}><span className={styles.blue}><a>Try Live for free</a></span></li>
                    <li ><a>Log in or register</a></li>
                </ul>

            </nav>
            <nav className={styles.stickyNav}>
                <ul>
                    <li className={styles.secondNavItem}>About</li>
                    <li className={styles.secondNavItem}>Jobs</li>
                    <li className={styles.secondNavItem}>Apprenticeships</li>
                </ul>
            </nav>
        </>
    )
}
