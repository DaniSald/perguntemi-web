import React from 'react';
import './styles.css';

const logo = require('../../assets/logo.png');

const Home = () => (
  <div className="home">
    <img src={logo} alt="logo" height="100" />
    <form method="get" action="/answer" className="form">
      <input className="text_input" name="question" minLength="10" maxLength="60" title="pergunte o que quiser" autoComplete="off" required />
      <input className="submit_input" type="submit" value="resposta" title="" />
    </form>
  </div>
);

export default Home;
