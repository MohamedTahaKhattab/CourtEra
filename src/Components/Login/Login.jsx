import React, { useContext, useState } from 'react'
import style from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/Style/style.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { UserContext } from '../Context/UserContext';


export default function Login() {
let {setUserEmail,setUserName,setcreatedAt} = useContext(UserContext);
    const [error, setError] = useState(null);
    let navigate = useNavigate();
    const [typein3, setTyping3] = useState(false);
    const [typeing4, setTyping4] = useState(false);

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

    
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let validateSchema = yup.object({
        password: yup.string().matches(passwordRegex, 'password is invalid').required("Password is Required"),
        email: yup.string().email("Invalid Email").required('Email is Required')
    })

    async function subRegister(values) {
        const { data } = await axios.post(`http://localhost:4000/user/signIn`, values);
        if (data.message === 'done') {
            localStorage.setItem('userEmail',data.isEmailExist.email);
            localStorage.setItem('userName',data.isEmailExist.userName);
            localStorage.setItem('createdAt',data.isEmailExist.createdAt);
            setUserEmail(data.isEmailExist.email);
            setUserName(data.isEmailExist.userName);
            setcreatedAt(data.isEmailExist.createdAt)
            navigate('/home');
        } else {
            setError(data.message);
        }
    }


    let formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        }, validationSchema: validateSchema,
        onSubmit: subRegister
    })







    return (
        <>
            <div className={`${style.trick}`}></div>
            <section className={`${style.height} d-flex flex-column  align-items-center justify-content-center`}>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h2 className={`${style.heading} mb-3`}>Login</h2>
                    <div className="line d-flex justify-content-center align-items-center mt-2">
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
                                <label className={`${typein3 ? style.label : style.Active} position-absolute`} htmlFor="#">userEmail :</label>
                                <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} onKeyUp={getData3} type="text" name="email" id="" className={` ${style.inputBorRadius} ${style.inputMargin} w-100`} placeholder='userEmail' />
                            </div>
                            {formik.errors.email && formik.touched.email ? <p className='alert p-1 w-100 alert-danger'>{formik.errors.email}</p> : ''}
                            <div className={` ${style.dHeight}  position-relative ${style.inputMargin}`}>
                                <label className={`${typeing4 ? style.label : style.Active} position-absolute`} htmlFor="#">userPassword :</label>
                                <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} onKeyUp={getData4} type="text" name="password" id="" className={` ${style.inputBorRadius} w-100`} placeholder='userPassword' />
                            </div>
                            {formik.errors.password && formik.touched.password ? <p className='alert p-1 w-100 alert-danger'>{formik.errors.password}</p> : ''}
                        </div>
                        <button type="submit" className={`${style.btnLayout} mt-2  text-white`}>login</button>
                        <div className={`${style.registerDiv} d-flex mt-2 `}>
                            <p className={`${style.marginRight} ${style.fontBold}`}>dont have an account? </p>
                            <Link className={`${style.NavBarLiL} ${style.regStyle} nav-link active`} aria-current="page" to={'/register'}>Register</Link>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
