import React, { useEffect, useState } from 'react';
import { pageVariants, pageTransition } from '../../assets/framerMotionAnimation';
import LittleInfoCard from '../../components/Cards/LittleInfoCard';
import SemiCircleChart from '../../components/Charts/SemiCircleChart';
import ProgressBar from '../../components/dashboardComponents/ProgressBar';
import {GrTechnology} from 'react-icons/gr'
import { FaUserAstronaut } from 'react-icons/fa'
import { Container, Content } from './styles';
import Title from '../../components/headings/Title';
import LatestUpdates from '../../components/dashboardComponents/LatestUpdates';
import TheCrew from '../../components/dashboardComponents/TheCrew';
import Disclosure from '../../components/dashboardComponents/Disclosure';
import DashBoardCard from '../../components/Cards/DashBoardCard';
import { useDispatch, useSelector } from 'react-redux';
import reducerTypes from '../../store/ducks/reducerTypes';
import statusCnt, { StatusCnt } from '../../hooks/assetStatusCounter';
import { loadGetAssetsRequest } from '../../store/ducks/assets/actions';

const Dashboard: React.FC = () => {
  const assetsGlobalState = useSelector((state: reducerTypes) => state.reducerAssets.assets)
  const [status, setStatus] = useState<StatusCnt>()
  const dispatch = useDispatch()

  useEffect(() => {
    if (assetsGlobalState.length === 0) {
     dispatch(loadGetAssetsRequest()) 
    }
    setStatus(statusCnt(assetsGlobalState))
  }, [assetsGlobalState, dispatch])

  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Title>Dashboard</Title>

      <Content>
        <DashBoardCard />
        <SemiCircleChart {...status}/>
        <div>
          <ProgressBar title="Reduced maintenance costs" goal={24000.00} current={13500.00} unit="R$"/>
          <div className="little-cards">
            <LittleInfoCard icon={<FaUserAstronaut/>} title="Contributors" value="+ 3"/>
            <LittleInfoCard icon={<GrTechnology/>} title="New assets" value="+ 2"/>
          </div>
        </div>
        <TheCrew />
        <LatestUpdates />
        <Disclosure />
      </Content>
      
    </Container>
  )
}

export default Dashboard;