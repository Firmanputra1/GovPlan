// src/components/StyledHeader.js
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #d97d0d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2em;

  &:hover {
    text-decoration: underline;
  }
`;

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  background-image: url('/path/to/logo.png');
  background-size: cover;
`;

export const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url('/path/to/profile-icon.png');
  background-size: cover;
`;

export const LoginButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LoginButton = styled.a`
  background-color: rgb(235, 207, 147);;
  color: #d97d0d;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1em;

  &:hover {
    background-color: #b56508;
    color: white;
  }
`;
