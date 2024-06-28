// src/pages/Header.js
import React from 'react';
import {
  HeaderWrapper,
  Nav,
  NavLink,
  Logo,
  ProfileIcon,
  LoginButtonWrapper,
  LoginButton,
} from '../components/StyledHeader';

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavLink href="#">Beranda</NavLink>
        <NavLink href="#">Kalender</NavLink>
        <NavLink href="#">Tugas</NavLink>
        <NavLink href="#">Pengingat</NavLink>
        <NavLink href="#">Catatan</NavLink>
      </Nav>
      <LoginButtonWrapper>
        <LoginButton href="#">Login</LoginButton>
        <ProfileIcon />
      </LoginButtonWrapper>
    </HeaderWrapper>
  );
};

export default Header;
