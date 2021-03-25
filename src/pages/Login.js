import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction } from '../actions/';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      login: false,
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.handleLogin();
    });
  }

  handleLogin = () => {
    const { email, password } = this.state;
    if (email.length > 0 && password.length > 0) {
      this.setState({
        login: true,
      })
    } else if (email === '' || password === '') {
      this.setState({
        login: false,
      })
    }
  }

  render() {
    const { email, password, login } = this.state;
    const { loginAction } = this.props;
    return (
      <div>
        <input type="text" name="email" value={ email } onChange={ this.handleChange } placeholder="Informe seu email" autoComplete="off" />
        <input type="text" name="password" value={ password } onChange={ this.handleChange } placeholder="Informe sua senha" autoComplete="off" />
        <Link to='/registeredclients'><button type="button" onClick={ () => loginAction(email, password, login) }>Faça o login</button></Link>
      </div>
    )
  }
}

const mapDispatchToProps = {
  loginAction,
}

export default connect(null, mapDispatchToProps)(Login);