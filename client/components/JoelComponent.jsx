import React from 'react';
import styled from 'styled-components';
import GameBodyLeft from './GameBodyLeft.jsx';
import GameText from './GameText.jsx';
import MoreLike from './MoreLike.jsx';

const JoelComponent = () => {
  return (
    <Main>
      <GameBodyLeft />
      <GameText />
      <MoreLike />
    </Main>
  );
};

const Main = styled.div`
  grid-column: 1;
  width: 100%;
`;

export default JoelComponent;
