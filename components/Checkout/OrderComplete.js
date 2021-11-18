import React from "react";
import {useSelector} from 'react-redux';

import Modal from "../UI/Modal";
import Card from "../UI/Card";
import styles from './OrderComplete.module.css';
import SummaryItem from "./SummaryItem";
import Button from "../UI/Button";
export default function OrderComplete(props) {

    const cartList = useSelector(state => state.cart.cart);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const backHomeHandler = () => {

    }
    return (
        <Modal>
            <Card className={styles.card}>
                <img src='/assets/shared/desktop/icon-tick.svg'/>
                <h4>thank you for your order</h4>
                <p>You will receive an email confirmation shortly.</p>
                <Card className={styles['product-list-card']}>
                    <SummaryItem data={cartList[0]}/> 
                    {cartList.length > 1 && <p>and other {cartList.length - 1} {`item(s)`}</p>}
                    <div className={styles.total}>
                        <p>GRAND TOTAL</p>
                        <p>{`$ ${totalPrice+50}`}</p>
                    </div>
                </Card >
                <Button color='orange' type='button' onClick={props.onComplete}>back to home</Button>
            </Card>
        </Modal>
    )
}
