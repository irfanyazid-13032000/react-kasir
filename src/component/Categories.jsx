import { Col, ListGroup } from 'react-bootstrap'
import { fetchProducts } from '../slice/productsSlice.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories} from '../slice/categoriesSlice.jsx';
import { selectCategory } from "../slice/categoriesSlice.jsx";




export default function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state)=>state.categories.data);
  const kategoriDipilih = useSelector((state)=>state.categories.selectedCategory);


  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts())
    // console.log(kategoriDipilih);
  }, [dispatch]);

  const pilihCategory = (namaCategory) => {
    console.log(kategoriDipilih);
    dispatch(selectCategory(namaCategory))
    dispatch(fetchProducts(namaCategory))
  }

  
  return (
    <Col md={2} mt="2">
      <h4>ini adalah list kategori</h4>
      <ListGroup>
      {categories && categories.map(category => (
         <ListGroup.Item key={category.id} onClick={()=>{pilihCategory(category.nama)}} className={kategoriDipilih == category.nama ? "active" : ""}>{category.nama}</ListGroup.Item>
      ))}
      </ListGroup>
    </Col>
  )
}
