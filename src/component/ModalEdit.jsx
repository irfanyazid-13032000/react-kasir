import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState,useEffect } from 'react'
import { editStore } from '../slice/storeSlice';
import { useDispatch,useSelector } from 'react-redux';


export default function ModalEdit({showEdit,handleCloseEdit}) {
  const dispatch = useDispatch()
  const selectedStore = useSelector((state)=>state.stores.selectedStore)
  const [noSiup,setNosiup] = useState("")
  const [storeName,setStoreName] = useState("")
  const [address,setAddress] = useState("")
  const [phone,setPhone] = useState("")


  const handleSubmitEdit = (e) => {
  e.preventDefault()
  if (!validationInput()) {
    return
  }
  
  dispatch(editStore({
    id:selectedStore.id,
    noSiup:noSiup,
    storeName:storeName,
    address:address,
    phone:phone
  }))
  setStoreName("")
  setAddress("")
  setPhone("")
  handleCloseEdit()
  }

  useEffect(()=>{
    if (selectedStore != {}) {
      setNosiup(selectedStore.noSiup || "")
      setStoreName(selectedStore.storeName || "")
      setAddress(selectedStore.address || "")
      setPhone(selectedStore.phone || "")
    }
  },[setStoreName,selectedStore,dispatch])

  const validationInput = () => {
    if (storeName == "" || address == "" || phone == "") {
      alert("loh masih kosong ini")
      return false
    }
    return true
  }


  return (
    <div>
      


      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Change Something</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>No Siup</Form.Label>
              <Form.Control
                type="text"
                value={noSiup}
                onChange={(e)=>setNosiup(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>store name</Form.Label>
              <Form.Control  type="text"
                placeholder="store name"
                value={storeName}
                onChange={(e)=>setStoreName(e.target.value)}
                />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Address</Form.Label>
              <Form.Control  type="text"
                placeholder="address"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Phone</Form.Label>
              <Form.Control  type="text"
                placeholder="address"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmitEdit}>
            Change
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
