import axios from 'axios'
import { Fragment } from 'react';
import Head from 'next/head';

import CategoryList from '../../components/Home/CategoryList';
import About from '../../components/Home/About';
import Product from '../../components/Product/Product';

export default function CategoryPage(props) {
    
    const {productDetail} = props;

    return (
        <Fragment>
            <Head>
                <title>{productDetail.name}</title>
                <meta name='description' content='Audiophile is an all in one stop to fulfill your audio needs.' />
            </Head>
            <div className='body'>
                <Product product={productDetail}/>
                <CategoryList />
                <About /> 
            </div >
        </Fragment>
        
        
    )
}

export async function getStaticProps(context){

    const product = context.params.productID;    
    let transformedData=[];
    const response = await axios.get('https://e-commerce-6e043-default-rtdb.asia-southeast1.firebasedatabase.app/.json');
        
    for (const [key, value] of Object.entries(response.data)){
        transformedData.push(value);
    }
    
    const productData = transformedData.find(data => data.slug === product);
    
    return{
        props:{
            productDetail: productData,
            key: product
        }
    }
    
    
    
}

export async function getStaticPaths(){


    const definedParams = [
        {params: {productID: 'xx99-mark-one-headphones'}},
    ]
    return{
        paths: definedParams,
        fallback: 'blocking',
    }
}
