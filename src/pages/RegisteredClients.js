import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function RegisteredClients() {
  const login = useSelector(state => state.loginReducer.login);
  const clients = useSelector(state => state.registerReducer.clients);
  function renderClientsList() {
    return clients.map(cliente => (
      <div key={cliente.name}>
        <p>{cliente.name}</p>
        <p>{cliente.age}</p>
        <p>{cliente.email}</p>
      </div>
    ))
  }
  if (login) {
    return (
      <div>
        <h1>Lista de clientes</h1>
        {clients.length > 0 ? renderClientsList() : <p>Nenhum cliente cadastrado</p>}
        <Link to='/register'><button>Cadastre-se</button></Link>
      </div>
    )
  }
  return (
    <div>
      <h1>Login não efetuado</h1>
    </div>
  )
}

export default RegisteredClients;