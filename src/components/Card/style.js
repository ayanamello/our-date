import styled from "styled-components";

export const Container = styled.div`    
    position: absolute;
    width: 200px;
    height: 150px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 0px 0px 10px 2px rgba(0,0,0, 0.2);
    -webkit-box-shadow: 0px 0px 10px 2px rgba(0,0,0, 0.2);
    -moz-box-shadow: 0px 0px 10px 2px rgba(0,0,0, 0.2);      
    transition: transform 0.3s ease; 

    &:hover {
        transform: scaleX(0.95) skewY(3deg);
    }
`;