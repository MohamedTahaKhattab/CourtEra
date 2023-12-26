import React, { useState } from 'react'
import '../../assets/Style/style.css';
import style from './Home.module.css';
import footballPlayer from '../../assets/imgs/Premium Vector _ Football player abstract shadow art.jpeg';
import padelPlayer from '../../assets/imgs/Free stock photos - Rgbstock - Free stock images _ Tennis 4.jpeg';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function Home() {
    // const [error, setError] = useState(null);

    let validateSchema = yup.object({
        email: yup.string().email("Invalid Email").required('Email is Required'),
        name: yup.string().required('name is Required'),
    })


    let formik = useFormik(
        {
            initialValues: {
                email: "",
                name: ""
            }, validationSchema: validateSchema,
            // onSubmit: subRegister
        }
    );



    return (
        <>
            {/* home img */}
            <section className='homeSection position-relative'>
                <div className={`${style.home} `}></div>
                <div className={`${style.Layer} d-flex justify-content-center align-items-center`}>
                    <div className='content d-flex justify-content-center align-items-center text-white flex-column'>
                        <h1 className={`${style.contentHead}`}>COURTERA</h1>
                        <p className={`${style.contentP}`}>Book your</p>
                    </div>
                </div>
            </section>

            {/* Courtera section */}
            <h2 className={`text-center  ${style.CourteraHeading}`}>JOIN COURTERA</h2>
            <p className={`${style.CourtParagraph} text-center mt-2 mb-4`}>The First PlatForm to Book Football And Padel Courts in Egypt</p>
            <div className={`${style.greenLine}`}></div>
            <section className={`${style.footballSection} `}>
                <div className="container">
                    <div className='row'>
                        <div className="col-md-6">
                            <div className="item text-center">
                                <h3>WANT TO GO <span className={`${style.ProColor}`}>PRO?</span></h3>
                                <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta iure repellendus. Odit maxime perspiciatis nemo expedita explicabo consequuntur unde repellendus iure, cum enim quam, aut alias sapiente sequi debitis officia a suscipit atque quo possimus impedit similique vel nam nobis. Qui minima libero architecto est et quisquam illo molestiae?</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="item">
                                <img className='w-75' src={footballPlayer} alt="footballPlayer" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${style.padelSection} mt-5`}>
                <div className="container">
                    <div className='row'>
                        <div className="col-md-4">
                            <div className="item">
                                <img className='w-75' src={padelPlayer} alt="padelPlayer" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="item text-center">
                                <h3>LOOKING TO
                                    <span className={`${style.ProColor}`}> PLAY MORE?</span></h3>
                                <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel velit quia accusamus quo, quis corporis, fugit in sequi cumque, culpa sunt maxime! Voluptate culpa dolore vel doloribus in ea labore ad quisquam? Libero dignissimos maiores quibusdam, a saepe deleniti earum magnam quos facere nostrum aut at ullam commodi beatae reprehenderit architecto sunt atque harum aperiam necessitatibus animi expedita. Natus, ad.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* counter */}
            <section className={`${style.counterMargin} counter  position-relative  `}>
                <div className="layer2 " />
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="overlay-icon">
                                <span className="overlay-circle d-flex justify-content-center align-items-center ">
                                    <i className="fa-solid fa-shirt fa-2x text-white"></i>
                                </span>
                                <div className="para text-center">
                                    <p className="pt-4 p1">+1M</p>
                                    <p className="p2 text-light">Players</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="overlay-icon">
                                <span className="overlay-circle d-flex justify-content-center align-items-center">
                                    <i className={`fa-solid fa-futbol fa-2x text-white`}></i>
                                </span>
                                <div className="para text-center">
                                    <p className="pt-4 p1">+2K</p>
                                    <p className="p2 text-light">Games Played</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="overlay-icon">
                                <span className="overlay-circle d-flex justify-content-center align-items-center">
                                    <i className="fa-solid fa-comments fa-2x text-white"></i>
                                </span>
                                <div className="para text-center">
                                    <p className="pt-4 p1">550</p>
                                    <p className="p2 text-light">Messages Sent</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="overlay-icon">
                                <span className="overlay-circle d-flex justify-content-center ">
                                    <i className="fa-solid fa-award align-self-center fa-2x text-white" />
                                </span>
                                <div className="para text-center">
                                    <p className="pt-4 p1">48</p>
                                    <p className="p2 text-light">Award Won</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* contact */}
            <section className="contact-us text-center">
                <div className="heading d-flex flex-column align-items-center">
                    <h3 className='contactH3'>Contact Us.</h3>
                    <div className="dot-line5" />
                </div>
                <div className="col-sm-10 m-auto">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="contact-items d-flex flex-column justify-content-center align-items-center">
                                    <div className="contact-icons d-flex justify-content-center"><i className="fa-solid fa-location-arrow align-self-center" /></div>
                                    <h6 className="mt-2">Address</h6>
                                    <p>68 Elgaish - Cairo</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="contact-items  d-flex flex-column justify-content-center align-items-center">
                                    <div className="contact-icons d-flex justify-content-center"><i className="fa-solid fa-envelope align-self-center" /></div>
                                    <h6 className="mt-2">Email</h6>
                                    <p>Support@website.com</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="contact-items  d-flex flex-column justify-content-center align-items-center">
                                    <div className="contact-icons d-flex justify-content-center"><i className="fa-solid fa-phone align-self-center" /></div>
                                    <h6 className="mt-2">Phone</h6>
                                    <p>+20 010 2517 8918</p>
                                </div>
                            </div>
                            <div className="col-sm-12 m-auto f-div">
                                <form onSubmit={formik.handleSubmit} className="d-flex flex-column pb-3">
                                    <div className="inputs d-flex justify-content-between">
                                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} type="text" name="name" placeholder="Name" className="left" />
                                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" placeholder="Email" className="right" />
                                    </div>
                                    <textarea className="message" placeholder="Message" name="text" id="#" cols={30} rows={6} defaultValue={""} />
                                    <br />
                                    <button type="submit" className="me-auto sub-btn">submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
