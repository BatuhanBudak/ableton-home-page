import React, { useState } from 'react'
import Image from '../node_modules/next/image';
import styles from '../styles/Footer.module.css'
import CountrySelector from './CountrySelector'
import LanguageSelector from './LanguageSelector';


function Footer() {
    const [email, setEmail] = useState<string>('');

    function handleEmail(e: { preventDefault: () => void; target: { value: React.SetStateAction<string>; }; }) {
        e.preventDefault();
        setEmail(e.target.value)
    }
    return (
        <footer className={styles.footer}>
            <h1>Ableton</h1>
            <div >
                <div className={styles.grid}>
                    <div >
                        <ul>
                            <li className={styles.hasArrow}>Register Live or Push</li>
                            <li className={styles.hasArrow}>About Ableton</li>
                            <li className={styles.hasArrow}>Jobs</li>
                            <ul className={styles.flex}>
                                <li className={`${styles.facebook} logo-item`}><Image src="/facebook.svg" alt="Facebook Logo" width={40} height={40} /></li>
                                <li className={`${styles.twitter} logo-item`}><Image src="/twitter.svg" alt="Twitter Logo" width={40} height={40} /></li>
                                <li className={`${styles.youtube} logo-item`}><Image src="/youtube.svg" alt="Youtube Logo" width={40} height={40} /></li>
                                <li className={`${styles.instagram} logo-item`}><Image src="/instagram.svg" alt="Instagram Logo" width={40} height={40} /></li>
                            </ul>
                        </ul>
                    </div>
                    <div>
                        <p className={styles.footerTitle}>Education</p>
                        <ul>
                            <li className={styles.hasArrow}>Offers for students and teachers</li>
                            <li className={styles.hasArrow}>Offers for institutions</li>
                            <li className={styles.hasArrow}>Push 1 trade-in initiative</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <p className={styles.footerTitle}>Sign up to our newsletter</p>
                            </li>
                            <li>
                                <p>Enter your e-mail adress to stay up to date with the latest offers, tutorials, downloads and more.</p>
                            </li>
                            <div className={styles.flex}>
                                <input className={styles.emailInput} type="text" name="email" id="email-signup" placeholder='Email Adress' value={email} onChange={handleEmail} />
                                <button className={styles.emailButton}>Sign up</button>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className={styles.grid}>
                    <div>
                        <p className={styles.footerTitle}>Community</p>
                        <ul>
                            <li className={styles.hasArrow}>Find Ableton user Groups</li>
                            <li className={styles.hasArrow}>Find Certified Training</li>
                            <li className={styles.hasArrow}>Become a Certified Trainer</li>
                        </ul>
                    </div>
                    <div>
                        <p className={styles.footerTitle}>Distributors</p>
                        <ul>
                            <li className={styles.hasArrow}>Find Distributors</li>
                            <li className={styles.hasArrow}>Try Push-in Store</li>
                        </ul>
                    </div>
                    <div>
                        <p className={styles.footerTitle}>Language and Location</p>
                        <ul className={styles.flex}>
                            <div className={styles.thiryWidth}>
                                <LanguageSelector />
                            </div>
                            <div className={styles.halfWidth}>
                                <CountrySelector />
                            </div>
                        </ul>
                    </div>
                </div>
                <div className={styles.grid}>
                    <ul className={styles.lastUl}>
                        <li>Archive</li>
                        <li>Contact Us</li>
                        <li>Press Resources</li>
                        <li>Legal Info</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Settings</li>
                        <li>Imprint</li>
                    </ul>

                    <div className={styles.footerLogo}>
                        <span className={styles.footerTitle}>Made in Berlin</span>
                        <Image src="/logo.svg" alt="Ableton Logo" width={45} height={21} />
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer