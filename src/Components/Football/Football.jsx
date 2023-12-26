import React from 'react';
import '../../assets/Style/style.css';
import style from './Football.module.css';
import court1 from '../../assets/imgs/football/131281-3B275711-A9F5-4EED-9C93-6433DAFC5EBD.jpeg';
import court2 from '../../assets/imgs/football/2015-635683415713182809-318.jpg';
import court3 from '../../assets/imgs/football/2018_11_30_17_50_4_426.jpg';
import court4 from '../../assets/imgs/football/23-11-2022_09_49_39_GomhuriaOnline_10041669189779.jpeg';
import court5 from '../../assets/imgs/football/2018_11_30_18_32_25_556.jpg';
import court6 from '../../assets/imgs/football/kuwait-mini-football-field-facility-construction-22999.webp';
export default function Football() {
    return (
        <>
            <div className={`${style.trick}`}></div>
            <section className={`${style.sectionMargin} d-flex align-items-center flex-column`}>
            <div className={`'d-flex flex-column justify-content-center align-items-center ${style.headMargin}`}>
                    <h2 className={`${style.heading} mb-3`}>FootBall</h2>
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
                                    <img src={court2} className={`${style.court1} `} alt="court2" />
                                    <div className={`${style.courtLayer} d-flex justify-content-center align-items-center flex-column`}>
                                        <h3 className="card-text text-white">Al Lycee Court</h3>
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
                                    <img src={court1} className={`${style.court1} `} alt="court1" />
                                    <div className={`${style.courtLayer} d-flex justify-content-center align-items-center flex-column`}>
                                        <h3 className="card-text text-white">Al Frosya Court</h3>
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
                                        <h3 className="card-text text-white">Gardenia Court</h3>
                                        <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque blanditiis eligendi quibusdam ipsum excepturi sunt</p>
                                        <div className=" d-flex  flex-column">
                                            <div className="priceAndRating d-flex align-items-center  mt-2 text-white">
                                                <p className='prie marg-right'>150 EGP/Hour</p>
                                                <p className='rating'><i className="fa-solid fa-star rating-color"></i> 4.5</p>
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
                                        <h3 className="card-text text-white">Zoser Court</h3>
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
                                        <h3 className="card-text text-white">Talaa Court</h3>
                                        <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque blanditiis eligendi quibusdam ipsum excepturi sunt</p>
                                        <div className=" d-flex  flex-column">
                                            <div className="priceAndRating d-flex align-items-center  mt-2 text-white">
                                                <p className='prie marg-right'>100 EGP/Hour</p>
                                                <p className='rating'><i className="fa-solid fa-star rating-color"></i> 4.7</p>
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
                                        <h3 className="card-text text-white">The City Court</h3>
                                        <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque blanditiis eligendi quibusdam ipsum excepturi sunt</p>
                                        <div className=" d-flex  flex-column">
                                            <div className="priceAndRating d-flex align-items-center  mt-2 text-white">
                                                <p className='prie marg-right'>100 EGP/Hour</p>
                                                <p className='rating'><i className="fa-solid fa-star rating-color"></i> 4.5</p>
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
