import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from './header/Header.js';
import Hello from './hello/Hello.js';
import Length from './length/Length.js';
import Form from './form/Form.js';
import Range from './range/Range.js';
import Post from './posts/Posts.js';
import Posts from'./posts/Posts.js';

class App extends React.Component
{
  state =
  {
    posts:
    [
      {id:"1",title:"Процедурное програмирование на языке С++",content:"Изучаются базовые конструкции языка С++"},
      {id:"2",title:"Объектно-ориентированное програмирование на языке С++",content:"Изучаются базовые базовые концепции ООП"},
      {id:"3",title:"DataContainers",content:"Изучаются основные структуры данных и контейнеры, основанные на них"}
    ]
  }
render() {
  return (
    <div className="App">
      <Header/>
      {/* <Hello/>
      <Length/>
      <Form/>
      <Range/> */}
      {typeof(this.state.posts)}
      <Posts posts={this.state.posts} />
      {/* <Post title="Title" content="Content"/> */}
    </div>
  );
}
}
 

export default App;
