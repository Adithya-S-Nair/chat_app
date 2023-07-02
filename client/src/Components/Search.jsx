import React, { useState } from 'react'

const Search = () => {
    const [searchKey, setSearchKey] = useState("");
    const clearKey = () => {
        setSearchKey("");
    }
    var err = false;
    return (
        <div className="container">
            <div className="search">
                <div className="searchForm d-flex align-items-center">
                    <input
                        value={searchKey}
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setSearchKey(e.target.value)}
                    />
                    {searchKey && <i className="fa fa-times text-default pointer" aria-hidden="true" onClick={clearKey}></i>}
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