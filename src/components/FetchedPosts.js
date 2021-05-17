import React from 'react'
export default ()=>{
    const dispatch=useDispatch()
    const posts=useSelector((state)=>{
        return state.posts.fetchedPosts
    })
    const loading=useSelector(state=>state.app.loading)
    if(loading){
        return <Loader/>

    }
    if(!posts.length){
        return (
            <button className="btn btn-primary" onClick={()=>dispatch(fetchPosts())}>загрузить</button>
        )
        return posts.map(post=> <Post post={post} key={post.id}/>)
    
    }
}