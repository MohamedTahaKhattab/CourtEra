import React, { useEffect } from 'react';
import style from './Rivals.module.css';
import img1 from '../../assets/imgs/Abstract silhouette of a soccer player kicking a ball_ vector illustration.jpeg';
import img2 from '../../assets/imgs/Free stock photos - Rgbstock - Free stock images _ Tennis 4.jpeg';
export default function Rivals() {


    return (
        <>
        <div className={`${style.trick}`}></div>
            <section className={`${style.sectionMargin}`}>
                <div className="container">
                    <ul className="accordion">
                        <li>
                            <img src={img1} />
                            <div className="content">
                                <span>
                                    <h2>Mohamed Taha</h2>
                                    <p>Football Player</p>
                                </span>
                            </div>
                            </li>
                        <li>
                            <img src={img2} />
                            <div className={`${style.marginLeft}`}>
                                <span>
                                    <h2>Bedo Ashraf</h2>
                                    <p>Padel Player</p>
                                </span>
                            </div>
                        </li>
                    </ul>

                </div>
            </section>
        </>
    )
}
