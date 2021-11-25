import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageVariants, pageTransition } from '../../assets/framerMotionAnimation';
import UnitCard from '../../components/Cards/UnitCard';
import Title from '../../components/headings/Title';
import reducerTypes from '../../store/ducks/reducerTypes';
import { loadGetUnitsRequest } from '../../store/ducks/units/actions';
import { UnitType } from '../../store/ducks/units/types';

import { Container } from './styles';

const Units: React.FC = () => {
  const dispatch = useDispatch()
  const unitsGlobalState = useSelector((state: reducerTypes) => state.reducerUnits.units)
  const [units, setUnits] = useState<UnitType[]>()

  useEffect(() => {
    if (unitsGlobalState.length === 0) {
      dispatch(loadGetUnitsRequest())
    } else {
      setUnits(unitsGlobalState)
    }
  }, [unitsGlobalState, dispatch])

  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Title>Units</Title>
      {
        units?.map((unit: UnitType) => (
          <UnitCard key={unit.id} {...unit}/>
        ))
      }
    </Container>
  )
}

export default Units;