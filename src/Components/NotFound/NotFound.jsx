import React from 'react';
import error from '../../assets/imgs/error.png';
import style from './NotFound.module.css';
export default function NotFound() {
    return (
        <>
        <div className={`${style.trick}`}></div>
        <div className={`vh-75  d-flex justify-content-center align-items-center ${style.height}`}>
            <div className='img'>
                <img className='w-100' src={error} alt="not found" />
            </div>
        </div>
        </>
    )
}
