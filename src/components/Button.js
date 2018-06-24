import styled from 'styled-components';

import { getFontSize, getColor } from '../utils/theme';

export const Button = styled.button`
  font-size: ${getFontSize('smFont')};
  color: ${getColor('primary')};
  background: ${getColor('light')};
  border-radius: 5px;
  width: 150px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 30px;
  border: solid 1px ${getColor('primary')};
`;

export const FloatingButton = Button.extend`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
`;
