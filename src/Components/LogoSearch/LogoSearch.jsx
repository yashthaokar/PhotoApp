import React from 'react'
import './LogoSearch.css'
import { GiFlowerTwirl } from 'react-icons/gi';
import { BsSearch } from "react-icons/bs"

const LogoSearch = () => {
    return (
        <div className="LogoSearch">
            <GiFlowerTwirl />
            <div className="Search">
                <input type="text" placeholder='#search' />
                <div className="Search-icon">
                    <BsSearch />
                </div>
            </div>

        </div>
    )
}

export default LogoSearch