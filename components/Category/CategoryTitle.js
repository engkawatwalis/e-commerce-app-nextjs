import React from "react"
import { useRouter } from "next/router";

import styles from './CategoryTitle.module.css'

export default function CategoryTitle(props) {
    
    const router = useRouter();
    const CategoryTitle = router.query.category;
    return (
        <div className={styles.title}>
                <h4>{CategoryTitle}</h4>
        </div>
    )
}
