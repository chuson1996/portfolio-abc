import React, { Component } from 'react';
import { Container, Flex } from 'theme/grid';
import { Title, VideoContainer, StyledPlayButton } from './AboutMe.style';
import ReactPlayer from 'react-player';
import { H2, P } from 'theme/types';
import ToggleState from 'react-toggle-state';

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <Title>AboutMe</Title>
        <H2 align="right">Whaa? Do you play sport? Hell yeah I do.</H2>
        <Flex>
          <P align="right">Check out this crazy basketball montage that didn't take me nearly one hour to make it.</P>
          <ToggleState>
            {({ isTrue: playing, turnTrue: startPlay, turnFalse: stopPlay }) =>
              <ToggleState>
                {({ isTrue: hovering, turnTrue: onMouseOver, turnFalse: onMouseLeave }) => 
                  <VideoContainer
                    onMouseLeave={onMouseLeave}
                    onMouseOver={onMouseOver}
                    onClick={playing ? stopPlay : startPlay}
                  >
                    <StyledPlayButton playing={playing} hover={hovering}/>
                    <ReactPlayer
                      loop
                      playing={playing}
                      height="auto"
                      width="100%"
                      url={require('assets/basketball.mp4')}/>
                  </VideoContainer>
                }
              </ToggleState>
            }
          </ToggleState>

        </Flex>
      </Container>
    );
  }
}

export default AboutMe;