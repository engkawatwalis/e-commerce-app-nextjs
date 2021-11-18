import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import { useMediaQuery } from 'react-responsive';
import { DeviceActions } from "../../store/device-slice";
import { CartActions } from "../../store/cart-slice";

export default function Layout(props) {

    const dispatch = useDispatch();
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const istablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

    useEffect(() => {
        if (isDesktop) return dispatch(DeviceActions.setDeviceSize({deviceSize: 'desktop'}));
        if (istablet) return dispatch(DeviceActions.setDeviceSize({deviceSize: 'tablet'}));
        if (isMobile) return dispatch(DeviceActions.setDeviceSize({deviceSize: 'mobile'}));
        
  }, [istablet, isDesktop, isMobile])

  useEffect(() => {
    dispatch(CartActions.initiateCart());
    
  }, [])
    return (
        <Fragment>
            <Header/>
            <main>
                {props.children}
            </main>
            <Footer />
        </Fragment>
    )
}
