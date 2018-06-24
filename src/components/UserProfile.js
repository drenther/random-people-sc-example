import React from 'react';
import styled from 'styled-components';
import { Redirect, Link } from 'react-router-dom';

import Button from './Button';

import { concatName } from '../utils/helpers';
import { getColor, getFontSize } from '../utils/theme';

const UserProfile = ({ user, className }) =>
  user ? (
    <div className={className}>
      <Image src={user.picture.large} />
      <Details>
        <Group>
          <Label>Name : </Label>
          <Value>{concatName(...Object.values(user.name))}</Value>
        </Group>
        <Group>
          <Label>Gender : </Label>
          <Value>{user.gender}</Value>
        </Group>
        <Group>
          <Label>Age : </Label>
          <Value>{user.dob.age}</Value>
        </Group>
        <Group>
          <Label>Email : </Label>
          <Value>{user.email}</Value>
        </Group>
        <Group>
          <Label>Cell : </Label>
          <Value>{user.cell}</Value>
        </Group>
      </Details>
      <Link to="/">
        <Button floating>Go Back</Button>
      </Link>
    </div>
  ) : (
    <Redirect to="/" />
  );

const breakPoint = '600px';

const Image = styled.img`
  width: 128px;
  height: 128px;
  margin: 10px 0;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 350px;
  height: 200px;
  display: row;
  margin: 10px;
  jusify-content: center;
  align-items: flex-start;
  color: black;

  @media (max-width: ${breakPoint}) {
    width: 280px;
  }
`;

const Group = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Value = styled.span`
  font-size: ${getFontSize('tn')};
  color: ${getColor('dark')};
  padding: 5px;
`;

const Label = Value.extend`
  font-weight: bold;
  color: ${getColor('primary')};
`;

export default styled(UserProfile)`
  padding: 10px;
  margin: 40px 0;
  display: flex;
  position: relative;
  background: ${getColor('secondary')};
  border-radius: 5px;
  box-sizing: border-box;

  @media (max-width: ${breakPoint}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
