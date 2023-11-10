import React from 'react';
import * as S from './styles';
import MediaMatch from '../../MediaMatch';
import MenuNav from '../MenuNav';
import { useMobileMenu } from '../../../hooks/mobileMenuToggle';
import { AiOutlineClose } from 'react-icons/ai'

const Menu: React.FC = () => {
  const { isOpen, closeMenu } = useMobileMenu()

  return (
    <>
      <MediaMatch hideOnMobile>
        <S.ColumnMenu className="main-menu">
          <h3> Machine <span> Management </span></h3>
          <S.UserInfo>
            <img src="/images/helen-brown.jpeg" alt="Foto da Helen" />
            <p>
              Welcome back,<br/>
              <strong>Helen Brown</strong>
            </p>
          </S.UserInfo>

          <MenuNav />
        </S.ColumnMenu>
      </MediaMatch>

      <MediaMatch hideOnDesktop>
        <S.FullMenu aria-hidden={!isOpen} isOpen={isOpen}>
          <S.UserInfo>
            <img src="/images/helen-brown.jpeg" alt="Foto da Helen" />
            <p>
              Welcome back,<br/>
              <strong>Helen Brown</strong>
            </p>
          </S.UserInfo>

          <S.CloseMenuWrapper>
            <AiOutlineClose onClick={closeMenu}/>
          </S.CloseMenuWrapper>
          <MenuNav />        
        </S.FullMenu>
      </MediaMatch>
    </>
  )
}

export default Menu;