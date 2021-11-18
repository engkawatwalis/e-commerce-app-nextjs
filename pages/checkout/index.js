import { Fragment } from "react"
import Head from 'next/head'
import Checkout from "../../components/Checkout/Checkout"

export default function CheckoutPage() {
    return (
        <Fragment>
            <Head>
                <title>Checkout</title>
                <meta name='description' content='Audiophile is an all in one stop to fulfill your audio needs.' />
            </Head>
            <Checkout />
        </Fragment>
        
    )
}
