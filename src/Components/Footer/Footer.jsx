import React from 'react';
import style from './Footer.module.css';
import '../../assets/Style/style.css';
export default function Footer() {
    return (
        <section className={`${style.footer} d-flex justify-content-center align-items-center flex-column text-white mt-5 pt-2 pb-2 `}>
            <div className={`${style.icons} d-flex justify-content-center align-items-center mb-3 mt-4`}>
            <i className={`fa-brands fa-facebook-f ${style.marginRight}`}></i>
            <i className={`fa-brands fa-x-twitter ${style.marginRight}`}></i>
            <i className={`fa-brands fa-google ${style.marginRight}`}></i>
            <i className={`fa-brands fa-linkedin-in ${style.marginRight}`}></i>
            <i className={`fa-brands fa-github ${style.marginRight}`}></i>
            </div>
            <p>Copy Right 2018 © By <span className={`${style.ProColor}`}>COURTERA</span> All Rights Reserved</p>
        </section>
    )
}
