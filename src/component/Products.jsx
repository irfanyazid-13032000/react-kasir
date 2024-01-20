// Product.js

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from '../slice/productsSlice.jsx';
import {Card,Button} from 'react-bootstrap'
import {numberFormat} from '../utils/numberFormat.jsx'
import { fetchCarts,addToCart,updateTotalShopping } from '../slice/cartsSlice.jsx';
import ModalCart from './ModalCart.jsx';



const Product = ({qtyState,setQtyState}) => {
  const dispatch = useDispatch();
  const products = useSelector((state)=>state.products.data);
  
  // const carts = useSelector((state)=>state.carts.data)

  useEffect(() => {
    
    dispatch(fetchCarts())
  }, [dispatch]);
  

  const addToCartAndSumTotalPrice = (product) => {
    dispatch(addToCart(product))
    dispatch(updateTotalShopping(product))
  }

  return (
    <>
    <ModalCart qtyState={qtyState} setQtyState={setQtyState}/>
      <h4>daftar product</h4>
      <hr/>
      {products && products.map(product => (
        <Card style={{ width: '18rem' }} key={product.id}>
        <Card.Img variant="top" src={product.gambar} />
        <Card.Body>
          <Card.Title >{product.nama}</Card.Title>
          <Card.Text>
            Rp. {numberFormat(product.harga)}
          </Card.Text>
          <Button variant="primary" onClick={()=>{addToCartAndSumTotalPrice(product)}}>Add to Cart</Button>
        </Card.Body>
      </Card>
      ))}


    </>
  );
};

export default Product;
