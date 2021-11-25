import { CompanieType, CompaniesEnumType, CompaniesInitialState } from './types'

const INITIAL_COMPANIES_STATE: CompaniesInitialState = {
  errorMessage: "",
  loading: false,
  companies: []
}

const reducersCompanies = (state = INITIAL_COMPANIES_STATE, action: any) => {
  switch(action.type) {

    case CompaniesEnumType.GET_COMPANIES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case CompaniesEnumType.GET_COMPANIES_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: action.payload
      }
    case CompaniesEnumType.GET_COMPANIES_FAILURE:
      return {
        ...state,
        errorMessage: "Error on GET users, message from reducer",
        loading: false
      }

    case CompaniesEnumType.DELETE_COMPANIES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case CompaniesEnumType.DELETE_COMPANIES_SUCCESS:
      const indexOfUser = state.companies.findIndex((e: CompanieType) => e.id === action.payload)
      state.companies.splice(indexOfUser, 1)
      return {
        ...state,
        loading: false,
        companies: [...state.companies]
      }
    default:
      return state
  }
}

export default reducersCompanies
