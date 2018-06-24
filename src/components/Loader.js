import React from 'react';
import styled, { keyframes } from 'styled-components';

import { getColor } from '../utils/theme'

const Loader = ({ className }) => (<div className={className}><Loading/></div>)

const loading = keyframes`
  0% {
    transform: rotate(0);
  } 100% {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  color: transparent;
  min-height: 2rem;
  pointer-events: none;
  position: relative;
  
  &::after {
    content: "";
    animation: ${loading} .5s infinite linear;
    border: .1rem solid ${getColor('primary')};
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    display: block;
    z-index: 1;
    left: 50%;
    position: absolute;
    top: 50%;
    height: 1.6rem;
    width: 1.6rem
    margin-left: -.8rem;
    margin-top: -.8rem;
  }
`;

export default styled(Loader)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
