import React from 'react'
import './ProfileCard.css'
import cover from '../../images/cover.jpg'
import yash from '../../images/yash.jpg'


const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        
        <img src={cover} alt="" />
        <img src={yash} alt="" />
      </div>
      <div className="ProfileName">
        <span>Yash thaokar</span>
        <span>Juniar FullStack Developer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>1000</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>10</span>
            <span>Following</span>
          </div>
        </div>
        <hr />
      </div>
      <span>My Profile</span>

    </div>
  )
}

export default ProfileCard