import React from 'react';
import {
  DashboardWrapper,
  ContentGrid,
  GridItem,
  SectionTitle,
  SectionContent,
  GraphPlaceholder,
} from '../components/StyledHome';

const Home = () => {
  return (
    <DashboardWrapper>
      <ContentGrid>
        <GridItem>
          <SectionTitle>Sessions By Channel</SectionTitle>
          <SectionContent>
            <GraphPlaceholder style={{ backgroundImage: 'url(/path/to/pie-chart.png)' }} />
            <p>Firewalls(3) 41/100</p>
            <p>Ports(12) 12/100</p>
            <p>Servers(23) 23/100</p>
            <p>Firewalls(3) 71/100</p>
            <p>Firewalls(3) 6/100</p>
          </SectionContent>
        </GridItem>
        <GridItem>
          <SectionTitle>Events</SectionTitle>
          <SectionContent>
            <GraphPlaceholder style={{ backgroundImage: 'url(/path/to/line-graph.png)' }} />
          </SectionContent>
        </GridItem>
        <GridItem>
          <SectionTitle>Sales Analytics</SectionTitle>
          <SectionContent>
            <GraphPlaceholder style={{ backgroundImage: 'url(/path/to/line-graph.png)' }} />
            <p>Online: 23,342</p>
            <p>Offline: 13,221</p>
            <p>Marketing: 1,542</p>
          </SectionContent>
        </GridItem>
        <GridItem>
          <SectionTitle>Device Stats</SectionTitle>
          <SectionContent>
            <p>Uptime: 195 Days, 8 hours</p>
            <p>First Seen: 23 Sep 2019, 2:04PM</p>
            <p>Collected time: 23 Sep 2019, 2:04PM</p>
            <p>Memory space: 168.3GB</p>
          </SectionContent>
        </GridItem>
        <GridItem>
          <SectionTitle>Sessions By Channel</SectionTitle>
          <SectionContent>
            <p>Employee Name This Month</p>
            <p>Connor Chandler: $4099</p>
            <p>Russell Floyd: $1987</p>
            <p>Douglas White: $1939</p>
            <p>Alta Fletcher: $1837</p>
            <p>Marguerite Pearson: $1831</p>
          </SectionContent>
        </GridItem>
        <GridItem>
          <SectionTitle>Card Title</SectionTitle>
          <SectionContent>
            <p>Total Earning: 287,493$</p>
            <p>1.4% Since Last Month</p>
            <p>Total Earning: 87,493$</p>
            <p>5.43% Since Last Month</p>
          </SectionContent>
        </GridItem>
      </ContentGrid>
    </DashboardWrapper>
  );
};

export default Home;
