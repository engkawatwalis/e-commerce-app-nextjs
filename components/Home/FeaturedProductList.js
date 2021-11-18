import { useEffect } from 'react';
import {useSelector} from 'react-redux';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import { staggerContainer, translateUp } from '../animation/animation';
import Card from "../UI/Card";
import styles from './FeaturedProductList.module.css'
import Button from "../UI/Button";
export default function FeaturedProductList() {

    const deviceSize = useSelector(state => state.device.deviceSize);

    const controls = useAnimation();
    const {ref, inView} = useInView();
    
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
      
    }, [controls, inView]);

    return (
        <motion.ul 
        ref={ref}
        variants={staggerContainer}
        initial='hidden'
        animate={controls}
        className={styles['feature-product-list']}>
            <motion.li 
            variants={translateUp}
            className={styles['product-1']}>
                <Card color='orange'>
                    <img src={`/assets/home/${deviceSize}/image-speaker-zx9.png`}/>
                    <div>
                        <h2>zx9 speaker</h2>
                        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                        <Button href='/products/zx9-speaker' type='button' color='black' >see product</Button>
                    </div>
                                       
                </Card>
            </motion.li>
            <motion.li 
            variants={translateUp}
            className={styles['product-2']}>
                <Card>
                    <h3>zx7 speaker</h3>
                    <Button href='/products/zx7-speaker' type='button' color='black'>see product</Button>
                </Card>
            </motion.li>
            <motion.li 
            variants={translateUp}
            className={styles['product-3']}>
                <Card></Card>
                <Card color='grey'>
                    <h3>yx1 earphones</h3>
                    <Button href='/products/yx1-earphones' type='button' color='black'>see product</Button>
                </Card>
            </motion.li>
        </motion.ul>
    )
}
