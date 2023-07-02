import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Drawer from './Drawer';

const Titlebar = () => {
    const [drawer, setDrawer] = useState(false);

    const openDrawer = () => {
        setDrawer(true);
    };

    return (
        <>
            <div className='navbar'>
                <Link
                    className='d-flex gap-2 justify-content-center align-items-center text-white'
                    to={'/'}
                    >
                    <i className='fas fa-comment-alt pt-1'></i>
                    <span className="logo">ChatterBox</span>
                </Link>
                <i className="fa-solid fa-bars pointer" onClick={openDrawer}></i>
            </div>
            {drawer && <Drawer open={drawer} anchor='left' setDrawer={setDrawer} />}
        </>
    );
};

export default Titlebar;
