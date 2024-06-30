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
        <NavLink href="tugas">Tugas</NavLink>
        <NavLink href="pengingat">Pengingat</NavLink>
        <NavLink href="catatan">Catatan</NavLink>
      </Nav>
      <ButtonWrapper>
        <LoginButton href="login">Login</LoginButton>
        <ProfileIcon />
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

export default Header;
