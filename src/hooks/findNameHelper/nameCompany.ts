import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGetCompaniesRequest } from '../../store/ducks/companies/actions';
import { CompanieType } from '../../store/ducks/companies/types';
import reducerTypes from '../../store/ducks/reducerTypes';

const useNameCompany = (id: number) => {

  const dispatch = useDispatch()
  const companiesGlobalState = useSelector((state: reducerTypes) => state.reducerCompanies.companies)
  const [companies, setCompanies] = useState<CompanieType[]>()

  useEffect(() => {
    if (companiesGlobalState.length === 0) {
      dispatch(loadGetCompaniesRequest())
    } else {
      setCompanies(companiesGlobalState)
    }
  }, [companiesGlobalState, dispatch])

  const companyFind = companies?.find((company) => company.id === id)
  
  return companyFind?.name
}

export default useNameCompany;