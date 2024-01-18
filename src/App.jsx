// import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarComponent from './component/NavbarComponent'
import ListCategories from './component/ListCategories'
import Hasil from './component/Hasil'
import Products from './component/Products'

function App() {

  return (
    <>
    <NavbarComponent/>
    <div className="mt-2">
      <Container fluid>
        <Row>
          <ListCategories/>
            <Col>
              
              <Row>
                <Products/>
              </Row>
            </Col>
          <Hasil/>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default App
