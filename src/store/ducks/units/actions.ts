import { action } from 'typesafe-actions'
import { UnitsEnumType, UnitType } from './types'

// GETS
export const loadGetUnitsRequest = () => action(UnitsEnumType.GET_UNITS_REQUEST)

export const loadGetUnitsSuccess = (payload: UnitType[]) => action(UnitsEnumType.GET_UNITS_SUCCESS, payload)

export const loadGetUnitsFailure = () => action(UnitsEnumType.GET_UNITS_FAILURE)


//DELETES
export const loadDeleteUnitRequest = () => action(UnitsEnumType.DELETE_UNITS_REQUEST)

export const loadDeleteUnitSuccess = (id: number) => action(UnitsEnumType.DELETE_UNITS_SUCCESS, id)

export const loadDeleteUnitFailure = () => action(UnitsEnumType.DELETE_UNITS_FAILURE)