import React from 'react';
import styled from 'styled-components';

const GameText = () => {
  return (
    <Page>
      <GameBox>
        <Reviews>
          <div>
            <Title>REVIEWS</Title>
          </div>
          <img src='https://store.akamai.steamstatic.com/public/images/v6/maincol_gradient_rule.png' />
          <ReviewText>
            “Even as the developer told me what the game was doing to mess with
            my brain while I was playing it, it still succeeded in messing with
            my brain.”
            <br></br>
            <White>– Rock, Paper, Shotgun</White>
            <br></br>
            <br></br>
            “The most tenacious, infuriating obstacle you’ll face throughout the
            game is yourself.”
            <br></br>
            <White>– PC Gamer</White>
            <br></br>
            <br></br>
            “Every aspect of Antichamber is made to get players out of their
            comfort zone.”
            <br></br>
            <White>– VentureBeat</White>
          </ReviewText>
        </Reviews>
        <AboutThisGame>
          <Title>ABOUT THIS GAME</Title>
          <img src='https://store.akamai.steamstatic.com/public/images/v6/maincol_gradient_rule.png' />
          <AboutText>
            Antichamber is a mind-bending psychological exploration game where
            nothing can be taken for granted. Discover an Escher-like world
            where hallways wrap around upon each other, spaces reconfigure
            themselves, and accomplishing the impossible may just be the only
            way forward.
            <br></br>
            <br></br>
            <br></br>
            Several years in the making, Antichamber received over 25 awards and
            honors throughout its development, in major competitions including
            the Independent Games Festival, the PAX10, IndieCade and Make
            Something Unreal. Antichamber was also supported by the Indie Fund.
          </AboutText>
          <KeyFeatures>
            <Blue>Key Features</Blue>
            <StyledUL>
              <StyledLI>
                A deeply psychological experience that will make you question
                everything you know about how a game works.
              </StyledLI>
              <StyledLI>
                Mind-bending challenges that will subvert your expectations at
                every twist and turn.
              </StyledLI>
              <StyledLI>
                An enormous, seamless non-Euclidean world to explore.
              </StyledLI>
              <StyledLI>
                Lifelike soundscapes developed by Robin Arnott and an ambient
                soundtrack composed by Siddhartha Barnhoorn.
              </StyledLI>
              <StyledLI>
                A gun that can create, destroy and manipulate matter, allowing
                you to discover new ways to overcome your surroundings.
              </StyledLI>
            </StyledUL>
          </KeyFeatures>
        </AboutThisGame>
        <SystemRequirements>
          <Title>SYSTEM REQUIREMENTS</Title>
          <img src='https://store.akamai.steamstatic.com/public/images/v6/maincol_gradient_rule.png' />
          <SystemText>
            <Gray>OS:</Gray> Windows XP SP2, or Windows 7<br></br>
            <Gray>Processor: </Gray> 2.0+ GHz or better (dual core recommended)
            <br></br>
            <Gray>Memory: </Gray> 2 GB RAM<br></br>
            <Gray>Graphics: </Gray> NVIDIA 8000 series or higher (Shader Model 3
            Compatible)<br></br>
            <Gray>DirectX®: </Gray> 9.0c<br></br>
            <Gray>Hard Drive: </Gray> 1 GB HD space<br></br>
          </SystemText>
        </SystemRequirements>
      </GameBox>
    </Page>
  );
};

const Page = styled.div`
  width: 100%;
  margin: auto;
  margin-bottom: 25px;
  padding-top: 35px;
`;

const GameBox = styled.div`

  border-radius: 3px;
  font-size: 14px;
  height: auto
  width: 616px;
  height: 800px;
  margin-bottom: 10px;
  display: grid;
  grid-template-rows: 210px 463px 169px;
`;

const Reviews = styled.div`
  display: grid;
  grid-template-rows: 25px 1px 160px;
  width: 616px;
`;

const Title = styled.span`
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 26px;
  margin-bottom: 10px;
  padding-top: 2px;
  width: 616px;
`;

const ReviewText = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  color: rgb(172, 178, 184);
  width: 616px;
  line-height: 18px;
  font-size: 12px;
`;

const White = styled.span`
  color: white;
  cursor: pointer;
  :hover {
    color: #66c0f4;
  }
`;
const AboutThisGame = styled.div`
  display: grid;
  grid-template-rows: 27px 5px 180px 151px;
  padding-top: 30px;
  width: 616px;
`;

const AboutText = styled.div`
  color: rgb(172, 178, 184);
  font-size: 14px;
  line-height: 21px;
  width: 616px;
  padding-top: 10px;
`;

const Blue = styled.span`
  color: rgb(47, 137, 188);
  font-size: 15px;
`;
const StyledUL = styled.ul`
  color: rgb(172, 178, 184);
  font-size: 14px;
  line-height: 21px;
  list-style-position: inside;
  list-style-type: square;
  width: 600px;
  padding-left: 10px;
`;

const StyledLI = styled.li`
  display: list-item;
  list-style-position: outside;
  line-height: 21px;
  list-style-type: square;
  margin-bottom: 8px;
  text-align: left;
  width: 600px;
  padding-right: 10px;

  &::marker {
    height: 200px;
    font-variant-numeric: tabular-nums;
    text-align: start;
    text-align-last: start;
    unicode-bidi: isolate;
  }
`;
const KeyFeatures = styled.div`
  margin-top: 18px;
`;

const SystemRequirements = styled.div`
  margin-top: 50px;
  padding-top: 10px;
  display: grid;
  grid-template-rows: 25px 1px 135px;
`;

const SystemText = styled.div`
  color: rgb(172, 178, 184);
  font-size: 10px;
  line-height: 21px;
  width: 616px;
  padding-top: 10px;
`;

const Gray = styled.span`
  color: rgb(85, 103, 114);
  padding-top: 10px;
`;
export default GameText;
