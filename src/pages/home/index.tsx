import Assets from "assets/Assets";
import { Button, Container } from "components";

const Home = () => {
    return (
        <Container className='my-5' style={{textAlign: "center"}}>
            <h1>{"Home Page"}</h1>
            <img width={100} src={Assets.images['reactLogo']} alt="react-logo" />
            <p>this is a simple react page with Ant Design</p>
            <Button type="primary">Hello Button</Button>
        </Container>
    )
}
export default Home;