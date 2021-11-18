import React from "react";
import { useDispatch } from "react-redux";
import AmountInput from "../UI/AmountInput";
import { CartActions } from "../../store/cart-slice";

import styles from './CartItem.module.css';

export default function CartItem(props) {
    const {data}= props;
    const dispatch = useDispatch();
    const onChangeHandler = (updatedAmount)=>{
        dispatch(CartActions.updateProduct({
            slug: data.slug,
            amount: updatedAmount,
        }))
    }
    return (
        <li className={styles['cart-item']}>
            <div className={styles['item-info']}>
                <img src={data.image} />
                <div>
                    <h6>{data.slug.split('-')[0]}</h6>
                    <p>{`$ ${data.price}`}</p>
                </div>
            </div>
            <AmountInput value={data.amount} onChange={onChangeHandler}/>   
        </li>
    )
}
