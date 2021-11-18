import { useEffect } from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

import styles from './Gallery.module.css';
import { fadeIn, staggerContainer, translateDown, translateUp, translateXFromLeft } from '../animation/animation';

export default function Gallery(props) {

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
        variants={staggerContainer}
        initial='hidden'
        animate={controls}
        className={styles['product-gallery']}>
            <motion.img 
            variants={translateXFromLeft}
            src={product.gallery.first[deviceSize]} />
            <motion.img 
            variants={translateUp}
            src={product.gallery.second[deviceSize]} />
            <motion.img 
            variants={translateDown}
            src={product.gallery.third[deviceSize]} />
        </motion.div>
    )
}
