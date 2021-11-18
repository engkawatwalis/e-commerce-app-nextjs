import React from "react";


import styles from './SummaryItem.module.css';

export default function SummaryItem(props) {
    const {data}= props;

    return (
        <li className={styles['summary-item']}>
            <div className={styles['item-info']}>
                <img src={data.image} />
                <div>
                    <h6>{data.slug.split('-')[0]}</h6>
                    <p>{`$ ${data.price}`}</p>
                </div>
            </div>
            <p>x{data.amount}</p>   
        </li>
    )
}