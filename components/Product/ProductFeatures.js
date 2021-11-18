import { useEffect } from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

import styles from './ProductFeatures.module.css';
import { fadeIn, staggerContainer, translateUp, translateXFromLeft } from '../animation/animation';

export default function ProductFeatures(props) {

    const {product, deviceSize} = props;
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
        variants={translateUp}
        initial='hidden'
        animate={controls}
        className={styles['product-features']}>
            <h3>features</h3>    
            <p>{product.features}</p>
        </motion.div >
    )
}
