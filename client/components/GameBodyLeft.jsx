import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GameBodyLeft = () => {
  return (
    <Page>
      <GlobalStyle />
      <NoticeBox>
        <Text>
          <Span orange>
            <b>Notice: </b>
          </Span>
          <Span>This product is not compatible with macOS 10.15 Catalina.</Span>
          <Span bold>
            {' '}
            <b>Click Here</b>
          </Span>{' '}
          <Span>for more information.</Span>
        </Text>
      </NoticeBox>
      <BuyBox>
        <BuyText>Buy Antichamber</BuyText>
        <ImagesContainer>
          <img src='https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3' />
          <img src='https://store.akamai.steamstatic.com/public/images/v6/icon_platform_mac.png' />
          <img src='https://store.akamai.steamstatic.com/public/images/v6/icon_platform_linux.png' />
        </ImagesContainer>
      </BuyBox>
      <AddToCart>
        <Price>$19.99</Price>
        <div></div>
        <Button>Add to Cart</Button>
      </AddToCart>
    </Page>
  );
};

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    background-color: #1b2938;
    color: #c6d4df;
    font-family: Arial, sans-serif;
  }
`;
const Page = styled.div`
  width: 100%;
  margin: auto;
  margin-bottom: 25px;
  position: relative;
`;

const NoticeBox = styled.div`
  border: 1px solid rgb(162, 80, 36);
  border-radius: 3px;
  font-size: 14px;
  height: 72px;
  width: 616px;
  margin-bottom: 10px;
`;

const Text = styled.div`
  padding: 15px;
  padding-right: 20px;
`;
const Span = styled.span`
  cursor: ${(props) => (props.bold ? 'pointer' : 'auto')};
  color: ${(props) => {
    if (props.orange) {
      return 'rgb(244, 123, 32)';
    } else if (props.bold) {
      return 'white';
    } else {
      return '#c6d4df';
    }
  }};

  font-size: 16px;
`;

const BuyBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 3px;
  height: 72px;
  width: 616px;
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(
    -60deg,
    rgba(226, 244, 255, 0.3) 5%,
    rgba(84, 107, 115, 0.3) 95%
  );
`;

const BuyText = styled.div`
  padding-top: 22px;
  padding-left: 20px;
  font-size: 21px;
  font-weight: 400;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

const ImagesContainer = styled.div`
  padding-top: 20px;
  padding-right: 20px;
`;

const AddToCart = styled.div`
  position: absolute;
  bottom: -16px;
  left: 415px;
  height: 31px;
  width: 182px;
  display: block;
  background-color: black;
  border-radius: 2px;
  display: grid;
  grid-template-columns: 66px 1fr 112px;
`;
const Price = styled.span`
  padding-top: 8px;
  padding-left: 10px;
  color: rgb(198, 212, 223);
  font-size: 14px;
`;
const Button = styled.button`
  cursor: pointer;
  color: rgb(210, 239, 169);
  text-shadow: rgba(0, 0, 0, 0.3) 1px 1px 0px;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(
    to right,
    rgb(117, 176, 34) 5%,
    rgb(88, 138, 27) 95%
  );
  margin: 3px;

  &:hover {
    background-image: linear-gradient(
      to right,
      rgb(122, 182, 37) 5%,
      rgb(129, 200, 42) 95%
    );
  }
`;
export default GameBodyLeft;
