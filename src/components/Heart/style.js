import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-color: ${(props) => props.color};
  transform: rotate(-45deg);

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
