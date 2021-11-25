import React from 'react';
import { FaChartPie, FaTools, FaBuilding, FaUserAlt } from 'react-icons/fa';
import { GoSignOut } from 'react-icons/go';
import { RiBuilding3Fill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../hooks/auth';
import { useMobileMenu } from '../../../hooks/mobileMenuToggle';
import * as S from './styles';

const MenuNav: React.FC = () => {
  const { signOut } = useAuth()
  const { closeMenu } = useMobileMenu()

  return (
    <>
      <S.Navigation>
        <NavLink to="/" exact activeClassName="selected" onClick={closeMenu}>
          <FaChartPie /> Dashboard
        </NavLink>
        <NavLink to="/assets" activeClassName="selected" onClick={closeMenu}>
          <FaTools /> Assets
        </NavLink>
        <NavLink to="/companies" activeClassName="selected" onClick={closeMenu}>
          <FaBuilding /> Companies
        </NavLink>
        <NavLink to="/units" activeClassName="selected" onClick={closeMenu}>
          <RiBuilding3Fill /> Units
        </NavLink>
        <NavLink to="/users" activeClassName="selected" onClick={closeMenu}>
          <FaUserAlt /> Users
        </NavLink>
      </S.Navigation>

      <S.SignOutWrapper>
        <NavLink onClick={signOut} to="/">
          <GoSignOut /> Sign-out
        </NavLink>
      </S.SignOutWrapper>
    </>
  )
}

export default MenuNav;
