import { useEffect } from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

import Button from '../UI/Button';
import { fadeIn, staggerContainer, translateXFromLeft } from '../animation/animation';
import styles from './CategoryItem.module.css';
export default function CategoryItem(props) {
    const {product, deviceSize} = props;
    const controls = useAnimation();
    const {ref, inView} = useInView();
    
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
      
    }, [controls, inView]);
    return (
        <motion.li 
        ref={ref}
        variants={staggerContainer}
        initial='hidden'
        animate={controls}
        key={product.id} 
        className={`${!(product.id%2===0) ? styles['reverse'] : ''} ${styles['category-item']}`}>
            <motion.img 
            variants={fadeIn}
            src={product.categoryImage[deviceSize]} />
            <motion.div 
            variants={translateXFromLeft}
            className={styles['product-info']}>
                {product.new && <p className='overline'>new product</p>} 
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <Button href={`/products/${product.slug}`} color='orange'>see product</Button>
            </motion.div>
        </motion.li>
    )
}
