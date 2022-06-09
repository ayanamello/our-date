import styled from "styled-components";

export const Container = styled.div`
    position: relative;    
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, rgba(209, 63, 17, 0.8) 40%, rgba(219, 46, 64, 1));    
`

export const Header = styled.header`
    width: 100%;
    text-align: center;
    padding: 50px;

    h1 {
        width: 80%;
        margin: 0 auto;
        font-family: "Updock";
        font-size: 4em;
        font-weight: 500;
        line-height: 1;
        color: #FFF;
        border-bottom: 1px solid #FFF;
    }
`