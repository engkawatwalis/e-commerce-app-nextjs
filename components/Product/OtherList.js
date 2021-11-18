import React, {useEffect} from "react";
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

import styles from './OtherList.module.css';
import Button from "../UI/Button";
import { fadeIn, staggerContainer, translateUp } from "../animation/animation";

export default function OtherList(props) {

    const controls = useAnimation();
    const {ref, inView} = useInView();
    
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
      
    }, [controls, inView]);

    return (
        <motion.div 
        ref={ref}
        variants={staggerContainer}
        initial='hidden'
        animate={controls}
        className={styles['other-list']}>
            <motion.h5
            variants={fadeIn}
            >you may also like</motion.h5>
            <ul>
                {props.products.map((product, i)=>
                    <motion.li
                    variants={translateUp}
                    key={i}>
                        <img src={product.image[props.deviceSize]} />
                        <h5>{product.name}</h5>
                        <Button type='button' color='orange' href={`/products/${product.slug}`}>see product</Button>
                    </motion.li>
                    
                )}
            </ul>
        </motion.div>
    )
}
