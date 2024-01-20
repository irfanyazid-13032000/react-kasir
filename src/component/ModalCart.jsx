import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector,useDispatch } from 'react-redux';
import { closeModal } from '../slice/cartsSlice';



export default function ModalCart() {
  const dispatch = useDispatch()
  const show = useSelector((state)=>state.carts.showModal)

  const tutup = () => {
    dispatch(closeModal())
  }

  return (
    <div>
      <Modal show={show} onHide={tutup} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
