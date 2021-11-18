import {motion, AnimatePresence} from 'framer-motion'
import styles from './Card.module.css'

export default function Card(props) {
    return (

            <motion.div 
            variants={props.variants}
            initial={props.initial}
            animate={props.animate}
            exit={props.exit}
            className={`${styles.card} ${styles[props.color]} ${props.className}`}>
                {props.children}
            </motion.div>
        
    )
}
