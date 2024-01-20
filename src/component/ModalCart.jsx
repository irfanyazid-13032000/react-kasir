import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../slice/cartsSlice';



export default function ModalCart() {
  const dispatch = useDispatch()
  const show = useSelector((state)=> state.carts.showModal)
  const selectedInModal = useSelector((state)=>state.carts.selectedInModal)

  const tutup = () => {
    dispatch(closeModal())
  }

  return (
    <div>
      <Modal show={show} onHide={tutup} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedInModal.product && selectedInModal.product.nama}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
