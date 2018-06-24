import styled, { css } from 'styled-components';

import { getFontSize, getColor } from '../utils/theme';

const Button = styled.button`
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

  ${props =>
    props.floating &&
    css`
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translate(-50%, 0);
    `};
`;

export default Button;
