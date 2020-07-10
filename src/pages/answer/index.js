/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QueryString from 'query-string';
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

  getAnswer = async () => {
    const result = await Api.getAnswer();

    this.setState({ answer: result.answer });
  }

  render() {
    const { answer } = this.state;
    const { location } = this.props;

    const question = QueryString.parse(location.search);

    return (
      <div className="answer">
        <img src={logo} alt="logo" height="100" />
        <p className="paragraph">{`${question.question}`}</p>
        <p className="paragraph">{`${answer}`}</p>
      </div>
    );
  }
}

Answer.propTypes = {
  location: PropTypes.object.isRequired,
};
