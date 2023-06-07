import React from 'react'
import Sidenav from '../Components/Sidenav'
import Mainnav from '../Components/Mainnav'

const Home = () => {
    return (
        <main className="d-flex">
            <Sidenav />
            <div className='w-100'>
                <Mainnav />
            </div>
        </main>
    )
}

export default Home