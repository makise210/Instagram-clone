import React from 'react'
import './Timeline.css'
import Suggestion from './Suggestion'
import Post from './posts/Post'
import { useState } from 'react'


function Timeline() {
  const[posts, setPosts] = useState([
    {
      user: "redian_",
      postImage: "https://i.imgur.com/C4UylHi.jpeg",
      likes: 10,
      timestamp: "2d",
    },
    {
      user: "CKC_",
      postImage: "https://images.unsplash.com/photo-1484406566174-9da000fda645?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 151,
      timestamp: "1min",
    },
    {
      user: "JBH_",
      postImage: "https://images.unsplash.com/photo-1575282224056-2c2b3c839dcd?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 87,
      timestamp: "1d",
    },
  ]);

  return (
    <div className='timeline'>
        <div className="timeline__left">
          <div className="timeline__posts">
            {posts.map((post) => (
              <Post
                user={post.user}
                postImage={post.postImage}
                likes={post.likes}
                timestamp={post.timestamp}
              />
          ))}
          </div>
        </div>
        <div className="timeline__right">
            <Suggestion />
        </div>
    </div>
  )
}

export default Timeline