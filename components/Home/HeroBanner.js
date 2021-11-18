import React, { Fragment, useEffect, useState } from "react";
import Button from "../UI/Button";
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

import { staggerContainer ,translateXFromLeft } from "../animation/animation";
import styles from './HeroBanner.module.css';

export default function HeroBanner() {

    const controls = useAnimation();
    const {ref, inView} = useInView();

    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
    
      }, [controls, inView]);

    return (
        <div className={styles['hero-banner']}>
            <motion.div 
            ref={ref}
            className={styles['info-container']}
            variants={staggerContainer}
            initial='hidden'
            animate={controls}
            >
                <motion.p className='overline' variants={translateXFromLeft}>new product</motion.p>
                <motion.h1 variants={translateXFromLeft}>xx99 mark ii headphones</motion.h1>
                <motion.p variants={translateXFromLeft}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</motion.p>
                <Button variants={translateXFromLeft} type='button' color='orange' href='/products/xx99-mark-two-headphones'>see product</Button>
            </motion.div>
           
        </div>
        
    )
}