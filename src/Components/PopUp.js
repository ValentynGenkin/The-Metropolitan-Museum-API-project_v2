import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PopUp(props) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const { exhibit } = props;
  return (
    <Modal {...props} fullscreen={true}>
      <Modal.Body style={{ margin: '0 auto' }}>
        {!isImageLoaded && <Spinner />}
        <img
          src={exhibit.primaryImage}
          alt={exhibit.title}
          style={{
            height: '100%',
            width: 'auto',
            maxWidth: '100%',
            borderRadius: '5px',
            display: isImageLoaded ? 'inline' : 'none',
          }}
          onLoad={() => {
            handleImageLoad();
          }}
          onError={() => {}}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopUp;
