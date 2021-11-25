export enum CompaniesEnumType {
  GET_COMPANIES_REQUEST = '@GET_COMPANIES_REQUEST',
  GET_COMPANIES_SUCCESS = '@GET_COMPANIES_SUCCESS',
  GET_COMPANIES_FAILURE = '@GET_COMPANIES_FAILURE',

  DELETE_COMPANIES_REQUEST = '@DELETE_COMPANIES_REQUEST',
  DELETE_COMPANIES_SUCCESS = '@DELETE_COMPANIES_SUCCESS',
  DELETE_COMPANIES_FAILURE = '@DELETE_COMPANIES_FAILURE'
}

export interface CompaniesInitialState {
  errorMessage: string
  loading: boolean
  companies: CompanieType[]
}

export interface CompanieType {
  id?: number
  name: string
}

export interface CompanieData {
  data: CompanieType[]
}
