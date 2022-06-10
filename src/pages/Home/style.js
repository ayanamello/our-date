import styled from "styled-components";

export const Container = styled.div`
    position: relative;    
    width: 100%;
    min-height: 100vh;
    padding-bottom: 10px;
    background: linear-gradient(to bottom, rgba(209, 63, 17, 0.8) 40%, rgba(219, 46, 64, 1));    
`

export const Header = styled.header`
    width: 100%;
    text-align: center;
    padding: 50px;

    h1 {
        width: 90%;
        margin: 0 auto;
        font-family: "Updock";
        font-size: 4em;
        font-weight: 500;
        line-height: 1;
        color: #FFF;
        border-bottom: 1px solid rgba(255, 255, 255, .2);
    }
`

export const DatesList = styled.section`
    width: 90%;
    //max-width: 1184px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`