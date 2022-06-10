import { Container } from "./style";
import Heart from "../../components/Heart";
import { useState } from "react";

const Card = ({ name, local }) => {
    const [turnedOverCard, setTurnedOverCard] = useState(false);

    return (
        <Container onClick={() => setTurnedOverCard(!turnedOverCard)} status={turnedOverCard}>
            { 
                turnedOverCard === true && 
                <>
                    <h3>{ name }</h3>
                    { local !== "" && <p> { local }</p> }
                </>
            }
            
            { 
                turnedOverCard === false &&
                <>
                    <Heart size="120px" color="rgba(219, 46, 64, .1)" />
                </>
            }
        </Container>
    )
}

export default Card;