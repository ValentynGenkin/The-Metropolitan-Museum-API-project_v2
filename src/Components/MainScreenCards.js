import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MainScreenCards() {
  return (
    <Container style={{ padding: '0' }}>
      <Card
        style={{
          marginTop: '10px',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '15rem',
            display: 'flex',
          }}
        >
          <div style={{ width: '50%' }}>
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
          <div style={{ width: '50%' }}>
            <Card.Img
              variant="top"
              src="holder.js/100px180"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </Card>
      <Card
        style={{
          marginTop: '10px',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '15rem',
            display: 'flex',
          }}
        >
          <div style={{ width: '50%' }}>
            <Card.Img
              variant="top"
              src="holder.js/100px180"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div style={{ width: '50%' }}>
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
        </div>
      </Card>
      <Card
        style={{
          marginTop: '10px',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '15rem',
            display: 'flex',
          }}
        >
          <div style={{ width: '50%' }}>
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
          <div style={{ width: '50%' }}>
            <Card.Img
              variant="top"
              src="holder.js/100px180"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default MainScreenCards;
