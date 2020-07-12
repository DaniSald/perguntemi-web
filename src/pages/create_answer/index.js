/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import randomId from 'rand-token';
import { withRouter } from 'react-router-dom';
import ProTypes from 'prop-types';
import Api from '../../services/api';
import './styles.css';

const logo = require('../../assets/logo.png');

class createAnswer extends Component {
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

  registerAnswer = async (event) => {
    try {
      event.preventDefault();
      const { history } = this.props;

      const { email, answer } = this.state;

      const id = randomId.generate(20);
      const emailToSend = email.toLowerCase().trim();
      const answerToSend = answer.toLowerCase().trim();

      const object = { id, email: emailToSend, answer: answerToSend };

      await Api.createAnswer(object);

      window.alert('Resposta Criada!');
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { onWarnings, answer } = this.state;

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
                <li className="list_item">- Ainda não é possível editar ou excluir uma resposta</li>
                <li className="list_item">- Mantenha o respeito</li>
                <li className="list_item">- Divirtasi!</li>
              </ul>
            </div>
            <button className="button" type="button" onClick={this.onPress}>OK</button>

          </div>
        ) : (
          <form onSubmit={this.registerAnswer} className="submit_form">
            <div style={{ marginTop: 30, marginBottom: 30 }}>
              <div>
                <label htmlFor="email">E-mail:</label>
                <br />
                <input className="fields email" type="email" maxLength="100" onChange={this.getEmail} autoComplete="off" required />
              </div>

              <div>
                <label htmlFor="answer">Resposta:</label>
                <br />
                <textarea className="fields answer" rows="3" minLength="10" maxLength="100" onChange={this.getAnswer} required />
                <p style={100 - answer.length < 20 ? { color: 'red', fontWeight: 'bold' } : null}>{`Caracteres: ${100 - answer.length}`}</p>

              </div>
            </div>

            <input type="submit" value="enviar" className="button" />
          </form>
        )}
      </div>
    );
  }
}

createAnswer.propTypes = {
  history: ProTypes.object.isRequired,
};

export default withRouter(createAnswer);
