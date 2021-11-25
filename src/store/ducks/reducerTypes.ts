import { AssetsInitialState } from './assets/types'
import { UnitsInitialState } from './units/types'
import { UsersInitialState } from './users/types'
import { CompaniesInitialState } from './companies/types'

interface reducerTypes {
  reducerAssets: AssetsInitialState
  reducerUnits: UnitsInitialState
  reducerUsers: UsersInitialState
  reducerCompanies: CompaniesInitialState
}

export default reducerTypes