import { Container, Header, DatesList } from "./style";
import { datesList } from "../../utils/bd";
import Card from "../../components/Card";
import Heart from "../../components/Heart";


const Home = () => {
    const shuffledDates = datesList.sort(() => Math.random() - 0.5);

    return(
        <Container>
            <Header>
                <h1>Our Date</h1>
            </Header>

            <DatesList>
                { shuffledDates.map((item, index) => {
                    return <Card key={index} name={item.name} local={item.local} />
                })}
            </DatesList>
        </Container>
    )
}

export default Home;