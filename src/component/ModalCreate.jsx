import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react'
import { addStore } from '../slice/storeSlice';
import { useDispatch } from 'react-redux';
import { generateRandomString } from '../utils/randomString';


export default function ModalCreate({show,handleShow,handleClose}) {
  const dispatch = useDispatch()
  const [noSiup,setNosiup] = useState(generateRandomString(10))
  const [storeName,setStoreName] = useState("")
  const [address,setAddress] = useState("")
  const [phone,setPhone] = useState("")


  const handleSubmit = (e) => {
  e.preventDefault()
  if (!validationInput()) {
    return
  }
  
  dispatch(addStore({
    noSiup:noSiup,
    storeName:storeName,
    address:address,
    phone:phone
  }))
  setNosiup(generateRandomString(10))
  setStoreName("")
  setAddress("")
  setPhone("")
  handleClose()
  }

  const validationInput = () => {
    if (storeName == "" || address == "" || phone == "") {
      alert("loh masih kosong ini")
      return false
    }
    return true
  }


  return (
    <div>
       <Button variant="primary" onClick={handleShow}>
        Create
      </Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Something</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>No Siup</Form.Label>
              <Form.Control
                type="text"
                value={noSiup}
                onChange={(e)=>setNosiup(e.target.value)}
                autoFocus
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
            <Button variant="primary" type="submit" onClick={handleSubmit}>
            Save
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
