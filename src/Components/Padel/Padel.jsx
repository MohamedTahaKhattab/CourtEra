import React from 'react';
import '../../assets/Style/style.css';
import style from './Padel.module.css';
import court1 from '../../assets/imgs/padel/1810126-1911854919.jpeg';
import court2 from '../../assets/imgs/padel/3adcad_152b5c00ec5246ba8c37147c5aa43fb8_mv2.webp';
import court3 from '../../assets/imgs/padel/500-×-380-px-2023-08-07T104430.169.png';
import court4 from '../../assets/imgs/padel/764d5d_c1d0c398ba4c4b80830b7c789ceace7b_mv2.webp';
import court5 from '../../assets/imgs/padel/WhatsApp-Image-2023-03-30-at-20.20.29.jpeg';
import court6 from '../../assets/imgs/padel/e60f4a_ed60ca625e954e5cbb782699b5169ece_mv2_d_2000_1333_s_2.jpg';
export default function Padel() {
    return (
        <>
            <div className={`${style.trick}`}></div>
            <section className={`${style.sectionMargin} d-flex align-items-center flex-column`}>
            <div className={`'d-flex flex-column justify-content-center align-items-center ${style.headMargin}`}>
                    <h2 className={`${style.heading} mb-3`}>Padel</h2>
                    <div className="line d-flex justify-content-center align-items-center mt-2">
                        <div className={`${style.part}`}></div>
                        <i className={`fa-solid fa-star ${style.starColor} ${style.marginLeftRight}`}></i>
                        <div className={`${style.part}`}></div>
                    </div>
                </div>
                <div className="container ">
                    <div className="row gy-5 gx-5">
                        <div className="col-md-4 ">
                            <div class={`${style.car} pb-2`}>
                                <div className={`${style.imgContainer} position-relative`}>
                                    <img src={court1} className={`${style.court1} `} alt="court1" />
                                    <div className={`${style.courtLayer} d-flex justify-content-center align-items-center flex-column`}>
                                        <h3 className="card-text text-white">Padel World Court</h3>
                                        <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque blanditiis eligendi quibusdam ipsum excepturi sunt</p>
                                        <div className=" d-flex  flex-column">
                                            <div className="priceAndRating d-flex align-items-center  mt-2 text-white">
                                                <p className='prie marg-right'>150 EGP/Hour</p>
                                                <p className='rating'><i className="fa-solid fa-star rating-color"></i> 5.0</p>
                                            </div>
                                        </div>
                                        <div className='w-100  d-flex justify-content-center mt-3'>
                                            <button className={`btn text-white reservationBtnL w-75 ${style.button}`}>Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div class={`${style.car} pb-2`}>
                                <div className={`${style.imgContainer} position-relative`}>
                                    <img src={court2} className={`${style.court1} `} alt="court2" />
                                    <div className={`${style.courtLayer} d-flex justify-content-center align-items-center flex-column`}>
                                        <h3 className="card-text text-white">Padel Up Elite Court</h3>
                                        <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque blanditiis eligendi quibusdam ipsum excepturi sunt</p>
                                        <div className=" d-flex  flex-column">
                                            <div className="priceAndRating d-flex align-items-center  mt-2 text-white">
                                                <p className='prie marg-right'>120 EGP/Hour</p>
                                                <p className='rating'><i className="fa-solid fa-star rating-color"></i> 4.3</p>
                                            </div>
                                        </div>
                                        <div className='w-100  d-flex justify-content-center mt-3'>
                                            <button className={`btn text-white reservationBtnL w-75 ${style.button}`}>Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div class={`${style.car} pb-2`}>
                                <div className={`${style.imgContainer} position-relative`}>
                                    <img src={court3} className={`${style.court1} `} alt="court3" />
                                    <div className={`${style.courtLayer} d-flex justify-content-center align-items-center flex-column`}>
                                        <h3 className="card-text text-white">Padel Point Court</h3>
                                        <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque blanditiis eligendi quibusdam ipsum excepturi sunt</p>
                                        <div className=" d-flex  flex-column">
                                            <div className="priceAndRating d-flex align-items-center  mt-2 text-white">
                                                <p className='prie marg-right'>150 EGP/Hour</p>
                                                <p className='rating'><i className="fa-solid fa-star rating-color"></i> 5.0</p>
                                            </div>
                                        </div>
                                        <div className='w-100  d-flex justify-content-center mt-3'>
                                            <button className={`btn text-white reservationBtnL w-75 ${style.button}`}>Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div class={`${style.car} pb-2`}>
                                <div className={`${style.imgContainer} position-relative`}>
                                    <img src={court4} className={`${style.court1} `} alt="court4" />
                                    <div className={`${style.courtLayer} d-flex justify-content-center align-items-center flex-column`}>
                                        <h3 className="card-text text-white">Life Padel Court</h3>
                                        <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque blanditiis eligendi quibusdam ipsum excepturi sunt</p>
                                        <div className=" d-flex  flex-column">
                                            <div className="priceAndRating d-flex align-items-center  mt-2 text-white">
                                                <p className='prie marg-right'>130 EGP/Hour</p>
                                                <p className='rating'><i className="fa-solid fa-star rating-color"></i> 5.0</p>
                                            </div>
                                        </div>
                                        <div className='w-100  d-flex justify-content-center mt-3'>
                                            <button className={`btn text-white reservationBtnL w-75 ${style.button}`}>Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div class={`${style.car} pb-2`}>
                                <div className={`${style.imgContainer} position-relative`}>
                                    <img src={court5} className={`${style.court1} `} alt="court5" />
                                    <div className={`${style.courtLayer} d-flex justify-content-center align-items-center flex-column`}>
                                        <h3 className="card-text text-white">Xpadel Court</h3>
                                        <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque blanditiis eligendi quibusdam ipsum excepturi sunt</p>
                                        <div className=" d-flex  flex-column">
                                            <div className="priceAndRating d-flex align-items-center  mt-2 text-white">
                                                <p className='prie marg-right'>100 EGP/Hour</p>
                                                <p className='rating'><i className="fa-solid fa-star rating-color"></i> 4.0</p>
                                            </div>
                                        </div>
                                        <div className='w-100  d-flex justify-content-center mt-3'>
                                            <button className={`btn text-white reservationBtnL w-75 ${style.button}`}>Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div class={`${style.car} pb-2`}>
                                <div className={`${style.imgContainer} position-relative`}>
                                    <img src={court6} className={`${style.court1} `} alt="court6" />
                                    <div className={`${style.courtLayer} d-flex justify-content-center align-items-center flex-column`}>
                                        <h3 className="card-text text-white">Hpadel Court</h3>
                                        <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque blanditiis eligendi quibusdam ipsum excepturi sunt</p>
                                        <div className=" d-flex  flex-column">
                                            <div className="priceAndRating d-flex align-items-center  mt-2 text-white">
                                                <p className='prie marg-right'>100 EGP/Hour</p>
                                                <p className='rating'><i className="fa-solid fa-star rating-color"></i> 5.0</p>
                                            </div>
                                        </div>
                                        <div className='w-100  d-flex justify-content-center mt-3'>
                                            <button className={`btn text-white reservationBtnL w-75 ${style.button}`}>Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
