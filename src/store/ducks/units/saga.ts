import { put, call } from 'redux-saga/effects'
import {
  loadGetUnitsSuccess, loadGetUnitsFailure,
  loadDeleteUnitFailure
} from './actions'
import userService from '../../../services/units-service'
import  { UnitData } from './types'

// GET
export function* getUnits() {
  try {
    const response: UnitData = yield call(userService.getUnits)
    yield put(loadGetUnitsSuccess(response.data))
  } catch (error) {
    console.log(error)
    yield put(loadGetUnitsFailure())
  }
}

// DELETE
export function* deleteUnit(id: number) {
  try {
    yield call(userService.deleteUnit, id)
    console.log("try delete")
    // yield put(loadDeleteUserSuccess(id))
  } catch (error) {
    console.log(error)
    yield put(loadDeleteUnitFailure())
  }
}