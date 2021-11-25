import api from './api'

const companiesService = {
  getCompanies: () => api.get('/companies'),
  getOneCompanie: (id: number) => api.get(`/companies/${id}`),
  deleteCompanie: (id: number) => api.get(`/companies/${id}`),
}

export default companiesService