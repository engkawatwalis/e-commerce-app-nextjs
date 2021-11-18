import React, { Fragment, useState } from "react";
import Link from 'next/link'
import {AnimatePresence} from 'framer-motion'
import { useRouter } from 'next/router'
import { useSelector } from "react-redux";

import styles from './Header.module.css';
import Cart from "../Cart/Cart";
import CategorySideBar from "../Category/CategorySideBar";

export default function Header() {

    const router = useRouter();
    const [cartOpen, setcartOpen] = useState(false);
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const deviceSize = useSelector(state => state.device.deviceSize);
    const cartHandler = ()=>{
        setcartOpen(prev => !prev)
    }

    const sideBarHandler = ()=>{
        setSideBarOpen(prev => ! prev)
    }

    const CheckOutHandler = ()=>{
        setcartOpen(false);
        router.push('/checkout');
    }

    return (
        <Fragment>
            <header className={styles.header}>
                <nav>
                    {deviceSize !== 'desktop' && 
                    <button type='button' 
                            onClick={sideBarHandler} 
                            className={styles['header-element']}>
                        <img src='/assets/shared/tablet/icon-hamburger.svg' alt='hamburger-icon'/>
                    </button>
                    }
                    <div className={styles['header-element']}>
                        <Link href='/'>
                            <img src='/assets/shared/desktop/logo.svg' alt='home'/>
                        </Link>
                    </div>
                    {deviceSize === 'desktop' &&
                        <ul className={styles.nav}>
                            <li><Link href='/'><span className={`subtitle ${router.pathname === '/' ? styles.active : ''}`}>home</span></Link></li>
                            <li><Link href='/headphones'><span className={`subtitle ${router.query.category === 'headphones' ? styles.active : ''}`}>headphones</span></Link></li>
                            <li><Link href='/speakers'><span className={`subtitle ${router.query.category === 'speakers' ? styles.active : ''}`}>speakers</span></Link></li>
                            <li><Link href='/earphones'><span className={`subtitle ${router.query.category === 'earphones' ? styles.active : ''}`}>earphones</span></Link></li>
                        </ul>
                    }
                    <button type='button' 
                            onClick={cartHandler} 
                            className={styles['header-element']}>
                        <img src='/assets/shared/desktop/icon-cart.svg' alt='hamburger-icon'/>
                    </button>
                </nav>
                
            </header>
            <AnimatePresence>
                {cartOpen && <Cart onCheckOut={CheckOutHandler} onClose={cartHandler}/>}
            </AnimatePresence>
            
            {sideBarOpen && <CategorySideBar onClose={sideBarHandler}/>}
        </Fragment>
        
    )
}
