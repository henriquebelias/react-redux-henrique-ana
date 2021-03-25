import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class RegisteredClients extends Component {
  renderClientsList() {
    const { clients } = this.props;
    return clients.map(cliente => (
      <div key={cliente.name}>
        <p>{cliente.name}</p>
        <p>{cliente.age}</p>
        <p>{cliente.email}</p>
      </div>
    ))
  }
  render() {
    const { login, clients } = this.props;
    if (login) {
      return (
        <div>
          <h1>Lista de clientes</h1>
          {clients.length > 0 ? this.renderClientsList() : <p>Nenhum cliente cadastrado</p>}
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
}

const mapStateToProps = (state) => ({
  login: state.loginReducer.login,
  clients: state.registerReducer.clients,
})

export default connect(mapStateToProps)(RegisteredClients);