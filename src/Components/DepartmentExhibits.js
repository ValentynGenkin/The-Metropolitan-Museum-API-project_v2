import { useEffect, useState } from 'react';
import useFetch from '../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import { bulkFetch } from '../Functions/bulkFetch';
import { Button, Card, Container, Form, Spinner } from 'react-bootstrap';
import PopUp from './PopUp';

import '../CSS/DepartmentExhibits.css';

function DepartmentExhibits() {
  const [response, setResponse] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);
  const [chunkedID, setChunkedId] = useState(0);
  const [exhibitId, setExhibitId] = useState([]);
  const [chunkSelect, setChunkSelect] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [bulkLoading, setBulkLoading] = useState(true);
  const [filter, setFilter] = useState({ onDisplay: false, highlights: false });
  const [modalShow, setModalShow] = useState(false);
  const [popUpBody, setPopUpBody] = useState(<></>);
  const { id, category } = useParams();

  const url =
    category === 'search'
      ? `https://collectionapi.metmuseum.org/public/collection/v1/search?${
          filter.onDisplay ? 'isOnView=true&' : ''
        }${filter.highlights ? 'isHighlight=true&' : ''}q=${id}`
      : `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${id}&q=cat`;

  const [data, isLoading, error] = useFetch(url);

  useEffect(() => {
    data && setResponse(data.objectIDs);
  }, [data]);

  const chunkSize = chunkSelect;

  useEffect(() => {
    if (response) {
      const slicedExhibits = response.slice(chunkedID, chunkedID + chunkSize);
      setExhibitId(slicedExhibits);
    }
  }, [chunkedID, response, chunkSelect, chunkSize]);

  useEffect(() => {
    exhibitId && bulkFetch(exhibitId, setFetchedData, setBulkLoading);
  }, [exhibitId]);

  const upOffset = () => {
    if (chunkedID + chunkSize < (response ? response.length : 0)) {
      setChunkedId(chunkedID + chunkSize);
    }
  };

  const downOffset = () => {
    if (chunkedID - chunkSize >= 0) {
      setChunkedId(chunkedID - chunkSize);
    }
  };

  return (
    <>
      <PopUp
        show={modalShow}
        exhibit={popUpBody}
        onHide={() => setModalShow(false)}
      />
      <Container className="items-per-page">
        <h4>
          {category === 'search' ? `Search results for: ${id}` : category}
        </h4>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>{'Items per page: '}</span>
          <div>
            <Form.Select
              aria-label="Items on page"
              size="sm"
              onChange={(e) => {
                setChunkSelect(parseInt(e.target.value));
              }}
            >
              <option>20</option>
              <option value="8">8</option>
              <option value="12">12</option>
              <option value="16">16</option>
              <option value="20">20</option>
              <option value="40">40</option>
            </Form.Select>
          </div>

          <span style={{ marginLeft: '10px' }}>
            {response && `Total exhibits: ${response.length}`}{' '}
          </span>
        </div>
      </Container>
      <Container>
        {category === 'search' && (
          <Form className="check-boxes">
            <p>Filters:</p>
            <Form.Check
              className="filter-switch"
              type="switch"
              id="custom-switch-1"
              label="Artworks on Display"
              onChange={(e) => {
                setFilter({ ...filter, onDisplay: e.target.checked });
              }}
            />
            <Form.Check
              className="filter-switch"
              type="switch"
              label="Highlights"
              id="custom-switch-2"
              onChange={(e) => {
                setFilter({ ...filter, highlights: e.target.checked });
              }}
            />
          </Form>
        )}
      </Container>
      <Container className="page-nav-btn-container">
        <Button
          className="page-nav-btn"
          variant="outline-dark"
          onClick={() => {
            downOffset();
            if (currentPage > 1) setCurrentPage(currentPage - 1);
          }}
        >
          Previous page
        </Button>
        {response && response.length > 1 ? (
          <div>
            {`${currentPage} / ${Math.ceil(response.length / chunkSize)}`}
          </div>
        ) : null}
        <Button
          className="page-nav-btn"
          variant="outline-dark"
          onClick={() => {
            upOffset();
            if (response && currentPage < response.length / chunkSize)
              setCurrentPage(currentPage + 1);
          }}
        >
          Next page
        </Button>
      </Container>
      <p className="copyright-msg">
        Please note that due to copyright restrictions, not all images may be
        displayed.
      </p>
      {isLoading || bulkLoading ? (
        <Spinner variant="primary" />
      ) : (
        <Container className="department-container">
          {fetchedData &&
            fetchedData.map((item) => (
              <Card key={item.objectID} className="department-container-card">
                <Card.Img
                  variant="top"
                  src={
                    item.primaryImageSmall
                      ? item.primaryImageSmall
                      : '/assets/noPhoto.png'
                  }
                  className="department-container-img"
                />
                <Card.Body className="department-container-card-body">
                  <Card.Title className="department-container-title">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="department-container-text">
                    {item.artistDisplayName}
                    <br />
                    {item.objectDate}
                  </Card.Text>
                  <Button
                    variant="outline-secondary"
                    onClick={() => {
                      setPopUpBody(item);
                      setModalShow(true);
                    }}
                  >
                    More information
                  </Button>
                </Card.Body>
              </Card>
            ))}
        </Container>
      )}
    </>
  );
}

export default DepartmentExhibits;
