import React, {useState} from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <SidebarContainer>
      <CardHeader>Is this game relevant to you?</CardHeader>
      <CardBigText>
        <p>Sign in to see reasons why you may or may not like this based on your games, friends, and curators you follow.</p>
        <br />
        <ChunkyButton>Sign In</ChunkyButton>
        <span> or </span>
        <ChunkyButton>Open in Vapor</ChunkyButton>
      </CardBigText>
      <Card>
        <DetailsContainer>
          <DetailLine>
            <DetailIcon src="https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_singlePlayer.png"></DetailIcon>
            <DetailText>Single-player</DetailText>
          </DetailLine>
          <DetailLine>
            <DetailIcon src="https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_cards.png"></DetailIcon>
            <DetailText>Vapor Trading Cards</DetailText>
          </DetailLine>
        </DetailsContainer>
      </Card>
      <Card>
        <LanguageGrid>
          <GridTitle>Languages:</GridTitle>
          <GridCorner></GridCorner>
          <GridRow1>English</GridRow1>
          <ColumnLabel1>Interface</ColumnLabel1>
          <ColumnLabel2>Full Audio</ColumnLabel2>
          <ColumnLabel3>Subtitles</ColumnLabel3>
          <GridContent1>✔</GridContent1>
          <GridContent2>✔</GridContent2>
          <GridContent3></GridContent3>
        </LanguageGrid>
      </Card>
      <Card>
        <div>Points Shop Items Available</div>
        <ShopItemsList>
          <ShopItem src="https://steamcommunity.com/economy/profilebackground/items/219890/356fd93e785c54c8e3a115ba91cb32fcce459d15.jpg?size=64x0"/>
          <ShopItem src="https://steamcommunity.com/economy/profilebackground/items/219890/421e2496a27dc2c4faa6b355847e6074bc68bf9b.jpg?size=64x0"/>
          <ShopItem src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/219890/d2f48c27cfac4a963e48cfa70391aecc92ab6384.png"/>
          <MoreItems>View all 10</MoreItems>
        </ShopItemsList>
      </Card>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  grid-column: 3;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  & *, & *::before, & *::after {
    box-sizing: border-box;
  }
`;
const Card = styled.div`
  background-color: (0, 0, 0, 0);
  background-image: linear-gradient(to right, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.5) 100%);
  padding: 16px;
  margin-bottom: 8px;
  margin-top: 0px;
  color: #8f98a0;
  font-size: 12px;
`;
const CardHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(to right, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.5) 100%);
  color: #fff;
  font-size: 16px;
  padding: 10px 18px;
  margin-bottom: 0px;
`;
const CardBigText = styled(Card)`
  font-size: 14px;
  color: #acb2b8;
`;
const ChunkyButton = styled.button`
  border: none;
  border-radius: 2px;
  cursor: pointer;
  color: #67c1f5;
  background: rgba( 103, 193, 245, 0.2 );
  line-height: 30px;
  font-size: 15px;
  padding: 1px 16px;
  &:hover {
    color: #fff;
    background: linear-gradient(-60deg, #417a9b 5%,#67c1f5 95%);
  }
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const DetailLine = styled.div`
  height: 26px;
  margin-bottom: 2px;
  background-color: rgba( 0, 0, 0, 0.2 );
  display: flex;
  position: relative;
  cursor: pointer;
`;
const DetailIcon = styled.img`
  width: 36px;
  height: 26px;
  padding: 5px 5px;
`;
const DetailText = styled.div`
  width: 239px;
  padding: 4px 8px 0 8px;
  line-height: 18px;
  background: rgba( 103, 193, 245, 0.1 );
  color: #67c1f5;
  border-radius: 1px;
  font-size: 12px;
  &:hover {
    color: #fff;
    background: linear-gradient(-60deg, #417a9b 0%,#67c1f5 100%);
  }
`;
const LanguageGrid = styled.div`
  display: grid;
  grid-template-columns: 91px 62px 61px 62px;
  grid-template-rows: 14px 14px 21px;
`;
const GridItem = styled.div`
  font-size: 12px;
  color: #8f98a0;
  border-bottom: 1px #808080 solid;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GridTitle = styled(GridItem)`
  border: none;
  grid-column: 1;
  grid-row: 1;
  justify-content: flex-start;
`;
const ColumnLabel = styled(GridItem)`
  color: b0aeac;
  grid-row: 2
`;
const GridContent = styled(GridItem)`
  color: #67c1f5;
  grid-row: 3;
`;
const GridRow1 = styled(GridItem)`
  grid-column: 1;
  grid-row: 3;
  justify-content: flex-start;
`;
const GridContent1 = styled(GridContent)`
  grid-column: 2;
`;
const GridContent2 = styled(GridContent)`
  grid-column: 3;
`;
const GridContent3 = styled(GridContent)`
  grid-column: 4;
`;
const ColumnLabel1 = styled(ColumnLabel)`
  grid-column: 2;
`;
const ColumnLabel2 = styled(ColumnLabel)`
  grid-column: 3;
`;
const ColumnLabel3 = styled(ColumnLabel)`
  grid-column: 4;
`;
const GridCorner = styled(GridItem)`
  grid-column: 1;
  grid-row: 2;
`;
const ShopItemsList = styled.div`
  display: flex;
  padding: 4px 0;
  margin-bottom: 5px;
  margin-top: 2px;
`;
const ShopItem = styled.img`
  height: 64px;
  width: 64px;
  margin-right: 4px;
  background: #000;
`;
const MoreItems = styled.div`
  background-color: rgba( 103, 193, 245, 0.2 );
  border-radius: 1px;
  font-size: 13px;
  color: #67c1f5;
  text-align: center;
  height: 64px;
  width: 64px;
  line-height: 14px;
  padding: 18px 14px;
`;
export default Sidebar;