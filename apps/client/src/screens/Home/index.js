import React from 'react';
import logo from '../../logo.svg';
import './index.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Home
        </p>
        <Link
          className="App-link"
          to="/about"
        >
          About
        </Link>
        <a
          className="App-link"
          href="/foo"
        >
          Foo
        </a>
        <a
          className="App-link"
          href="/api"
        >
          API
        </a>
      </header>
    </div>
  );
}

export default Home;
