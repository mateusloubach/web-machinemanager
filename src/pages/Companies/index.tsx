import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageVariants, pageTransition } from '../../assets/framerMotionAnimation';
import CompanieCard from '../../components/Cards/CompanieCard';
import Title from '../../components/headings/Title';
import { loadGetCompaniesRequest } from '../../store/ducks/companies/actions';
import { CompanieType } from '../../store/ducks/companies/types';
import reducerTypes from '../../store/ducks/reducerTypes';
import { Container } from './styles';

const Companies: React.FC = () => {
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
  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Title>Companies</Title>
      {
        companies?.map((companie: CompanieType) => (
          <CompanieCard key={companie.id} {...companie}/>
        ))
      }
    </Container>
  )
}

export default Companies;