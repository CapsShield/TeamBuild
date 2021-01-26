import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import games from './utils.js';

class MoreLike extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Page>
          <MoreContainer>
            <Header>
              <Title>MORE LIKE THIS</Title>
              <Button>See all</Button>
            </Header>
            <img src='https://store.akamai.steamstatic.com/public/images/v6/maincol_gradient_rule.png' />
            <GameContainer>
              {games.map((game, i) => (
                <Game key={i}>
                  <img src={game.photoUrl} />
                  <Gray>{game.name}</Gray>
                  <BlueText>{game.price}</BlueText>
                </Game>
              ))}
            </GameContainer>
          </MoreContainer>
        </Page>
      </div>
    );
  }
}

const GlobalStyle = createGlobalStyle`
body {
  font-family: Arial, sans-serif;
  background-color: rgb(27, 40, 56);
  color: #dbe2e6;
  width: 100%;
}`;

const Page = styled.div`
  width: 940px;
  margin: auto;
  padding-top: 20px;
`;

const MoreContainer = styled.div`
  width: 615px;
  display: grid;
  padding-top: 40px;
  grid-template-rows: 25px 1px 150px;
`;

const Header = styled.div`
  width: 615px;
  display: flex;
  justify-content: space-between;
`;

const Game = styled.div`
  width: 203px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 1px;

  &:hover {
    border-top: 1px solid rgba(103, 193, 245, 0.5);
    border-right: 1px solid rgba(103, 193, 245, 0.5);
    border-left: 1px solid rgba(103, 193, 245, 0.5);
  }
`;

const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  overflow-y: hidden;
  width: 615px;
  &::-webkit-scrollbar {
    display: block;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;

    margin-left: 5px;
  }

  &::-webkit-scrollbar-thumb {
    display: block;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    cursor: pointer;
  }

  &::-webkit-scrollbar-thumb:hover {
    display: block;
    background-color: rgba(62, 126, 167, 0.8);
    border-radius: 3px;
    cursor: pointer;
    width: 2px;
  }

  &::-webkit-scrollbar-button:horizontal:decrement:start {
    width: 30px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-button:horizontal:decrement:hover {
    background-color: rgba(62, 126, 167, 0.8);
  }

  /* Right */
  &::-webkit-scrollbar-button:horizontal:increment:end {
    width: 30px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-button:horizontal:increment:hover {
    background-color: rgba(62, 126, 167, 0.8);
  }

  &::-webkit-scrollbar-corner {
    display: none;
  }
`;

const BlueText = styled.span`
  color: #66c0f4;
  font-size: 11px;
  cursor: pointer;
`;

const Title = styled.span`
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 26px;
  margin-bottom: 10px;
  padding-top: 2px;
`;
const Gray = styled.span`
  color: rgb(85, 103, 114);
  padding-top: 10px;
  font-size: 13px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Button = styled.button`
  color: #67c1f5;
  background: rgba(103, 193, 245, 0.2);
  font-size: 11px;
  outline: none;
  border: none;
  border-radius: 1px;
  cursor: pointer;
  height: 15px;
  padding: 2px 4px;

  &:hover {
    color: white;
    background: linear-gradient(-60deg, #417a9b 5%, #67c1f5 95%);
  }
`;

const ImageDiv = styled.div`
  height: 1px;
`;

export default MoreLike;
