import styles from './ImageWrapper.module.css';
import Image from 'next/image'
export default function ImageWrapper(props) {
    
    const stylesAdd = {width: props.width, height: props.height}
    
    return (
        
        <div className={styles.wrapper} style={stylesAdd}>
              <Image src={props.src} layout='fill' objectFit='contain'/>
        </div>
        
    )
}
