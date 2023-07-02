import React, { useContext } from 'react'
import { ChatContext } from '../Context/chatContext';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ChatInfo = ({ avatarColor }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const img = false;
    const { selectedChat } = useContext(ChatContext)
    return (
        selectedChat && <div className="chatInfo">
            <div className="user d-flex">
                {img ? <img src="https://cdn5.vectorstock.com/i/1000x1000/92/89/hipster-avatar-image-vector-19639289.jpg" alt="" /> : <div className={`${avatarColor}`}>{selectedChat[1][0]}</div>}
                <span>{selectedChat[1]}</span>
            </div>
            <div className="chatIcons">
                <button
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    {!open?(<i className="fa-solid fa-ellipsis fa-rotate-90"></i>):(<i className="fa-solid fa-ellipsis fa-rotate-90 text-light"></i>)}
                </button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    sx={{
                        '& .MuiPaper-root': {
                            background: '#17212b',
                            marginTop: '4px',
                            marginBottom: '4px',
                            color:'white'
                        },
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default ChatInfo