import {connect} from 'react-redux'
import React from 'react'
class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:''
        }
    }
    submitHandler=()=>{
        event.preventDefault()
        const {title}=this.state
        if(!title.trim()){
            return this.props.showAlert('название поста не может юыть пустым')
        }
        const newPost={
            title,id:Date.now().toString()
        }
        this.props.createPost(newPost)
        this.setState({title:''})
    }
    changeInputHandler=()=>{
        event.persists()
        this.setState(prev=>({...prev,...{
            [event.target.name]:event.target.value
        }}))
    }
    render(){
        return (
        <form onSubmit={this.submitHandler}>
            {this.props.alert && <Alert text={this.props.alert}/> }
            <div className="form-group">
                <label htmlFor="title">заголовок поста</label>
                <input onChange={this.changeInputHandler} name="title" value={this.state.title} type="text" className="form-control" id="title"/>
            </div>
            <button className="btn btn-success" type="submit">создать</button>

        </form>
        )
    }
}
const mapDispatchToProps(){
    createPost,
    showAlert
}
const mapStateToProps=(state)=>({
    alert:state.app.alert
})
export default connect(mapStateToProps,mapDispatchToProps)(PostForm)