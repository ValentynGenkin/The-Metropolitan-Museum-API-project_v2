import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import useFetch from '../Hooks/useFetch';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function NavigationBar() {
  const [searchInput, setSearchInput] = useState(null);
  const [response, setResponse] = useState(null);
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/departments`;

  const [data, error] = useFetch(url);

  useEffect(() => {
    data && setResponse(data);
  }, [data]);

  const handleInputChange = (e) => {
    const inputData = e.target.value;
    setSearchInput(inputData);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>
          The Metropolitan Museum
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to={'/'}>
              Home
            </Nav.Link>
            <NavDropdown title="Art departments" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to={'/categories'}>
                All categories
              </NavDropdown.Item>
              {error ? (
                <p>{error.toString()}</p>
              ) : (
                response &&
                response.departments.map((department) => (
                  <NavDropdown.Item
                    as={Link}
                    to={`categories/${department.displayName}/${department.departmentId}`}
                    key={department.departmentId}
                  >
                    {department.displayName}
                  </NavDropdown.Item>
                ))
              )}
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleInputChange}
            />
            <Button
              as={Link}
              to={`categories/search/${searchInput}`}
              variant="outline-success"
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
