import { combineReducers } from 'redux'
import reducerUsers from './users/reducer'
import reducerAssets from './assets/reducer'
import reducerUnits from './units/reducer'
import reducerCompanies from './companies/reducer'
const createRootReducer = () => combineReducers({
    reducerUsers,
    reducerAssets,
    reducerUnits,
    reducerCompanies
})

export default createRootReducer