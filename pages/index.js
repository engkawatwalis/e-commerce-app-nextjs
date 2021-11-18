import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react';
import About from '../components/Home/About';

import CategoryList from '../components/Home/CategoryList';
import FeaturedProductList from '../components/Home/FeaturedProductList';
import HeroBanner from '../components/Home/HeroBanner';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>audiophile</title>
        <meta name='description' content='Audiophile is an all in one stop to fulfill your audio needs.' />
      </Head>
      <HeroBanner />
      <div className='body'>
        <CategoryList />
        <FeaturedProductList />
        <About />
      </div>
      
    </Fragment>
    
  )
}
