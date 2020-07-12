/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QueryString from 'query-string';
import { Link } from 'react-router-dom';
import Api from '../../services/api';

import './styles.css';

const logo = require('../../assets/logo.png');

export default class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
    };
  }

  componentDidMount() {
    this.getAnswer();
  }

  getQuestion = () => {
    const { location } = this.props;

    let { question } = QueryString.parse(location.search);

    const len = question.length - 1;

    if (question.charAt(len) !== '?') {
      question = `${question}?`;
    }

    return question;
  }

  getAnswer = async () => {
    const result = await Api.getAnswer();

    this.setState({ answer: result.answer });
  }

  render() {
    const { answer } = this.state;

    const question = this.getQuestion();

    return (
      <div className="answer_wrap">
        <img src={logo} alt="logo" height="100" />
        <p id="question">{`${question}`}</p>
        <div>
          <p id="answer">{`${answer}`}</p>
        </div>
        <div style={{ margin: 40, flexDirection: 'row' }}>
          <Link to="/" className="button">Voltar</Link>
          <button type="button" className="button" onClick={this.getAnswer}>Outra resposta</button>
        </div>
      </div>
    );
  }
}

Answer.propTypes = {
  location: PropTypes.object.isRequired,
};
