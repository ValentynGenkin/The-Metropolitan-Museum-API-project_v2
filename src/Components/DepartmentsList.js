import { useEffect, useState } from 'react';
import useFetch from '../Hooks/useFetch';
import { Button, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../CSS/DepartmentList.css';

function DepartmentsList() {
  const [response, setResponse] = useState(null);
  const url =
    'https://collectionapi.metmuseum.org/public/collection/v1/departments';

  const [data, isLoading, error] = useFetch(url);

  useEffect(() => {
    data && setResponse(data);
  }, [data]);

  return (
    <Container className="layout-container">
      <div style={{ margin: '0 auto' }}>
        <Container className="departments-list-container">
          {isLoading ? (
            <Spinner variant="primary" className="spinner" />
          ) : (
            response &&
            response.departments.map((department) => (
              <span className="category-item " key={department.departmentId}>
                <Link
                  to={`${department.displayName}/${department.departmentId}`}
                >
                  <div className="link-text">{department.displayName}</div>
                </Link>
              </span>
            ))
          )}
        </Container>
      </div>
    </Container>
  );
}

export default DepartmentsList;
