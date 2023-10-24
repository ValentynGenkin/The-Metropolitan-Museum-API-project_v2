import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../CSS/MainScreenCards.css';

function MainScreenCards() {
  return (
    <Container className="main-screen-cards-container">
      <Card className="card">
        <div className="main-screen-card">
          <div className="main-screen-card-information-block">
            <Card.Title>European Paintings</Card.Title>
            <Card.Body>
              <Card.Text>
                The Met's celebrated European Paintings collection encompasses
                more than 2,500 works of art from the thirteenth through the
                early twentieth century.
              </Card.Text>
              <Button variant="primary">Explore</Button>
            </Card.Body>
          </div>
          <div className="main-screen-card-img-block">
            <Card.Img
              variant="top"
              src="assets/main-image1.jpg"
              className="main-screen-card-img"
            />
          </div>
        </div>
      </Card>
      <Card className="card">
        <div className="main-screen-card left-direction">
          <div className="main-screen-card-information-block">
            <Card.Title>Arms and Armor</Card.Title>
            <Card.Body>
              <Card.Text>
                The principal goals of the Arms and Armor Department are to
                collect, preserve, research, publish, and exhibit distinguished
                examples representing the art of the armorer, swordsmith, and
                gunmaker.
              </Card.Text>
              <Button variant="primary">Explore</Button>
            </Card.Body>
          </div>
          <div className="main-screen-card-img-block">
            <Card.Img
              variant="top"
              src="assets/main-image2.jpg"
              className="main-screen-card-img"
            />
          </div>
        </div>
      </Card>
      <Card className="card">
        <div className="main-screen-card">
          <div className="main-screen-card-information-block">
            <Card.Title>American Decorative Arts</Card.Title>
            <Card.Body>
              <Card.Text>
                Today, the American Wing's ever-evolving collection comprises
                some 20,000 works by African American, Euro American, Native
                American, and Latin American artists, ranging from the colonial
                to early-modern period.
              </Card.Text>
              <Button variant="primary">Explore</Button>
            </Card.Body>
          </div>
          <div className="main-screen-card-img-block">
            <Card.Img
              variant="top"
              src="assets/main-image3.jpg"
              className="main-screen-card-img"
            />
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default MainScreenCards;
