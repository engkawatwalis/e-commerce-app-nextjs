import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";
import SummaryItem from './SummaryItem';


import styles from './Summary.module.css'

export default function Summary() {

    const cartList = useSelector(state => state.cart.cart);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    
    return (
        <Fragment>
            <h6>summary</h6>
            <ul>
                {cartList.map((item,i)=>
                
                    <SummaryItem key={i} data={item}/>
                
                )}
            </ul>
            <div className={styles['price-container']}>
                    <p>TOTAL</p>
                    <h6>{`$ ${totalPrice}`}</h6>
            </div>
            <div className={styles['price-container']}>
                    <p>SHIPPING</p>
                    <h6>$ 50</h6>
            </div>
            <div className={styles['price-container']}>
                    <p>VAT (INCLUDED)</p>
                    <h6>$ {((totalPrice+50)*0.1).toFixed(2)}</h6>
            </div>
            <div className={styles['price-container']}>
                    <p>GRAND TOTAL</p>
                    <h6 className={styles['grand-total']}>$ {(totalPrice+50).toFixed(2)}</h6>
            </div>
            
        </Fragment>
    )
}
