export enum AssetsEnumType {
  GET_ASSETS_REQUEST = '@GET_ASSETS_REQUEST',
  GET_ASSETS_SUCCESS = '@GET_ASSETS_SUCCESS',
  GET_ASSETS_FAILURE = '@GET_ASSETS_FAILURE',

  DELETE_ASSETS_REQUEST = '@DELETE_ASSETS_REQUEST',
  DELETE_ASSETS_SUCCESS = '@DELETE_ASSETS_SUCCESS',
  DELETE_ASSETS_FAILURE = '@DELETE_ASSETS_FAILURE'
}

export interface AssetsInitialState {
  errorMessage: string
  loading: boolean
  assets: AssetType[]
}

export interface AssetType {
  id?: number
  sensors: string[]
  model: string
  status: string
  healthscore: number
  name: string
  image: string
  specifications: {
    maxTemp?: number
    power?: number
    rpm?: number
  }
  metrics: {
    totalCollectsUptime: number
    totalUptime: number
    lastUptimeAt: string
  }
  unitId: number
  companyId: number
  responsible?: string
}

export interface UserData {
  data: AssetType[]
}
