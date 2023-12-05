import { useEffect, useState } from 'react';
import useFetch from '../Hooks/useFetch';
import { Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DepartmentsList() {
  const [response, setResponse] = useState(null);
  const url =
    'https://collectionapi.metmuseum.org/public/collection/v1/departments';

  const [data, isLoading, error] = useFetch(url);

  useEffect(() => {
    data && setResponse(data);
  }, [data]);

  return (
    <Container className="category-container">
      {isLoading ? (
        <Spinner variant="primary" />
      ) : (
        response &&
        response.departments.map((department) => (
          <div key={department.departmentId} className="category-item">
            <Link to={`${department.displayName}/${department.departmentId}`}>
              {department.displayName}
            </Link>
          </div>
        ))
      )}
    </Container>
  );
}

export default DepartmentsList;
