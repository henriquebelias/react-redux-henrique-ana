import { LOGIN } from '../actions/actionsTypes';

const INITIAL_STATE = {
  email: '',
  password: '',
  login: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN:
      return ({
        email: action.email,
        password: action.password,
        login: action.login,
      });
    default:
      return state;
  }
}

export default loginReducer;
