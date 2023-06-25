import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/userContext';

const Titlebar = () => {
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate();
    const openDrawer = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setUser(null);
        navigate('/signin');
    }
    return (
        <div className='navbar'>
            <span className="logo">Mern Chat</span>
            {/* <div className="user">
                <img src="https://cdn5.vectorstock.com/i/1000x1000/92/89/hipster-avatar-image-vector-19639289.jpg" alt="" />
                <span>Adithya S Nair</span>
                <i className="fa fa-sign-out ps-2 pointer" aria-hidden="true" onClick={handleSignout}></i>
            </div> */}
            <i className="fa-solid fa-bars pointer" onClick={openDrawer}></i>
        </div>
    )
}

export default Titlebar