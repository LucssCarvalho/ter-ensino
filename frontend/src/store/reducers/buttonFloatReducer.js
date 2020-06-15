import { SHOW_EDIT_AND_SHARE } from '../actions/actionsType'

const INITIAL_STATE = {
  showEditEndShare: false,
}

export const buttonFloatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_EDIT_AND_SHARE:
      return { ...state, showEditEndShare: action.payload }
    default:
      return state
  }
}
