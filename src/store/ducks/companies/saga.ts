import { put, call } from 'redux-saga/effects'
import {
  loadGetCompaniesSuccess, loadGetCompaniesFailure,
  loadDeleteCompanieFailure
} from './actions'
import companiesService from '../../../services/companies-service'
import  { CompanieData } from './types'

// GET
export function* getCompanies() {
  try {
    const response: CompanieData = yield call(companiesService.getCompanies)
    yield put(loadGetCompaniesSuccess(response.data))
  } catch (error) {
    console.log(error)
    yield put(loadGetCompaniesFailure())
  }
}

// DELETE
export function* deleteCompanie(id: number) {
  try {
    yield call(companiesService.deleteCompanie, id)
    console.log("try delete")
    // yield put(loadDeleteUserSuccess(id))
  } catch (error) {
    console.log(error)
    yield put(loadDeleteCompanieFailure())
  }
}