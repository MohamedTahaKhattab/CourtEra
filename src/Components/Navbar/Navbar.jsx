import React, { useContext, useState } from 'react';
import style from './Navbar.module.css';
import '../../assets/Style/style.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';


export default function Navbar() {

        // change the height of the navbar

        const [height, setHeight] = useState(true);

        const changeHeight = () => {
            if (window.scrollY >= 4) {
                setHeight(false);
            } else {
                setHeight(true);
            }
        }
        window.addEventListener('scroll', changeHeight);
    
    
let {userEmail,setUserEmail,UserName,setUserName} = useContext(UserContext)

let navigate = useNavigate();
function logOut(){
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    setUserEmail(null);
    setUserName(null);
    navigate('/login');
}


    return (
        <><nav className={` navbar navbar-expand-lg fixed-top ${height ? style.NavbarP : style.Active}`}>
            <div className="container">
                <Link to={'home'}>

                    <div className={` position-relative ${style.football}`}>
                        <div className={`${style.footballIcon} ColorL`}><i className={`fa-solid fa-futbol fa-spin`}></i> <span className={`${style.logo}`}>COURTERA</span></div>
                        <div className={`${style.firstGroundLine} position-absolute`}></div>
                        <div className={`${style.secondGroundLine} position-absolute`}></div>
                        <div className={`${style.thirdGroundLine} position-absolute`}></div>
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`${style.margnLeft} d-flex jusify-content-center align-items-center  navbar-nav ms-auto mb-2 mb-lg-0`}>
                        <li className="nav-item">
                            <Link className={`${style.NavBarLiL} nav-link active`} aria-current="page" to={'home'}>Home</Link>
                        </li>

                        <div className={`dropdown text-white`}>
                            <button className={`${style.dropdownBtn} dropdown-toggle  text-white ${style.liFontWhight}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">Courts</button>
                            <ul className="dropdown-menu bg_main">
                                <li className="nav-item">
                                    <Link className={`${style.NavBarLiL} nav-link active`} aria-current="page" to={'football'}>FootBall</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`${style.NavBarLiL} nav-link active`} aria-current="page" to={'padel'}>Padel</Link>
                                </li>
                            </ul>
                        </div>
                        <li className="nav-item">
                            <Link className={`${style.NavBarLiL} nav-link active`} aria-current="page" to={'rivals'}>Rivals</Link>
                        </li>

                            {userEmail!==null?<><li className="nav-item">
                            <span className={`${style.NavBarLiL} nav-link active cursor-pointer`} aria-current="page" onClick={()=>logOut()} >Logout</span>
                        </li></>:<li className="nav-item">
                            <Link className={`${style.NavBarLiL} nav-link active`} aria-current="page" to={'login'}>Login</Link>
                        </li>}

                        {UserName!==null?<li className="nav-item">
                            <Link className={`${style.NavBarLiL} nav-link active`} aria-current="page" to={'profile'}> {UserName} <span><i className="fa-solid fa-user"></i></span></Link>
                        </li>:<li className="nav-item">
                            <Link className={`${style.NavBarLiL} nav-link active`} aria-current="page" to={'profile'}>Profile <span><i className="fa-solid fa-user"></i></span></Link>
                        </li>}
                        
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

