import React from 'react';
import InputSearch from '../Inputs/InputSearch';
import { AiOutlineMenu } from 'react-icons/ai'
import { Container } from './styles';
import MediaMatch from '../MediaMatch';
import { useMobileMenu } from '../../hooks/mobileMenuToggle';

const MainHeader: React.FC = () => {
  const { openMenu } = useMobileMenu()
  return (
    <Container>
      <InputSearch/>
      <MediaMatch hideOnDesktop>
        <div className="menu-icon">
          <AiOutlineMenu onClick={openMenu}/>
        </div>
      </MediaMatch>
    </Container>
  )
}

export default MainHeader;