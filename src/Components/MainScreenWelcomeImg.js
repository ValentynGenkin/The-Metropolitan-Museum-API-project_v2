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
        borderRadius: '10px',
        boxShadow: '0 0 8px 2px rgb(174, 174, 174)',
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
