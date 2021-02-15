import React from 'react'
export default ({post})=>{
    return (
        <div className="card">
            {/* <h1>Post</h1> */}
            <div className="card-body">
                <div className="card-title">
                    {post.title}
                </div>
            </div>
            
        </div>
    )
}