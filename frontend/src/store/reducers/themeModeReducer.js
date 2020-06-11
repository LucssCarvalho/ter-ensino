import { DARK_MODE } from '../actions/actionsType'

const INITIAL_STATE = {
  darkMode: false,
}

export const themeModeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DARK_MODE:
      return { ...state, darkMode: action.payload }
    default:
      return state
  }
}
