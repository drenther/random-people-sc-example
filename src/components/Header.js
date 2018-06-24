import styled from 'styled-components';

import { getFontSize, getColor } from '../utils/theme';

const Header = styled.div`
  width: 100%;
  padding: 10px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${getColor('primary')};
  color: ${getColor('secondary')};
  font-size: ${getFontSize('hg')};
  font-family: 'Rasa', serif;
  font-weight: bold;
`;

export default Header;
