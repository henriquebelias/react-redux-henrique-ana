import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction } from '../actions/';

function Login() {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [isLoged, setIsLoged] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = () => {
    const { email, password } = login;
    if (email.length > 0 && password.length > 0) {
      setIsLoged(true)
    } else if (email === '' || password === '') {
      setIsLoged(false)
    }
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLogin({
      ...login,
      [name]: value,
    })
    handleLogin();
  }

  return (
    <div>
      <input type="text" name="email" value={ login.email } onChange={ handleChange } placeholder="Informe seu email" autoComplete="off" />
      <input type="text" name="password" value={ login.password } onChange={ handleChange } placeholder="Informe sua senha" autoComplete="off" />
      <Link to='/registeredclients'><button type="button" onClick={ () => dispatch(loginAction(login.email, login.password, isLoged)) }>Faça o login</button></Link>
    </div>
  )
}

export default Login;
