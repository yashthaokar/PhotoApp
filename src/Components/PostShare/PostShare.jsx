import React from 'react'
import { useState, useRef } from 'react'
import './PostShare.css'
import yash from '../../images/yash.jpg'
import { IoMdPhotos } from 'react-icons/io'
import { FaVideoSlash } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { BsCalendarDayFill } from 'react-icons/bs'
import { GiCrossMark } from 'react-icons/gi'


const PostShare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const ImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0]
            setImage({
                image: URL.createObjectURL(img)
            })
        }
    }


    return (
        <div className="PostShare">
            <img src={yash} alt="" />
            <div>
                <input type="text" placeholder="what's happenging" />

                <div className='postOptions'>
                    <div className="option" style={{ color: "green" }}
                        onClick={() => imageRef.current.click()}
                    >
                        <IoMdPhotos />Photo

                    </div>
                    <div className="option" style={{ color: "orange" }}>
                        <FaVideoSlash />Video

                    </div>
                    <div className="option" style={{ color: "#1E40AF" }}>
                        <GoLocation />Location

                    </div>
                    <div className="option" style={{ color: "red" }}>
                        <BsCalendarDayFill />Shedule

                    </div>
 {/* ------------------------------------------------------------- */}
                    <div style={{ display: "none" }} >
                        <input type="file" name='myImage' ref={imageRef} onChange={ImageChange} />
                    </div>
                </div>
                {image &&(
                    <div className="previewImage">
                        <GiCrossMark onClick={()=>setImage(null)}/>
                        <img src={image.image} alt="" 
                        />
                       
                    </div>// image is our usestate and image is our key
                )}
            </div>
        </div>
    )
}

export default PostShare