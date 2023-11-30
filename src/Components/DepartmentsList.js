import { useEffect, useState } from 'react';
import useFetch from '../Hooks/useFetch';
import { Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DepartmentsList() {
  const [response, setResponse] = useState(null);
  const url =
    'https://collectionapi.metmuseum.org/public/collection/v1/departments';

  const [data, error] = useFetch(url);

  useEffect(() => {
    data && setResponse(data);
  }, [data]);

  return (
    <Container className="category-container">
      {error ? (
        <p>{error.toString()}</p>
      ) : response ? (
        response.departments.map((department) => (
          <div key={department.departmentId} className="category-item">
            <Link to={`${department.displayName}`}>
              {department.displayName}
            </Link>
          </div>
        ))
      ) : (
        <Spinner />
      )}
    </Container>
  );
}

export default DepartmentsList;
