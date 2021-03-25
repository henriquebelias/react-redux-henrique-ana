import { LOGIN } from './actionsTypes';

const loginAction = (email, password, login) => ({
  type: LOGIN,
  email,
  password,
  login,
})

export default loginAction;
