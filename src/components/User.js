import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { getFontSize, getColor } from '../utils/theme';

const User = ({ email, name, gender, photo, className }) => (
  <Link to={`/user/${email}`}>
    <div className={className}>
      <Avatar src={photo} gender={gender} />
      <Name>{name}</Name>
    </div>
  </Link>
);

const maleBorder = props =>
  props.gender === 'male' ? `solid 4px ${props.theme.color.primary}` : '0';
const femaleBorder = props =>
  props.gender === 'female' ? `solid 4px ${props.theme.color.primary}` : '0';

const Avatar = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  position: relative;
  border-bottom: ${femaleBorder};
  border-left: ${femaleBorder};
  border-right: ${maleBorder};
  border-top: ${maleBorder};
`;

const Name = styled.div`
  font-size: ${getFontSize('sm')};
  display: flex;
  align-items: center;
  padding: 10px;
  color: ${getColor('dark')};
`;

export default styled(User)`
  width: 280px;
  margin: 10px;
  padding: 10px;
  border: solid 2px ${getColor('secondary')};
  border-radius: 70px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.25s ease-in;
  position: relative;
  background: ${getColor('secondary')};

  &:hover {
    transform: scale(1.05);
  }
`;
