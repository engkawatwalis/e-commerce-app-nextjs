import React, {useState, useEffect} from "react";

import styles from './Radio.module.css';

export default function Radio(props) {

    const [selected, setSelected] = useState(props.options[0].method)
    const selectHandler = (submitOption) =>{
        setSelected(submitOption);
    }

    useEffect(() => {
        props.onChange(selected);
        
    }, [selected])
    return (
        <ul className={styles['options']}>
            {props.options.map((option, i)=>
                <li key={i}>
                    <button type='button' onClick={()=>selectHandler(option.method)} className={styles[selected === option.method ? 'active' : '']} >
                        <div className={styles['radio-container']}>
                        {selected === option.method && <div className={styles['radio-select']} />}
                        </div>
                        <p>{option.title}</p>
                    </button>
                    
                </li>
                )}
        </ul>
    )
}
