import { put, call } from 'redux-saga/effects'
import {
  loadGetAssetsSuccess, loadGetAssetsFailure,
  loadDeleteAssetsFailure
} from './actions'
import assetsService from '../../../services/assets-service'
import  { UserData } from './types'

// GET
export function* getAssets() {
  try {
    const response: UserData = yield call(assetsService.getAssets)
    yield put(loadGetAssetsSuccess(response.data))
  } catch (error) {
    console.log(error)
    yield put(loadGetAssetsFailure())
  }
}

// DELETE
export function* deleteUsers(id: number) {
  try {
    yield call(assetsService.deleteAsset, id)
    console.log("try delete")
    // yield put(loadDeleteUserSuccess(id))
  } catch (error) {
    console.log(error)
    yield put(loadDeleteAssetsFailure())
  }
}