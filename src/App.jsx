// import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarComponent from './component/NavbarComponent'
import Categories from './component/Categories'
import Keranjang from './component/Keranjang'
import Products from './component/Products'

function App() {

  return (
    <>
    <NavbarComponent/>
    <div className="mt-2">
      <Container fluid>
        <Row>
          <Categories/>
            <Col>
              
              <Row>
                <Products/>
              </Row>
            </Col>
          <Keranjang/>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default App
