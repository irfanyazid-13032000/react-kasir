// import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarComponent from './component/NavbarComponent'
import Categories from './component/Categories'
import Keranjang from './component/Keranjang'
import Products from './component/Products'
import {useState} from 'react'

function App() {

  const [qtyState,setQtyState] = useState(0)
  
  return (
    <>
    <NavbarComponent/>
    <div className="mt-2">
      <Container fluid>
        <Row>
          <Categories/>
            <Col>
              <Row>
                <Products qtyState={qtyState} setQtyState={setQtyState}/>
              </Row>
            </Col>
          <Keranjang setQtyState={setQtyState}/>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default App
