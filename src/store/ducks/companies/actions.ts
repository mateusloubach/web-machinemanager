import { action } from 'typesafe-actions'
import { CompaniesEnumType, CompanieType } from './types'

// GETS
export const loadGetCompaniesRequest = () => action(CompaniesEnumType.GET_COMPANIES_REQUEST)

export const loadGetCompaniesSuccess = (payload: CompanieType[]) => action(CompaniesEnumType.GET_COMPANIES_SUCCESS, payload)

export const loadGetCompaniesFailure = () => action(CompaniesEnumType.GET_COMPANIES_FAILURE)


//DELETES
export const loadDeleteCompanieRequest = () => action(CompaniesEnumType.DELETE_COMPANIES_REQUEST)

export const loadDeleteCompanieSuccess = (id: number) => action(CompaniesEnumType.DELETE_COMPANIES_SUCCESS, id)

export const loadDeleteCompanieFailure = () => action(CompaniesEnumType.DELETE_COMPANIES_FAILURE)