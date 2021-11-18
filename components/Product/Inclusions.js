import { useEffect } from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

import styles from './Inclusions.module.css';
import { translateUp} from '../animation/animation';

export default function Inclusions(props) {

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
        className={styles['product-inclusions']}>
                <h3>in the box</h3>            
                <ul>
                    {product.includes.map((include, i)=>
                        <li key={i}>
                            <p className='subtitle'>{`${include.quantity}x`}</p>
                            <p>{include.item}</p>
                        </li>
                    )}
                </ul>
        </motion.div>
    )
}