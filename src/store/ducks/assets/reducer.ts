import { AssetType, AssetsEnumType, AssetsInitialState } from './types'

const INITIAL_USERS_STATE: AssetsInitialState = {
  errorMessage: "",
  loading: false,
  assets: []
}

const reducersAssets = (state = INITIAL_USERS_STATE, action: any) => {
  switch(action.type) {

    case AssetsEnumType.GET_ASSETS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case AssetsEnumType.GET_ASSETS_SUCCESS:
      return {
        ...state,
        loading: false,
        assets: action.payload
      }
    case AssetsEnumType.GET_ASSETS_FAILURE:
      return {
        ...state,
        errorMessage: "Error on GET users, message from reducer",
        loading: false
      }

    case AssetsEnumType.DELETE_ASSETS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case AssetsEnumType.DELETE_ASSETS_SUCCESS:
      const indexOfUser = state.assets.findIndex((e: AssetType) => e.id === action.payload)
      state.assets.splice(indexOfUser, 1)
      return {
        ...state,
        loading: false,
        assets: [...state.assets]
      }
    default:
      return state
  }
}

export default reducersAssets
