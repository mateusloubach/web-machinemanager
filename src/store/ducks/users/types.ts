export enum UsersEnumType {
  GET_USERS_REQUEST = '@GET_USERS_REQUEST',
  GET_USERS_SUCCESS = '@GET_USERS_SUCCESS',
  GET_USERS_FAILURE = '@GET_USERS_FAILURE',

  DELETE_USERES_REQUEST = '@DELETE_USERS_REQUEST',
  DELETE_USERES_SUCCESS = '@DELETE_USERS_SUCCESS',
  DELETE_USERES_FAILURE = '@DELETE_USERS_FAILURE'
}

export interface UsersInitialState {
  errorMessage: string
  loading: boolean
  users: UserType[]
}

export interface UserType {
  id?: number
  name: string
  email: string
  unitId: number
  companyId: number
}

export interface UserData {
  data: UserType[]
}
