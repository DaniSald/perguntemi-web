/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import randomId from 'rand-token';
import Api from '../../services/api';
import './styles.css';

const logo = require('../../assets/logo.png');

export default class createAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onWarnings: true,
      email: '',
      answer: '',
    };
  }

  onPress = () => {
    const { onWarnings } = this.state;
    this.setState({ onWarnings: !onWarnings });
  }

  getEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  getAnswer = (event) => {
    this.setState({ answer: event.target.value });
  }

  registerAnswer = async () => {
    const { email, answer } = this.state;

    try {
      await Api.post('/create/answer', { id: randomId.generate(20), email, answer });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { onWarnings } = this.state;

    return (
      <div className="wrap">
        <img src={logo} alt="logo" height="100" />
        {onWarnings ? (
          <div className="warnings_wrap">
            <div className="warning_area">
              <h1>Importante:</h1>
              <ul className="warnings_list">
                <li className="list_item">
                  - Evite respostas triviais como "porque sim" e "talvez", seja criativo
                </li>
                <li className="list_item">- Ainda não é possível um usuário excluir uma resposta</li>
                <li className="list_item">- Mantenha o respeito</li>
                <li className="list_item">- Divirtasi!</li>
              </ul>
            </div>
            <button className="button" type="button" onClick={this.onPress}>OK</button>

          </div>
        ) : (
          <form onSubmit={this.registerAnswer} className="submit_form">
            <div>
              <label htmlFor="email">E-mail:</label>
              <br />
              <input className="fields" type="email" id="email" maxLength="100" onChange={this.getEmail} required />
            </div>

            <div>
              <label htmlFor="answer">Resposta:</label>
              <br />
              <textarea className="fields" id="answer" rows="3" minLength="10" maxLength="100" onChange={this.getAnswer} required />
            </div>

            <input type="submit" value="enviar" className="button" />
          </form>
        )}
      </div>
    );
  }
}
