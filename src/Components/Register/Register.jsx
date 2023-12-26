import React, { useState } from 'react'
import style from './Register.module.css';
import '../../assets/Style/style.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Register() {

    const [error, setError] = useState(null);

    let navigate = useNavigate();


    const [typeing, setTyping] = useState(false);
    const [typein2, setTyping2] = useState(false);
    const [typein3, setTyping3] = useState(false);
    const [typeing4, setTyping4] = useState(false);

    const getData = (val) => {
        if (val.target.value != '') {
            setTyping(true)
        } else {
            setTyping(false);
        }
    }
    const getData2 = (val) => {
        if (val.target.value != '') {
            setTyping2(true)
        } else {
            setTyping2(false);
        }
    }
    const getData3 = (val) => {
        if (val.target.value != '') {
            setTyping3(true)
        } else {
            setTyping3(false);
        }
    }
    const getData4 = (val) => {
        if (val.target.value != '') {
            setTyping4(true)
        } else {
            setTyping4(false);
        }
    }

    const phoneRegix = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{5})$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let validateSchema = yup.object({
        userName: yup.string().required('Username is required').min(4, 'Must be at least 4 characters'),
        password: yup.string().matches(passwordRegex, 'password is invalid').required("Password is Required"),
        email: yup.string().email("Invalid Email").required('Email is Required'),
        phone: yup.string().matches(phoneRegix, 'phone number is invalid').required('phone is Required')
    })

    async function subRegister(values) {
        const { data } = await axios.post(`http://localhost:4000/user/signUp`, values);
        if (data.message === 'user registeration done') {
            navigate('/login');
        } else {
            setError(data.message);
        }
    }


    let formik = useFormik({
        initialValues: {
            userName: '',
            email: "",
            password: "",
            phone: ""
        }, validationSchema: validateSchema,
        onSubmit: subRegister
    })


    return (
        <>
        <div className={`${style.trick}`}></div>
        <section className={`${style.height}  d-flex flex-column  align-items-center`}>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h2 className={`${style.heading} `}>Register</h2>
                <div className="line d-flex justify-content-center align-items-center mt-1">
                    <div className={`${style.part}`}></div>
                    <i className={`fa-solid fa-star ${style.starColor} ${style.marginLeftRight}`}></i>
                    <div className={`${style.part}`}></div>
                </div>
            </div>
            <div className={`${style.containe}`}>
                {error != null ? <div className='alert alert-danger p-1'>{error}</div> : ''}
                <form onSubmit={formik.handleSubmit}>
                    <div className={`d-flex flex-column`}>

                        <div className={` ${style.dHeight}  position-relative ${style.inputMargin}`}>
                            <label className={`${typeing ? style.label : style.Active} position-absolute`} htmlFor="name">userName :</label>

                            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.userName} onKeyUp={getData} type="text" name="userName" id="name" className={`  w-100 ${style.inputBorRadius}  `} placeholder='userName' />
                        </div>
                        {formik.errors.userName && formik.touched.userName ? <p className='alert p-1 w-100 alert-danger'>{formik.errors.userName}</p> : ''}

                        <div className={` ${style.dHeight}  position-relative ${style.inputMargin}`}>
                            <label className={`${typein2 ? style.label : style.Active} position-absolute`} htmlFor="phone">userPhone :</label>
                            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} onKeyUp={getData2} type="tel" name="phone" id="phone" className={` ${style.inputBorRadius} ${style.inputMargin} w-100`} placeholder='userPhone' />
                        </div>

                        {formik.errors.phone && formik.touched.phone ? <p className='alert p-1 w-100 alert-danger'>{formik.errors.phone}</p> : ''}


                        <div className={` ${style.dHeight}  position-relative ${style.inputMargin}`}>
                            <label className={`${typein3 ? style.label : style.Active} position-absolute`} htmlFor="email">userEmail :</label>
                            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} onKeyUp={getData3} type="text" name="email" id="email" className={` ${style.inputBorRadius} ${style.inputMargin} w-100`} placeholder='userEmail' />
                        </div>

                        {formik.errors.email && formik.touched.email ? <p className='alert p-1 w-100 alert-danger'>{formik.errors.email}</p> : ''}

                        <div className={` ${style.dHeight}  position-relative ${style.inputMargin}`}>
                            <label className={`${typeing4 ? style.label : style.Active} position-absolute`} htmlFor="password">userPassword :</label>
                            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} onKeyUp={getData4} type="text" name="password" id="password" className={` ${style.inputBorRadius} w-100`} placeholder='userPassword' />
                        </div>

                        {formik.errors.password && formik.touched.password ? <p className='alert p-1 w-100 alert-danger'>{formik.errors.password}</p> : ''}


                    </div>

                    <button disabled={!(formik.isValid && formik.dirty)} type="submit" className={`${style.btnLayout} mt-2  text-white mb-3`}>register</button>


                </form>
            </div>
        </section>
        </>
    )
}
