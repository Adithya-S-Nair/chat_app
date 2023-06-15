import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/userContext';
import axios from 'axios'
import Sidebar from '../Components/Sidebar'
import Chat from '../Components/Chat'

const Home = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext)
    useEffect(() => {
        const hasToken = document.cookie.includes('token');
        if (!hasToken) {
            return navigate('/signin')
        }
        axios.get('/home', { withCredentials: true }).then((response) => {
            if (response.status !== 200) {
                navigate('/signin');
            }
        })
    })
    return (
        <div className='home'>
            <div className="containerr">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default Home