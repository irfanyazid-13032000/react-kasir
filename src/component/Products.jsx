// Product.js

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../slice/productsSlice.jsx';
import {Card,Button} from 'react-bootstrap'
import {numberFormat} from '../utils/numberFormat.jsx'
import { fetchCarts,addToCart } from '../slice/cartsSlice.jsx';


const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state)=>state.products.data);
  const carts = useSelector((state)=>state.carts.data)

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCarts())
  }, [dispatch]);
  
  // Render komponen sesuai kebutuhan dengan data dari Redux state
  return (
    <>
      {/* {console.log(products)} */}
      <h4>daftar product</h4>
      <hr/>
      {products && products.map(product => (
        <Card style={{ width: '18rem' }} key={product.width}>
        <Card.Img variant="top" src={product.gambar} />
        <Card.Body>
          <Card.Title >{product.nama}</Card.Title>
          <Card.Text>
            Rp. {numberFormat(product.harga)}
          </Card.Text>
          <Button variant="primary" onClick={()=>{dispatch(addToCart(product))}}>Add to Cart</Button>
        </Card.Body>
      </Card>
      ))}


      <ul>
        {carts && carts.map(cart => (
          <li key={cart.id}>{cart.jumlah}</li>
        ))}
      </ul>

    </>
  );
};

export default Product;
