import React from 'react'
import "./Posts.css"
import PostData from '../Data/PostsData'
import Post from '../Post/Post'


const Posts = () => {
  return (
    <div className="Post">
      {PostData.map((post, id) => {
        return <Post/>
})}
    </div>
  )
}

export default Posts