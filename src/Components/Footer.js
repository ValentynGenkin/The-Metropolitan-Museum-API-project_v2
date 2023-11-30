import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <>
      <Nav
        className="justify-content-center bg-body-tertiary"
        activeKey="/home"
      >
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center bg-body-tertiary">
        Valentyn Genkin HYF Educational project
      </p>
    </>
  );
}

export default Footer;
