import { Container, Header } from "./style";
import { datesList } from "../../utils/bd";
import Card from "../../components/Card";


const Home = () => {
    const shuffledDates = datesList.sort(() => Math.random() - 0.5);

    return(
        <Container>
            <Header>
                <h1>Our Date</h1>
            </Header>

            <section className="dates-list">
                { shuffledDates.map((item, index) => {
                    <Card />
                })}
            </section>

        </Container>
    )
}

export default Home;