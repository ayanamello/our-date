import styled, { keyframes } from "styled-components";

const flip = keyframes`
    from {
        transform: rotateY(180deg);
    }
    to {
        transform: rotateY(360deg);
    }
`;

export const Container = styled.div`  
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    width: 200px;
    height: 150px;
    margin: 5px;
    padding: 0 10px;
    font-size: 14px;
    text-align: center;
    overflow: hidden;
    color: rgba(0, 0, 0, .8);
    font-family: "Charis SIL";
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 0px 0px 10px 2px rgba(0,0,0, 0.2);
    -webkit-box-shadow: 0px 0px 10px 2px rgba(0,0,0, 0.2);
    -moz-box-shadow: 0px 0px 10px 2px rgba(0,0,0, 0.2);      
    transition: transform 0.3s ease; 
    transform-style: preserve-3d;
    animation: ${props => props.status && flip} 0.5s linear;
    
    &:hover {
        transform: scaleX(0.95) skewY(3deg);
        cursor: pointer;
    }

    h3 {
        line-height: 1.2;
    }

    p {
        font-size: 12px;
    }

    svg {
        display: block;
        font-size: 20px;
        margin: 0 auto 10px;
    }
`;

