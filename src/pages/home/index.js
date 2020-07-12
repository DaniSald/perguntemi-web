/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const logo = require('../../assets/logo.png');

const Home = () => (
  <div>
    <div className="header">
      <div className="tab">
        <button type="button" className="tab_content" onClick={() => { window.alert('Faça uma pergunta e receba uma resposta feita por outro usuário'); }}>sobre</button>
      </div>

      <div className="tab">
        <Link to="/create/answer" className="tab_content">Deixe sua Resposta!</Link>
      </div>
    </div>
    <div className="home">
      <img src={logo} alt="logo" height="100" />
      <p id="desc">Faça uma pergunta e receba uma resposta</p>
      <form method="get" action="/answer" className="form">
        <input className="text_input" name="question" minLength="10" maxLength="60" title="pergunte o que quiser" autoComplete="off" required />
        <input className="submit_input" type="submit" value="resposta" title="" />
      </form>
    </div>
  </div>
);

export default Home;
