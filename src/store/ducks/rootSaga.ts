import { all, takeLatest } from "redux-saga/effects";
import { UsersEnumType } from './users/types'
import { AssetsEnumType } from './assets/types'
import { getUsers } from './users/saga'
import { getAssets } from "./assets/saga";
import { UnitsEnumType } from "./units/types";
import { getUnits } from './units/saga'
import { CompaniesEnumType } from './companies/types'
import { getCompanies } from './companies/saga'

export default function* rootSaga(): any {
    return yield all([
      takeLatest(UsersEnumType.GET_USERS_REQUEST, getUsers),
      // takeLatest(UsersEnumType.DELETE_USERES_REQUEST, deleteUsers)

      takeLatest(AssetsEnumType.GET_ASSETS_REQUEST, getAssets),

      takeLatest(UnitsEnumType.GET_UNITS_REQUEST, getUnits),

      takeLatest(CompaniesEnumType.GET_COMPANIES_REQUEST, getCompanies)
    ])
}