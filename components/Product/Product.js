import { useRouter } from 'next/router';


import {useDispatch, useSelector} from 'react-redux';


import styles from './Product.module.css';
import OtherList from './OtherList';
import GeneralInfo from './GeneralInfo';
import ProductFeatures from './ProductFeatures';
import Inclusions from './Inclusions';
import Gallery from './Gallery';



export default function Product(props) {

    const {product} = props;
    const router = useRouter();
    
    const deviceSize = useSelector(state => state.device.deviceSize);

    
    return (
        <div className={styles['product-detail']}>
            <GeneralInfo product={product} deviceSize={deviceSize}/>
            <ProductFeatures product={product}/>
            <Inclusions product={product}/>
            <Gallery product={product} deviceSize={deviceSize}/>
            <OtherList deviceSize={deviceSize} products={product.others}/>       
        </div>
        
    )
}
