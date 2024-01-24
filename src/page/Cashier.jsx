import {useState} from 'react'
import withTokenValidation from '../utils/withTokenValidation'

import NavbarComponent from "../component/NavbarComponent"
import { Col, Container, Row } from "react-bootstrap"
import Categories from "../component/Categories"
import Keranjang from "../component/Keranjang"
import Products from "../component/Products"

const  Cashier = () => {
  const [qtyState,setQtyState] = useState(0)
  return (
    <div>
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
    </div>
  )
}

export default withTokenValidation(Cashier)