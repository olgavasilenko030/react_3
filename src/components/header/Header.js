
import logo from'../../logo.svg';
import React from 'react';
import  './Header.css';
class Header extends React.Component
{
    render()
    {
        return(
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>STATE</h1>
        <a
          className="App-link"
          href="https://git-scm.com/book/ru/v2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Git
        </a>
      </header>
        )
    }
}
export default Header;