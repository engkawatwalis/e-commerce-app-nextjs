import React from "react";
import {useSelector, useDispatch} from 'react-redux';

import Modal from "../UI/Modal";
import Card from "../UI/Card";
import styles from './Cart.module.css';
import CartItem from "./CartItem";
import Button from "../UI/Button";
import { CartActions } from "../../store/cart-slice";
import { translateDown} from "../animation/animation";

export default function Cart(props) {
    
    const dispatch = useDispatch();
    const cartList = useSelector(state => state.cart.cart);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    const removeAllHandler = ()=>{
        dispatch(CartActions.removeProduct());
    }

    
    return (
        <Modal onClose={props.onClose}>
            <Card 
            variants={translateDown}
            initial='hidden'
            animate='visible'
            exit='exit'
            className={styles['cart-container']}>
                <div className={styles['cart-title']}>
                    <h5>cart {`(${cartList.length})`}</h5>
                    <button onClick={removeAllHandler}><p>Remove all</p></button>
                </div>
                
                {cartList.length > 0 &&
                    <ul>
                        {cartList.map(item=>
                            <CartItem key={item.slug} data={item}/>
                        )}
                    </ul>
                }
                {cartList.length === 0 &&
                    <p>
                        Your cart is empty
                    </p>
                }
                <div className={styles['total-price']}>
                    <p>TOTAL</p>
                    <h6>{`$ ${totalPrice}`}</h6>
                </div>
                <Button disabled={cartList.length === 0} type='button' onClick={props.onCheckOut} color='orange'>check out</Button>
            </Card>
        </Modal>
    )
}
