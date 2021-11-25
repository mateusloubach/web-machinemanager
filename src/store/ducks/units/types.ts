export enum UnitsEnumType {
  GET_UNITS_REQUEST = '@GET_UNITS_REQUEST',
  GET_UNITS_SUCCESS = '@GET_UNITS_SUCCESS',
  GET_UNITS_FAILURE = '@GET_UNITS_FAILURE',

  DELETE_UNITS_REQUEST = '@DELETE_UNITS_REQUEST',
  DELETE_UNITS_SUCCESS = '@DELETE_UNITS_SUCCESS',
  DELETE_UNITS_FAILURE = '@DELETE_UNITS_FAILURE'
}

export interface UnitsInitialState {
  errorMessage: string
  loading: boolean
  units: UnitType[]
}

export interface UnitType {
  id?: number
  name: string
  companyId: number
}

export interface UnitData {
  data: UnitType[]
}
