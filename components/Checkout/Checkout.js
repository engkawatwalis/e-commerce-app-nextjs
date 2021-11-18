import React, {useState} from "react"
import {useRouter} from 'next/router'
import { useDispatch } from "react-redux"

import styles from './Checkout.module.css'
import CheckoutForm from "./CheckoutForm"
import OrderComplete from "./OrderComplete";
import { CartActions } from "../../store/cart-slice"


export default function Checkout () {

    const router = useRouter();
    const dispatch = useDispatch();
    const [success, setSuccess] = useState(false);
    const successHandler = ()=>{
        setSuccess(true);
    }

    const backHomeHandler = () => {
        setSuccess(false);
        dispatch(CartActions.removeProduct())
        router.push('/');
    }
    return (
        <div className={styles['checkout-wrapper']}>
            <CheckoutForm onSuccess={successHandler}/>
            {success && <OrderComplete onComplete={backHomeHandler}/>}
        </div>
    )
}
