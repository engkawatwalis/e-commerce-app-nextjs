import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion';

import Card from '../UI/Card';
import styles from './CategoryItem.module.css';

export default function CategoryItem(props) {

    const {categoryDetail} = props;
    return (
        <motion.li variants={props.variants} className={styles['category-item']}>
            <Card>
                <div className={styles.image}>
                    <Image src={categoryDetail.image} layout='fill' objectFit="contain"/>
                </div>
                <h6>{categoryDetail.title}</h6>
                <Link href={categoryDetail.link}>
                    <span>shop<img src='/assets/shared/desktop/icon-arrow-right.svg' /></span>
                </Link>
            </Card>
        </motion.li>
    )
}
