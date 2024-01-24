import { Col, ListGroup,Row,Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { numberFormat } from '../utils/numberFormat'
import { openModal,setPriceBeforeChanged,fetchCarts,fetchTotalHarga } from '../slice/cartsSlice'
import { useEffect } from 'react'

export default function Keranjang({setQtyState}) {
  const dispatch = useDispatch()
  const carts = useSelector((state)=>state.carts.data)
  const total_shopping = useSelector((state)=>state.carts.total_shopping)


  const bukaModalDanSetHarga = (cart) => {
    dispatch(openModal(cart))
    dispatch(setPriceBeforeChanged(cart))
    setQtyState(cart)
  }

  useEffect(() => {
    dispatch(fetchTotalHarga())
    dispatch(fetchCarts())
  }, [dispatch]);


  return (
    <Col md={3} mt="2">
      <h4>Keranjang for {localStorage.getItem('role')}</h4>
      <hr />
      <ListGroup as="ul">
        {carts.map((cart)=>(
      <ListGroup.Item as="li" key={cart.id} onClick={()=>{bukaModalDanSetHarga(cart)}}>
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
        <ListGroup.Item>
          <Row>
            <Col xs="2">
            <h4>total</h4>
            </Col>
            <Col>
            
            </Col>
            <Col>
            <h3>Rp. {numberFormat(total_shopping)}</h3>
            </Col>
          </Row>
        </ListGroup.Item>
      
    </ListGroup>
    </Col>
  )
}
