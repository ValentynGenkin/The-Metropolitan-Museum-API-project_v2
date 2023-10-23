import { Container } from 'react-bootstrap';

function MainScreenWelcomeImg() {
  return (
    <Container
      style={{
        overflow: 'hidden',
        height: '30rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end',
      }}
    >
      <img
        src="assets/cover.jpg"
        alt="welcome-img"
        style={{
          width: 'auto',
          height: 'auto',
          margin: '0 auto',
        }}
      />
    </Container>
  );
}

export default MainScreenWelcomeImg;
