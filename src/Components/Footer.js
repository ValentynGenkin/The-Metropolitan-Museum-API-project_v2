import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <Nav className="justify-content-center bg-body-tertiary">
        <Nav.Item>
          <Nav.Link as={Link} to={'/'}>
            Home
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <p
        className="text-center bg-body-tertiary"
        style={{ margin: '0', padding: '0' }}
      >
        Valentyn Genkin HYF Educational project
      </p>
    </>
  );
}

export default Footer;
