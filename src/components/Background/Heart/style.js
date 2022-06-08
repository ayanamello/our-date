import styled, { keyframes, css } from "styled-components";

const individualStyling = {
  heart1: () => css`
    top: 80vh;
    animation: ${opacityToZero} 2s alternate infinite;
  `
}

const opacityToZero = keyframes`
  from {
    opacity: 0.5;
    transform: scale3d(1.5, 1.5, 1) rotate(-65deg);
  }
  to {
    opacity: 0;
    transform: scale3d(0, 0, 0.5) rotate(-45deg);
  }
`;

export const Container = styled.div`
  position: relative;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-color: ${(props) => props.color};
  transform: rotate(-45deg);
  
  ${props => props.numHeart && individualStyling[props.numHeart]()}

  &::before,
  &::after {
    content: "";
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    background-color: ${(props) => props.color};
    border-radius: 50%;
    position: absolute;
  }

  &::before {
    top: calc((${(props) => props.size} / 2) * (-1));
  }

  &::after {
    left: calc(${(props) => props.size} / 2);
  }
`;
