import styled from 'styled-components';
import { red } from 'theme/variables';
import { Relative } from 'theme/grid';
import PlayButton from 'components/PlayButton/PlayButton';

export const Title = styled.h1`
  margin-top: 0;
  color: ${red};
`;

export const VideoContainer = styled(Relative)`
  width: 70%;
  flex-shrink: 0;
  flex-grow: 0;
  cursor: pointer;
`;

export const StyledPlayButton = styled(PlayButton)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity .3s;
  ${({ playing }) => playing && `
    opacity: 0;
  `}
`;
