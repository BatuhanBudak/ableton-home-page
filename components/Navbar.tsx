import React, { useState, useEffect, useCallback } from 'react'
import useScrollPos from '../hooks/useScrollPos'
import Image from '../node_modules/next/image'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {

    const scrollClass = useScrollPos();

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
                    <li className={styles.mainNavItem}><a className={styles.orange}>More + </a></li>
                </ul>

                <ul className={styles.rightNav}>
                    <li className={styles.mainNavItem}><span className={styles.blue}><a>Try Live for free</a></span></li>
                    <li ><a>Log in or register</a></li>
                </ul>

            </nav>
            <nav className={`${styles.stickyNav} ${scrollClass}`}>
                <ul>
                    <li className={`${styles.secondNavItem} ${styles.orange}`}>About</li>
                    <li className={styles.secondNavItem}>Jobs</li>
                    <li className={styles.secondNavItem}>Apprenticeships</li>
                </ul>
            </nav>
        </>
    )
}
