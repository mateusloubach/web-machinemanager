import { AssetType } from "../store/ducks/assets/types"

export interface StatusCnt {
  inAlert: number
  inOperation: number
  inDowntime: number
}

const statusCnt = (assets: AssetType[]): StatusCnt => {
  let inAlert = 0, inOperation = 0, inDowntime = 0

  assets?.forEach((asset: AssetType) => {
    if (asset.status === 'inAlert') {
      return inAlert++
    } else if (asset.status === 'inOperation') {
      return inOperation++
    } else if (asset.status === 'inDowntime') {
      return inDowntime++
    }
  })

  return {
    inAlert,
    inOperation,
    inDowntime
  }
}

export default statusCnt