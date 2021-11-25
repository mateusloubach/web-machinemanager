import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CompanieType } from '../../store/ducks/companies/types';
import reducerTypes from '../../store/ducks/reducerTypes';
import { loadGetUnitsRequest } from '../../store/ducks/units/actions';

const useNameUnit = (id: number) => {

  const dispatch = useDispatch()
  const unitsGlobalState = useSelector((state: reducerTypes) => state.reducerUnits.units)
  const [units, setUnits] = useState<CompanieType[]>()

  useEffect(() => {
    if (unitsGlobalState.length === 0) {
      dispatch(loadGetUnitsRequest())
    } else {
      setUnits(unitsGlobalState)
    }
  }, [unitsGlobalState, dispatch])

  const unitFind = units?.find((unit) => unit.id === id)
  
  return unitFind?.name
}

export default useNameUnit;