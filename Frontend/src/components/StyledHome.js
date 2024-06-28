// src/components/StyledHome.js
import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

export const Section = styled.section`
  margin: 20px 0;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 10px;
`;

export const SectionIcon = styled.div`
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center;
  margin: 10px auto;
`;
