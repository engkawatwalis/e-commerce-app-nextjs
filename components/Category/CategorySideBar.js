import React from "react";
import Modal from '../UI/Modal';
import CategoryList from '../Home/CategoryList';
import Card from "../UI/Card";
import styles from './CategorySideBar.module.css';

export default function CategorySideBar() {
    return (
        <Modal>
            <Card className={styles['sidebar-card']}>
                <CategoryList />
            </Card>
        </Modal>
    )
}
