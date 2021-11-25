import { action } from 'typesafe-actions'
import { UsersEnumType, UserType } from './types'

// GETS
export const loadGetUsersRequest = () => action(UsersEnumType.GET_USERS_REQUEST)

export const loadGetUsersSuccess = (payload: UserType[]) => action(UsersEnumType.GET_USERS_SUCCESS, payload)

export const loadGetUsersFailure = () => action(UsersEnumType.GET_USERS_FAILURE)


//DELETES
export const loadDeleteUserRequest = () => action(UsersEnumType.DELETE_USERES_REQUEST)

export const loadDeleteUserSuccess = (id: number) => action(UsersEnumType.DELETE_USERES_SUCCESS, id)

export const loadDeleteUserFailure = () => action(UsersEnumType.DELETE_USERES_FAILURE)