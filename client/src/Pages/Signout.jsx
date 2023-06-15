import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/userContext';

const Logout = () => {
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate();
    useEffect(() => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setUser(null);
        navigate('/signin');
    })
    return (
        <div>Please Wait</div>
    )
}

export default Logout