import React from 'react'

const Search = () => {
    var err = false;
    return (
        <div className="container">
            <div className="search">
                <div className="searchForm d-flex align-items-center">
                    <input
                        type="text"
                        placeholder="Search"
                    // onKeyDown={handleKey}
                    // onChange={(e) => setUsername(e.target.value)}
                    // value={username}
                    />
                    <i className="fa fa-times text-default pointer" aria-hidden="true"></i>
                </div>
                {err && <span>User not found!</span>}
                {/* {user && (
                <div className="userChat">
                    <img src="" alt="" />
                    <div className="userChatInfo">
                        <span>user displayName</span>
                    </div>
                </div>
            )} */}
            </div>
        </div>
    )
}

export default Search