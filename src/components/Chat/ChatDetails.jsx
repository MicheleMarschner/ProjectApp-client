import React from 'react'
import { FaVideo, FaFolder, FaPhone } from 'react-icons/fa';

function ChatDetails() {
    return (
        <div className="details flex_row">
            <div className="info flex_row">
                <div style={{fontSize: "1.5rem", marginRight: "2.5rem"}}>Max</div>
                <div style={{color: "var(--grey)"}}><span className="dot"></span>status</div>
            </div>
            <div className="socialButtons flex_row">
                <FaFolder className="icon"/>
                <FaPhone className="icon"/>
                <FaVideo className="icon"/>
            </div>
        </div>
    )
}

export default ChatDetails
