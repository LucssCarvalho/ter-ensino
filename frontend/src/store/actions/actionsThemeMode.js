import { DARK_MODE } from './actionsType'

export const alterModeDark = value => {
  return { type: DARK_MODE, payload: value }
}
