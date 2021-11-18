import Head from 'next/head'
import { useRouter } from 'next/router';
import axios from 'axios'
import { Fragment } from 'react';

import CategoryList from '../components/Home/CategoryList';
import About from '../components/Home/About';
import Category from '../components/Category/Category';
import CategoryTitle from '../components/Category/CategoryTitle';
export default function CategoryPage(props) {
    
    const {categoryDetail} = props;
    const router = useRouter();

    

    return (
        <Fragment>
            <Head>
                <title>{router.query.category}</title>
                <meta name='description' content='Audiophile is an all in one stop to fulfill your audio needs.' />
            </Head>
            <CategoryTitle title={categoryDetail.category}/>
            <div className='body'>
                <Category categoryDetail={categoryDetail} />
            <CategoryList key={categoryDetail.category} />
            <About key={categoryDetail.category}/> 
            </div>
            
        </Fragment>
        
    )
}

export async function getStaticProps(context){

    const category = context.params.category;    
    let transformedData=[];
    const response = await axios.get('https://e-commerce-6e043-default-rtdb.asia-southeast1.firebasedatabase.app/.json');
        
    for (const [key, value] of Object.entries(response.data)){
        transformedData.push(value);
    }
    
    const categoryData = transformedData.filter(data => data.category === category);
    
    return{
        props:{
            key: context.params.category,
            categoryDetail: categoryData
        }
    }
    
    
    
}

export async function getStaticPaths(){

    const definedParams = [
        {params: {category: 'headphones'}},
        {params: {category: 'earphones'}},
        {params: {category: 'speakers'}}
    ]
    return{
        paths: definedParams,
        fallback: false,
    }
}
