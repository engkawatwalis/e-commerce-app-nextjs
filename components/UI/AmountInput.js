import React, {useState, useEffect} from "react";

import styles from './AmountInput.module.css';

export default function AmountInput(props) {

    const [amount, setAmount] = useState(props.value)
    const increaseHandler = ()=>{
        if (amount < 5)
        setAmount(prev => ++prev);
    }

    const decreaseHandler = ()=>{
        if (amount > 1)
        setAmount(prev => --prev);
    }

    useEffect(() => {
        props.onChange(amount);
        
    }, [amount])
    return (
        <div className={styles['amount-input']}>
            <button type='button' onClick={decreaseHandler}>-</button>
            <span>{amount}</span>
            <button type='button' onClick={increaseHandler}>+</button>
        </div>
        
    )
}
