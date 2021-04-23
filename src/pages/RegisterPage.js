import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerAction } from '../actions';

function RegisterPage() {
  const [clientInformation, setClientInformation] = useState({ name: '', age: '', email: '' });
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setClientInformation({
      ...clientInformation,
      [name]: value,
    })
  }

  const { name, age, email } = clientInformation;
  return (
    <div>
      <input type="text" name="name" value={ name } onChange={ handleChange } placeholder="Informe seu nome" autoComplete="off" />
      <input type="text" name="age" value={ age } onChange={ handleChange } placeholder="Informe sua idade" autoComplete="off" />
      <input type="text" name="email" value={ email } onChange={ handleChange } placeholder="Informe seu email" autoComplete="off" />
      <button type="button" onClick={ () => {dispatch(registerAction(clientInformation)); alert('Registro feito com sucesso')} }>Cadastrar</button>
      <Link to='/registeredclients'><button type="button">Ver clientes cadastrados</button></Link>
    </div>
  )
}

export default RegisterPage;
