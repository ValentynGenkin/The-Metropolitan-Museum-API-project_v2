import { useEffect, useState } from 'react';
import useFetch from '../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import { bulkFetch } from '../Functions/bulkFetch';

function DepartmentExhibits() {
  const [response, setResponse] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);
  const [chunkedID, setChunkedId] = useState(0);
  const [exhibitId, setExhibitId] = useState([]);

  const { id } = useParams();

  const url = `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${id}&q=cat`;
  const [data, error] = useFetch(url);

  useEffect(() => {
    data && setResponse(data.objectIDs);
  }, [data]);

  const chunkSize = 20;

  useEffect(() => {
    if (response) {
      const slicedExhibits = response.slice(chunkedID, chunkedID + chunkSize);
      setExhibitId(slicedExhibits);
    }
  }, [chunkedID, response]);

  useEffect(() => {
    exhibitId && bulkFetch(exhibitId, setFetchedData);
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
      <button
        href="#"
        type="button"
        style={{ width: '50px', height: '50px' }}
        onClick={() => {
          upOffset();
          console.log(exhibitId);
        }}
      >
        +
      </button>
      <button
        type="button"
        style={{ width: '50px', height: '50px' }}
        onClick={() => {
          downOffset();
        }}
      >
        -
      </button>
      <div>{exhibitId}</div>
    </>
  );
}

export default DepartmentExhibits;
