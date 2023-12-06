import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PopUp(props) {
  const { exhibit } = props;
  return (
    <Modal {...props} fullscreen={true}>
      <Modal.Body style={{ margin: '0 auto' }}>
        <img
          src={exhibit.primaryImage}
          alt="img"
          style={{
            height: '100%',
            width: 'auto',
            borderRadius: '5px',
          }}
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
