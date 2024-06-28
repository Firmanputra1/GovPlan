// src/pages/Home.js
import React from 'react';
import {
  HomeWrapper,
  MainContent,
  Section,
  SectionTitle,
  SectionIcon,
} from '../components/StyledHome';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <MainContent>
        <Section>
          <SectionTitle>GOVPLAN</SectionTitle>
          <SectionIcon style={{ backgroundImage: 'url(/path/to/govplan-icon.png)' }} />
        </Section>
        <Section>
          <SectionTitle>LAPORAN AGENDA HARIAN</SectionTitle>
          <SectionIcon style={{ backgroundImage: 'url(/path/to/report-icon1.png)' }} />
          <SectionIcon style={{ backgroundImage: 'url(/path/to/report-icon2.png)' }} />
          <SectionIcon style={{ backgroundImage: 'url(/path/to/report-icon3.png)' }} />
        </Section>
      </MainContent>
      <Footer />
    </HomeWrapper>
  );
};

export default Home;
