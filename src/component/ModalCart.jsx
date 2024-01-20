import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../slice/cartsSlice';
import { numberFormat } from '../utils/numberFormat';



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
          <Modal.Title>{selectedInModal.product && selectedInModal.product.nama} (Rp. {selectedInModal.product && numberFormat(selectedInModal.product.harga)})</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Total Harga : {selectedInModal.total_harga && numberFormat(selectedInModal.total_harga)}</h4>
          <p>jumlah : <Button variant="danger">-</Button>{selectedInModal.jumlah && selectedInModal.jumlah} <Button variant="primary">+</Button> </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
