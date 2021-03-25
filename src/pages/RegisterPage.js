import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerAction } from '../actions';

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { name, age, email } = this.state;
    const { registerAction } = this.props;
    return (
      <div>
        <input type="text" name="name" value={ name } onChange={ this.handleChange } placeholder="Informe seu nome" autoComplete="off" />
        <input type="text" name="age" value={ age } onChange={ this.handleChange } placeholder="Informe sua idade" autoComplete="off" />
        <input type="text" name="email" value={ email } onChange={ this.handleChange } placeholder="Informe seu email" autoComplete="off" />
        <button type="button" onClick={ () => {registerAction(this.state); alert('Registro feito com sucesso')} }>Cadastrar</button>
        <Link to='/registeredclients'><button type="button">Ver clientes cadastrados</button></Link>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   register: (data) => dispatch(registerAction(data))
// })

const mapDispatchToProps = {
  registerAction,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
