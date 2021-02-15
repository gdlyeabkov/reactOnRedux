import {connect} from 'react-redux'
import React from 'react'
// export default ({posts})=>{
const Posts=  ({syncPosts})=>{
    // return (
    //     <div>
    //         <h1>Posts</h1>
    //     </div>
    // )
    if(!syncPosts.length){
        return (
            <p className="text-center">Постов пока нет</p>
        )
    }
    return syncPosts.map(post=> <Post post={post} key={post.id}/>)
    
}
const mapStateToProps=(state)=>{
    return {
        syncPosts:state.posts.posts
    }
}
export default connect(mapStateToProps,null)(Posts)