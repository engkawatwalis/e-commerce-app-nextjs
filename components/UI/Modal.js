import React from "react";
import ReactDOM, { createPortal } from 'react-dom';
// import {motion, AnimatePresence} from 'framer-motion';

import styles from './Modal.module.css';

const BackDrop = (props) => {
//     const animation={
//         hidden:{
//             opacity: 0,
            
//         },
//         show:{
//             opacity: 1,
//             transition: {
//                 ease: "easeInOut",
//                 duration: 0.4,
//               },
//         },
//         exit:{
//             opacity: 0,
//             transition: {
//                 ease: "easeInOut",
//                 duration: 0.4,
//               },
//         }
//     }
    return (
        <div className={styles.backDrop} onClick={props.onClick}/>
            
    );
}

const ModalOverlay = (props) => {
    return (
        <div 
            className={`${styles.modalOverlay} ${props.className}`}>
            {props.children}
        </div >
    );
}

const Modal = (props) => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(
                <BackDrop onClick={props.onClose} />, document.getElementById('backdrops')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay className={props.className}>
                    {props.children}
                </ModalOverlay>, document.getElementById('overlays')
            )}
        </React.Fragment>
    );
    
}
export default Modal;