import React from 'react';
import MoreLike from './MoreLike.jsx';
import styled from 'styled-components';
import Sidebar from './Sidebar.jsx';

export default function App() {
  return (
    <GridContainer>
      <MoreLike />
      <Sidebar />
    </GridContainer>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 940px 16px 308px;
`;