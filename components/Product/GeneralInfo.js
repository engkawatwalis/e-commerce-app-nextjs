import { useEffect } from 'react';
import {useFormik} from 'formik';
import { useDispatch } from 'react-redux';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';


import Button from '../UI/Button';
import AmountInput from '../UI/AmountInput';
import { CartActions } from '../../store/cart-slice';
import styles from './GeneralInfo.module.css';
import { fadeIn, staggerContainer, translateXFromLeft } from '../animation/animation';

export default function GeneralInfo(props) {

    const {product, deviceSize} = props;
    const dispatch=useDispatch();
    const formik = useFormik({
        initialValues:{
            amount: 1
        },
        onSubmit: values=>{
            
            dispatch(CartActions.addProduct({
                slug: product.slug,
                amount: values.amount,
                price: product.price,
                image: product.cartImage

            }))
        },
    });

    const onChangeHandler = (amount)=>{
        formik.setFieldValue('amount', amount)
    }

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
        className={styles['general-info']}>
                <motion.img 
                variants={fadeIn}
                className={styles.hero} src={product.image[deviceSize]} />
                <motion.div 
                variants={translateXFromLeft}
                className={styles['general-info-text']}>
                    {product.new && <p className='overline'>new product</p>}    
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>        
                    <h6 className={styles.price}>{`$ ${product.price}`}</h6>        
                    <form onSubmit={formik.handleSubmit}>
                        <AmountInput value={1} onChange={onChangeHandler}/>
                        <Button type='submit' color='orange'>add to cart</Button>
                    </form> 
                </motion.div>
                
        </motion.div>
    )
}
