import {useSelector} from 'react-redux';

import styles from './Category.module.css';
import CategoryItem from './CategoryItem';

export default function Category(props) {

    const deviceSize = useSelector(state=> state.device.deviceSize);

    return (
    
            <ul className={styles['product-list']}>
                {props.categoryDetail.map((product, i)=>
                   <CategoryItem key={i} product={product} deviceSize={deviceSize}/>
                )}  
            </ul>
    
        
    )
}
