import React, { Fragment } from "react"
import {useFormik} from 'formik';
import * as yup from 'yup';
import Card from "../UI/Card"
import Radio from "../UI/Radio";
import styles from './CheckoutForm.module.css'
import Summary from "./Summary";
import Button from '../UI/Button'

const validationSchema = yup.object().shape({
    name: yup.string()
                .matches(/^[a-zA-Z]+ [a-zA-Z]+$/, 'please enter valid fullname')
                .required('please enter your full name'),
    email: yup.string()
                .email('please enter a valid email address')
                .required('please enter your email address'),
    phone: yup.string()
                .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'please enter a valid phone number')
                .required('please enter your phone number'),
    address: yup.string()
                .max(20, 'please enter a valid address')
                .required('please enter your address'),
    zipCode: yup.string()
                .max(6, 'please enter a valid ZIP code')
                .required('please enter ZIP code'),
    city: yup.string()
                .max(20, 'please enter a valid city')
                .required('please enter your city'),
    country: yup.string()
                .max(15, 'please enter a valid country')
                .required('please enter yuor country'),
    eMoneyNum: yup.string()
                .min(9, 'please enter a valid e-Money Number')
                .max(9, 'please enter a valid e-Money Number')
                .required('please enter e-Money Number'),
    eMoneyPin: yup.string()
                .min(4, 'please enter a valid e-Money Pin')
                .max(4, 'please enter a valid e-Money Pin')
                .required('please enter e-Money Pin'),            
})
export default function CheckoutForm(props) {

    
    const paymentOptions = [
        {
            title: 'e-Money',
            method: 'eMoney'
        },
        {
            title: 'Cash on Delivery',
            method: 'cash'
        }
    ]

    const formik = useFormik({
        initialValues:{
            name: '',
            email: '',
            phone: '',
            address: '',
            zipCode: '',
            city: '',
            country: '',
            payment: paymentOptions[0].method,
            eMoneyNum: '',
            eMoneyPin: '',
        },
        onSubmit:values=>{
            console.log(values)
            formik.resetForm();
            props.onSuccess();
            
        },
        validationSchema: validationSchema
    })

    const paymentHandler = (paymentMethod) =>{
        formik.setFieldValue('payment', paymentMethod);
        if (paymentMethod === 'eMoney'){
            formik.setFieldValue('eMoneyNum', '');
            formik.setFieldValue('eMoneyPin', '');
        } else {
            formik.setFieldValue('eMoneyNum', '000000000');
            formik.setFieldValue('eMoneyPin', '0000');
        }
    }

    const payHandler = ()=>{
        formik.submitForm();
    }

    return (
        <div className={styles['checkout-wrapper']}>
            <form onSubmit={formik.handleSubmit}>
                <Card className={styles['checkout-form-card']}>
                    <h4>checkout</h4>
                    
                    <h6 className='subtitle'>billing details</h6>
                    <div className={styles['form-group']}>
                        <div className={styles['form-control']}>
                            <label htmlFor='name'>Name</label>
                            <input 
                                id='name' 
                                name='name'
                                type='text'
                                placeholder='Alexi Ward'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                            <small>{formik.touched.name && formik.errors.name || ' '}</small>
                        </div>
                        <div className={styles['form-control']}>
                            <label htmlFor='email'>Email Address</label>
                            <input 
                                id='email' 
                                name='email'
                                type='email'
                                placeholder='alexi@mail.com'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                            <small>{formik.touched.email && formik.errors.email || ' '}</small>
                        </div>
                        <div className={styles['form-control']}>
                            <label htmlFor='phone'>Phone Number</label>
                            <input 
                                id='phone' 
                                name='phone'
                                type='tel'
                                placeholder='0478999999'
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                            <small>{formik.touched.phone && formik.errors.phone || ' '}</small>
                        </div>
                    </div>
                    
                    <h6 className='subtitle'>shipping info</h6>
                    <div className={styles['form-group']}>
                       
                        <div className={`${styles['form-control']} ${styles['full-width']}`}>
                            <label htmlFor='address'>Your Address</label>
                            <input 
                                id='address' 
                                name='address'
                                type='text'
                                placeholder='1137 Williams Avenue'
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                            <small>{formik.touched.address && formik.errors.address || ' '}</small>
                        </div>
                        <div className={styles['form-control']}>
                            <label htmlFor='zipCode'>ZIP Code</label>
                            <input 
                                id='zipCode' 
                                name='zipCode'
                                type='text'
                                placeholder='3000'
                                value={formik.values.zipCode}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                            <small>{formik.touched.zipCode && formik.errors.zipCode || ' '}</small>
                        </div>
                        <div className={styles['form-control']}>
                            <label htmlFor='city'>City</label>
                            <input 
                                id='city' 
                                name='city'
                                type='text'
                                placeholder='Melbourne'
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                            <small>{formik.touched.city && formik.errors.city || ' '}</small>
                        </div>
                        <div className={styles['form-control']}>
                            <label htmlFor='country'>Country</label>
                            <input 
                                id='country' 
                                name='country'
                                type='text'
                                placeholder='Australia'
                                value={formik.values.country}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                            <small>{formik.touched.country && formik.errors.country || ' '}</small>
                        </div>
                    </div>
                    
                     <h6 className='subtitle'>Payment Details</h6>
                    <div className={styles['form-group']}>
                       
                        <div className={`${styles['form-control']} ${styles['full-width']}`}>
                            <label>Payment Method</label>
                            <Radio onChange={paymentHandler} options={paymentOptions} />
                        </div>
                        {formik.values.payment === 'eMoney' && 
                            
                            <Fragment>
                                <div className={styles['form-control']}>
                                    <label htmlFor='eMoneyNum'>e-Money Number</label>
                                    <input 
                                        id='eMoneyNum' 
                                        name='eMoneyNum'
                                        type='text'
                                        placeholder='238521993'
                                        value={formik.values.payment === 'eMoney' ? formik.values.eMoneyNum : '000000000'}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} />
                                    <small>{formik.touched.eMoneyNum && formik.errors.eMoneyNum || ' '}</small>
                                </div>
                                <div className={styles['form-control']}>
                                    <label htmlFor='eMoneyPin'>e-Money Pin</label>
                                    <input 
                                        id='eMoneyPin' 
                                        name='eMoneyPin'
                                        type='text'
                                        placeholder='1234'
                                        value={formik.values.payment === 'eMoney' ? formik.values.eMoneyPin : '0000'}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} />
                                    <small>{formik.touched.eMoneyPin && formik.errors.eMoneyPin || ' '}</small>
                                </div>
                            </Fragment>}
                    </div>
                </Card>
                <Card className={styles['summary-card']}>
                    <Summary />
                    <Button type='button' onClick={payHandler} color='orange'>{`continue & pay`}</Button>
                </Card>
                
            </form>
        </div>
        
    )
}
