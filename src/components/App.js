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
import Binary from './cal_binary/Binary.js';
import Decimal from './cal_decimal/Decimal.js';
import Hexa_decimal from './cal_hexa_decimal/Hexa_decimal.js';
import Hexadecimal from './cal_hexadecimal/Hexadecimal.js';

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
      <Binary/>
      <Decimal/>
      <Hexa_decimal/>
      <Hexadecimal/>
      {/* <Hello/>
      <Length/>  */}
      {/* <Form/> */}
      {/* <Range/>
      {typeof(this.state.posts)} */}
      {/* <Posts posts={this.state.posts} /> */}
      {/* <Post title="Title" content="Content"/> */}
    </div>
  );
}
}
 

export default App;
