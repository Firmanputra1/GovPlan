import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background: #f0f2f5;
  min-height: 100vh;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

export const GridItem = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
  font-weight: 700;
`;

export const SectionContent = styled.div`
  color: #555;
  line-height: 1.6;
`;

export const GraphPlaceholder = styled.div`
  height: 150px;
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
