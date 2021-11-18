import React, {useEffect} from "react";
import {motion, useAnimation} from 'framer-motion';
import { staggerContainer, fadeIn } from "../animation/animation";
import {ref, useInView} from 'react-intersection-observer';

import CategoryItem from "./CategoryItem";
import styles from './CategoryList.module.css';

export default function CategoryList(props) {

    const DUMMY_CATEGORY=[
        {
          id: 1,
          title: 'headphones',
          image: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
          link: '/headphones'
        },
        {
          id: 2,
          title: 'speakers',
          image: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
          link: '/speakers'
        },
        {
          id: 3,
          title: 'earphones',
          image: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
          link: '/earphones'
        }
      ]

      const controls = useAnimation();
      const {ref, inView} = useInView();
  
      useEffect(() => {
          if (inView) {
            controls.start('visible');
          }
      
        }, [controls, inView]);

    return (
        <motion.ul 
          ref={ref}
          variants={staggerContainer} 
          initial='hidden'
          animate={controls}
          className={styles['category-list']}>
            {DUMMY_CATEGORY.map(category=>{
                return <CategoryItem 
                          variants={fadeIn}
                          key={category.id} 
                          categoryDetail={category} />
            })}
        </motion.ul>
    )
}
