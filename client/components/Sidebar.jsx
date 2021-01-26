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
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  grid-column: 3;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  & * {
    box-sizing: border-box;
  }
`;
const Card = styled.div`
  background-color: (0, 0, 0, 0);
  background-image: linear-gradient(to right, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.5) 100%);
  padding: 16px;
  margin-bottom: 8px;
  margin-top: 0px;
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

export default Sidebar;