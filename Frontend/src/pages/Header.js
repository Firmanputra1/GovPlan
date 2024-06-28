// src/pages/Header.js
import React from 'react';
import {
  HeaderWrapper,
  Nav,
  NavLink,
  Logo,
  ProfileIcon,
  ButtonWrapper,
  LoginButton,
} from '../components/StyledHeader';

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavLink href="home">Beranda</NavLink>
        <NavLink href="calendar">Kalender</NavLink>
        <NavLink href="#">Tugas</NavLink>
        <NavLink href="#">Pengingat</NavLink>
        <NavLink href="#">Catatan</NavLink>
      </Nav>
      <ButtonWrapper>
        <LoginButton href="login">Login</LoginButton>
        <ProfileIcon />
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

export default Header;
