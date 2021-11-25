import { action } from 'typesafe-actions'
import { AssetsEnumType, AssetType } from './types'

// GETS
export const loadGetAssetsRequest = () => action(AssetsEnumType.GET_ASSETS_REQUEST)

export const loadGetAssetsSuccess = (payload: AssetType[]) => action(AssetsEnumType.GET_ASSETS_SUCCESS, payload)

export const loadGetAssetsFailure = () => action(AssetsEnumType.GET_ASSETS_FAILURE)


//DELETES
export const loadDeleteAssetsRequest = () => action(AssetsEnumType.DELETE_ASSETS_REQUEST)

export const loadDeleteAssetsSuccess = (id: number) => action(AssetsEnumType.DELETE_ASSETS_SUCCESS, id)

export const loadDeleteAssetsFailure = () => action(AssetsEnumType.DELETE_ASSETS_FAILURE)