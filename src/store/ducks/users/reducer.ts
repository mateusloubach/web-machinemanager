import { UserType, UsersEnumType, UsersInitialState } from './types'

const INITIAL_USERS_STATE: UsersInitialState = {
  errorMessage: "",
  loading: false,
  users: []
}

const reducersUsers = (state = INITIAL_USERS_STATE, action: any) => {
  switch(action.type) {

    case UsersEnumType.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case UsersEnumType.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      }
    case UsersEnumType.GET_USERS_FAILURE:
      return {
        ...state,
        errorMessage: "Error on GET users, message from reducer",
        loading: false
      }

    case UsersEnumType.DELETE_USERES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case UsersEnumType.DELETE_USERES_SUCCESS:
      const indexOfUser = state.users.findIndex((e: UserType) => e.id === action.payload)
      state.users.splice(indexOfUser, 1)
      return {
        ...state,
        loading: false,
        users: [...state.users]
      }
    default:
      return state
  }
}

export default reducersUsers
