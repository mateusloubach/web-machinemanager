import { UnitType, UnitsEnumType, UnitsInitialState } from './types'

const INITIAL_UNITS_STATE: UnitsInitialState = {
  errorMessage: "",
  loading: false,
  units: []
}

const reducersUnits = (state = INITIAL_UNITS_STATE, action: any) => {
  switch(action.type) {

    case UnitsEnumType.GET_UNITS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case UnitsEnumType.GET_UNITS_SUCCESS:
      return {
        ...state,
        loading: false,
        units: action.payload
      }
    case UnitsEnumType.GET_UNITS_FAILURE:
      return {
        ...state,
        errorMessage: "Error on GET users, message from reducer",
        loading: false
      }

    case UnitsEnumType.DELETE_UNITS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case UnitsEnumType.DELETE_UNITS_SUCCESS:
      const indexOfUser = state.units.findIndex((e: UnitType) => e.id === action.payload)
      state.units.splice(indexOfUser, 1)
      return {
        ...state,
        loading: false,
        units: [...state.units]
      }
    default:
      return state
  }
}

export default reducersUnits
