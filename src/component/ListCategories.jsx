import { Col, ListGroup } from 'react-bootstrap'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories} from '../slice/categoriesSlice.jsx';




export default function ListCategories() {
  const dispatch = useDispatch();
  const categories = useSelector((state)=>state.categories.data);


  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  
  return (
    <Col md={2} mt="2">
      <h4>ini adalah list kategori</h4>
      <ListGroup>
      {categories && categories.map(category => (
         <ListGroup.Item key={category.id}>{category.nama}</ListGroup.Item>
      ))}
      </ListGroup>
    </Col>
  )
}
