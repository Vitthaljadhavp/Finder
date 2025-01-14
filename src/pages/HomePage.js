import { Container, Button } from 'react-bootstrap';

const HomePage = () => (
  <Container className="text-center py-5">
    <h1>Welcome to Joble</h1>
    <p>Connecting job seekers with employers effortlessly.</p>
    <Button variant="primary" href="/register">Get Started</Button>
  </Container>
);

export default HomePage;
