import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
    return (
        <nav id="sidebarMenu" className="collapse navbar-danger d-lg-block sidebar collapse bg-white">
            <div className="position-sticky">
                <h1 className='position-fixed top-0'>Chats</h1>
                <div className="list-group list-group-flush mx-3 mt-4">
                    <Link to="/" className="list-group-item list-group-item-action py-2 ripple active">
                        <i className="fas fa-chart-area fa-fw me-3"></i>
                        <span>Dashboard</span>
                    </Link>

                    <Link to="/" className="list-group-item list-group-item-action py-2 ripple">
                        <i className="fas fa-users fa-fw me-3"></i>
                        <span>Users</span>
                    </Link>
                    <Link to="/" className="list-group-item list-group-item-action py-2 ripple">
                        <i className="fas fa-building fa-fw me-3"></i>
                        <span>All Bids</span>
                    </Link>

                    <Link to="/" className="list-group-item list-group-item-action py-2 ripple">
                        <i className="fas fa-money-bill fa-fw me-3"></i>
                        <span>Page Control</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Sidenav