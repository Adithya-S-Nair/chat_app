import React from 'react'

const Input = () => {
    return (
        <div className="input">
            <input
                type="text"
                placeholder="Type a message"
            // onChange={(e) => setText(e.target.value)}
            // value={text}
            />
            <div className="send">
                <img src="" alt="" />
                <input
                    type="file"
                    style={{ display: "none" }}
                    id="file"
                // onChange={(e) => setImg(e.target.files[0])}
                />
                <label htmlFor="file">
                    <i className="fa fa-paperclip text-default pointer" aria-hidden="true"></i>
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input