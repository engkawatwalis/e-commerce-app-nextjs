import React from "react";
import Link from 'next/link';
import {motion} from 'framer-motion';

import styles from './Button.module.css';

export default function Button(props) {
    if (props.href)
    return (
        <Link href={props.href}>
            <motion.button 
            variants={props.variants} 
            type={props.type} 
            className={`${styles.button} ${styles[`${props.color}`]}`}
            disabled={props.disabled || false}>
                {props.children}
            </motion.button>
        </Link>    
    )

    return (
        <motion.button 
        variants={props.variants} 
        type={props.type} 
        onClick={props.onClick} 
        className={`${styles.button} ${styles[`${props.color}`]}`}
        disabled={props.disabled || false}>
                {props.children}
        </motion.button>
    )
}
