import React from 'react';
import logo from '../../logo.svg';
import './index.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          About
        </p>
        <Link
          className="App-link"
          to="/"
        >
          Home
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

export default About;
