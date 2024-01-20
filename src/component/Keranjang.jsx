import { Col, ListGroup,Row,Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { numberFormat } from '../utils/numberFormat'

export default function Keranjang() {
  const carts = useSelector((state)=>state.carts.data)
  return (
    <Col md={3} mt="2">
      <h4>Keranjang</h4>
      <hr />
      <ListGroup as="ul">
        {carts.map((cart)=>(
      <ListGroup.Item as="li" key={cart.id}>
        <Row>
          <Col xs="2">
            <h4>
          <Badge pill bg="danger">
            {cart.jumlah}
          </Badge>
            </h4>
          </Col>
          <Col>
          <h5>{cart.product.nama}</h5>
          <p>Rp. {numberFormat(cart.product.harga)}</p>
          </Col>
          <Col>
          <strong className="float-right"><h5>Rp. {numberFormat(cart.total_harga)}</h5></strong>
          </Col>
        </Row>
      </ListGroup.Item>
        ))}
      
    </ListGroup>
    </Col>
  )
}
