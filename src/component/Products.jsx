// Product.js

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../slice/productsSlice.jsx';
import {Card,Button} from 'react-bootstrap'
import {numberFormat} from '../utils/numberFormat.jsx'


const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state)=>state.products.data);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
  // Render komponen sesuai kebutuhan dengan data dari Redux state
  return (
    <>
      {console.log(products)}
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
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      ))}
    </>
  );
};

export default Product;
