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
      <Card>
        <GameDetails>
          <div><DetailLabel>title: </DetailLabel>Antichamber</div>
          <div><DetailLabel>genre: </DetailLabel><DetailLink>Adventure</DetailLink>, <DetailLink>Indie</DetailLink></div>
          <div><DetailLabel>developer: </DetailLabel><DetailLink>Alexander Bruce</DetailLink></div>
          <div><DetailLabel>publisher: </DetailLabel><DetailLink>Demruth</DetailLink></div>
          <div><DetailLabel>release date: </DetailLabel>Jan 31, 2013</div>
        </GameDetails>
        <DetailBarsContainer>
          <DetailBar>Visit the website <ExternalLinkImg src="https://store.cloudflare.steamstatic.com/public/images/v5/ico_external_link.gif"/></DetailBar>
          <DetailBar>View update history</DetailBar>
          <DetailBar>Read related news</DetailBar>
          <DetailBar>View discussions</DetailBar>
          <DetailBar>Find Community Groups</DetailBar>
        </DetailBarsContainer>
      </Card>
      <Card>
        <ButtonRow>
          <ChunkyButton>Share</ChunkyButton>
          <ChunkyButton>Embed</ChunkyButton>
          <ChunkyButton><ReportIcon></ReportIcon></ChunkyButton>
        </ButtonRow>
      </Card>
      <Card>
        <MetaContainer>
          <Score>82</Score>
          <MetaLogo></MetaLogo>
          <MetaInnerContainer>
            <MetaLogoText>metacritic</MetaLogoText>
            <MetaTagLine>Read Critic Reviews <ExternalLinkImg src="https://store.cloudflare.steamstatic.com/public/images/ico/iconExternalLink.gif"/></MetaTagLine>
          </MetaInnerContainer>
        </MetaContainer>
      </Card>
      <Card>
        <div>Awards</div>
        <AwardsContainer collapsed={collapsed}>
          <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/219890/extras/DefiesDescription_Nominee.jpg?t=1525832559" />
          <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/219890/extras/WhoaDude_Nominee.jpg?t=1525832559" />
          <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/219890/extras/01 IGF Tech.jpg" />
          <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/219890/extras/04 IGF Nuovo.jpg" />
          <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/219890/extras/02 PAX10.jpg" />
          <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/219890/extras/03 IndieCade.jpg" />
        </AwardsContainer>
        {!collapsed ? null : <FadeContainer>
          <CollapsedFade/>
          <Expander onClick={() => setCollapsed(false)}>
            <span>read more</span>
            <ExpanderIcon />
          </Expander>
        </FadeContainer>}
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
  cursor: pointer;
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
  cursor: pointer;
  &:hover {
    background: linear-gradient(135deg, #67c1f5 0%,#417a9b 100%);
    color: #fff;
  }
`;
const GameDetails = styled.div`
  line-height: 20px;
  margin: 0;
  padding: 0;
`;
const DetailLabel = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  color: #556772;
`;
const DetailLink = styled.a`
  color: #67c1f5;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;
const DetailBarsContainer = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
`;
const DetailBar = styled.div`
  background: rgba( 103, 193, 245, 0.1 );
  padding-top: 4px;
  padding-left: 8px;
  padding-bottom: 4px;
  line-height: 17px;
  height: 25px;
  width: 276px;
  border-radius: 1px;
  margin-bottom: 2px;
  color: #67c1f5;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: linear-gradient(135deg, #67c1f5 0%,#417a9b 100%);
  }
`;
const ExternalLinkImg = styled.img`
  max-width: 12px;
  max-height: 12px;
  padding-right: 4px;
  vertical-align: middle;
`;
const ButtonRow = styled.div`
  display: flex;
  & > * {
    margin-right: 3px;
  }
`;
const ReportIcon = styled.div`
  background: url(https://store.cloudflare.steamstatic.com/public/shared/images/buttons/icons_16.png?v=5);
  height: 16px;
  width: 16px;
  background-position: -256px 0px;
  margin: 7px 4px 7px 0;
`;
const MetaContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Score = styled.div`
  background-color: #66CC33;
  width: 50px;
  height: 50px;
  line-height: 50px;
  color: #fff;
  font-size: 25px;
  text-align: center;
`;
const MetaLogo = styled.div`
  height: 35px;
  width: 35px;
  background-image: url(https://store.cloudflare.steamstatic.com/public/images/v6/mc_logo_no_text.png);
  background-repeat: no-repeat;
  margin-left: 10px;
`;
const MetaInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2px;
`;
const MetaLogoText = styled.div`
  font-size: 26px;
  line-height: 26px;
  font-weight: bold;
  color: #fff;
`;
const MetaTagLine = styled.div`
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #66c0f4;
  }
`;
const AwardsContainer = styled.div`
  height: ${props => props.collapsed ? '400px;' : '1070px;'}
  padding: 5px 0;
  margin-top: 2px;
  border-bottom: ${props => props.collapsed ? '1px rgb(48, 62, 81) solid;' : 'none;'}
  max-width: 276px;
  overflow-y: hidden;
  transition: height 200ms ease;
`;
const FadeContainer = styled.div`
  position: relative;
`;
const CollapsedFade = styled.div`
  position: absolute;
  top: -74px;
  z-index: 1;
  height: 73px;
  width: 100%;
  background-image: linear-gradient(to bottom,rgba( 22,32,45,0) 10%,rgba( 22,32,45,.95) 95%);
`;
const Expander = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 20px;
  text-transform: uppercase;
  line-height: 20px;
  font-size: 10px;
  color: #537ca6;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;
const ExpanderIcon = styled.i`
  margin-left: 4px;
  height: 8px;
  width: 8px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJ5JREFUeNpiDK5Z5sjAwFAJxAFrmiO/MUBBSO3yDCBlwAQkjgLxdyDeDBTkQpKsAuJuxv///4ME2ICc1UDMA1IIxEVA7Ag08S4j0ApmIEcOiJ9CFRkBsQMQPwZicRYgYQmVcAXiUCAWA+JXULEXTEBjjgAZxUC8G4jVkCRBIBfsBqjDooBULxBfhjo6FKj5F1wBkqIQII4ASYLEAAIMAPrDNy1EYNLFAAAAAElFTkSuQmCC);
  background-repeat: no-repeat;
`;

export default Sidebar;