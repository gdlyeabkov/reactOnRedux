import PostForm from './components/PostForm'
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
      <div className="col">
        <PostForm/>
      </div>  
      </div>
      <div className="row">
      <div className="col">
        <h2>синхронные посты</h2>
        <Posts/>
      </div>
      <div className="col">
      <h2>асинхронные посты</h2>
        <FetchedPosts/>
      </div>
      </div>
      <h1>React</h1>
    </div>
  );
}

export default App;
