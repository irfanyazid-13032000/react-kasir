import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal,removeCart,updateCart,updateTotalShoppingFromModal } from '../slice/cartsSlice';
import { numberFormat } from '../utils/numberFormat';




export default function ModalCart({qtyState,setQtyState}) {
  const dispatch = useDispatch()
  const show = useSelector((state)=> state.carts.showModal)
  const selectedInModal = useSelector((state)=>state.carts.selectedInModal)
  // const totalQty = useSelector((state)=>state.carts.total_qty)
  

  const tutup = () => {
    dispatch(closeModal())
  }

  const remove = (id) => {
    dispatch(removeCart(id))
    dispatch(closeModal())
  }

  const increase = (qtyState) => {
    setQtyState({...qtyState, jumlah:qtyState.jumlah+1,total_harga:qtyState.product.harga * (qtyState.jumlah+1)})
  }

  const decrease = (qtyState) => {
    setQtyState({...qtyState, jumlah:qtyState.jumlah-1,total_harga:qtyState.product.harga * (qtyState.jumlah-1)})
  }

  const updateKeranjang = (product) => {
    dispatch(updateCart(product))
    // dispatch(setPriceBeforeChanged(product))
    dispatch(updateTotalShoppingFromModal(product))
    dispatch(closeModal())
  }

  return (
    <div>
      <Modal show={show} onHide={tutup} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedInModal.product && selectedInModal.product.nama} (Rp. {selectedInModal.product && numberFormat(selectedInModal.product.harga)})</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Total Harga : {qtyState.total_harga && numberFormat(qtyState.total_harga)}</h4>
          <p>jumlah : <Button variant="danger" onClick={()=>decrease(qtyState)}>-</Button> {qtyState.jumlah} <Button variant="primary" onClick={()=>increase(qtyState)}>+</Button> </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>{updateKeranjang(qtyState)}}>
            Save Changes
          </Button>
          <Button variant="danger" onClick={()=>{remove(qtyState.id)}}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
