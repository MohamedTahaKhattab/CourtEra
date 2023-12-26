import React, { useContext, useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

export default function Layout() {
    let { setUserEmail ,setUserName,setcreatedAt} = useContext(UserContext);
    useEffect(() => {
        if (localStorage.getItem('userEmail') !== null) {
            setUserEmail(localStorage.getItem('userEmail'));
            setUserName(localStorage.getItem('userName'));
            setcreatedAt(localStorage.getItem('createdAt'));
        }
    }, []);
    return (
        <>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </>
    )
}
