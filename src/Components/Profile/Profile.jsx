import React, { useContext, useEffect, useState } from 'react'
import style from './Profile.module.css';
import { UserContext } from '../Context/UserContext';
import '../../assets/Style/style.css';
export default function Profile() {
    const {userEmail,UserName,createdAt} = useContext(UserContext);

    return (
        <>
            <div className={`${style.trick}`}></div>
            <section className={` ${style.profileSection} d-flex justify-content-center align-items-center`}>
                <div className={`${style.grayContain} container  `}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className={`${style.profileImg}  d-flex justify-content-center align-items-center position-relative`}>
                                <div className={`${style.avatarCover} d-flex justify-content-center align-items-center `}>
                                    <i class={`fa-solid fa-user fa-7x ${style.avatarColor}`}></i>
                                    <div className={`${style.addPhoto} d-flex justify-content-center align-items-center`}>
                                        <p className={`${style.addPhotoPara}`}>Add Photo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="profileData ">
                                <p className={`${style.paraProperties}`}>UserName : <span className={`${style.dataColor}`}> {UserName} </span></p>
                                <p className={`${style.paraProperties} mt-4`}>Email : <span className={`${style.dataColor}`}> {userEmail} </span></p>
                                <p className={`${style.paraProperties} mt-4`}>createdAt : <span className={`${style.dataColor}`}> {createdAt} </span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
