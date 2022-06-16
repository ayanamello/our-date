import { Container } from "./style";
import Heart from "../../components/Heart";
import { useState } from "react";
import { RiHomeHeartLine, RiMapPin2Line } from "react-icons/ri";
import { MdOutlineFoodBank } from "react-icons/md";
import { BiDrink } from "react-icons/bi";
import { CgSmileUpside } from "react-icons/cg"

const Card = ({ name, local, category }) => {
    const [turnedOverCard, setTurnedOverCard] = useState(false);
    let icon

    if(category === "Home") {
        icon = <RiHomeHeartLine />
    } else if(category === "Food") {
        icon = <MdOutlineFoodBank />
    } else if(category === "Pub"){
        icon = <BiDrink />
    } else if(category === "Fun") {
        icon = <CgSmileUpside />
    } else {
        icon = <RiMapPin2Line />
    }

    return (
        <Container onClick={() => setTurnedOverCard(!turnedOverCard)} status={turnedOverCard}>
            { 
                turnedOverCard === true && 
                <>
                    { icon }
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