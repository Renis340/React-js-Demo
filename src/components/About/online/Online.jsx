import React from 'react'
import "./online.css";

function Online({user}) {
  return (
    <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
                { 
                    (user.status === "online") ?
                    <>
                        <span className="rightbarOnline"></span> 
                    </>:
                    <>
                        <span className="rightbarOffline"></span>
                    </>
                }
        </div>
        <div className='rightbardate'>
            <div>
                <span className="rightbarUsername">{user.username}</span>
            </div>
            <div>
                {
                    (user.date) ? <span className="rightbardatefont">{user.date}</span> : <span className="rightbardateonline">Online</span>
                }
            </div>
        </div>
    </li>
  )
}

export default Online
