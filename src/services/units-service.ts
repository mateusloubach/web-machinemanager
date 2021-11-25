import api from './api'

const unitsService = {
  getUnits: () => api.get('/units'),
  getOneUnit: (id: number) => api.get(`/units/${id}`),
  deleteUnit: (id: number) => api.get(`/units/${id}`),
}

export default unitsService