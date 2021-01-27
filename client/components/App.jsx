import React from 'react';
import MoreLike from './MoreLike.jsx';
import styled, {createGlobalStyle} from 'styled-components';
import Sidebar from './Sidebar.jsx';
import JoelComponent from './JoelComponent.jsx';

export default function App() {
  return (
    <Center>
      <GridContainer>
        <JoelComponent />
        <Sidebar />
      </GridContainer>
    </Center>
  );
}
const Center = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 616px 16px 308px;
`;