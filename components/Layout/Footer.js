import React from "react";
import Link from 'next/link'

import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
           <div>
               <img src='/assets/shared/desktop/logo.svg' />
           </div>
           <ul className={`${styles.category} ${styles.nav}`}>
               <li><Link href='/'>home</Link></li>
               <li><Link href='/headphones'>headphones</Link></li>
               <li><Link href='/speakers'>speakers</Link></li>
               <li><Link href='/earphones'>earphones</Link></li>
           </ul>
            <p>
            {`Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.`}
            </p>
            <p>
            Copyright 2021. All Rights Reserved
            </p>
            <ul className={styles['social-media']}>
               <li><Link href='/'><img src='/assets/shared/desktop/icon-facebook.svg' alt='facebook'/></Link></li>
               <li><Link href='/'><img src='/assets/shared/desktop/icon-twitter.svg' alt='twitter'/></Link></li>
               <li><Link href='/'><img src='/assets/shared/desktop/icon-instagram.svg' alt='instagram'/></Link></li>
           </ul>
        </footer>
    )
}
