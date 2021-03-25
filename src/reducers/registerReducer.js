import { REGISTER } from '../actions/actionsTypes';

const INITIAL_STATE = {
  clients: [],
}

const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER:
      return ({
        clients: [...state.clients, action.data],
      });
    default:
      return state;
  }
}

export default registerReducer;
