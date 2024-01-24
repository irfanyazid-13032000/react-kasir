import { useEffect,useState } from "react"
import NavbarComponent from "../component/NavbarComponent"
import { useDispatch,useSelector } from "react-redux"
import { fetchStore,deleteStore,getByIdStore } from "../slice/storeSlice"
import ModalCreate from "../component/ModalCreate"
import ModalEdit from "../component/ModalEdit"


export default function Store() {
  const dispatch = useDispatch()
  const stores = useSelector((state)=>state.stores.data)

  const [show, setShow] = useState(false);
  const [showEdit,setShowEdit] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowEdit = () => setShowEdit(true);
  const handleCloseEdit = () => setShowEdit(false)


  useEffect(()=>{
    dispatch(fetchStore())
  },[dispatch])

  const editStore = (id) => {
    dispatch(getByIdStore(id))
    handleShowEdit()
  }




  return (
    <>
    <NavbarComponent/>
    <div className='container'>
      <h2>Data Store</h2>

      <ModalCreate show={show} handleShow={handleShow} handleClose={handleClose}/>

      <ModalEdit showEdit={showEdit} handleCloseEdit={handleCloseEdit}/>

      <table className="table">
        <thead>
        <tr>
          <th>id</th>
          <th>no siup</th>
          <th>store name</th>
          <th>address</th>
          <th>phone</th>
          <th style={{textAlign:"center"}}>action</th>
        </tr>
        </thead>
        <tbody>
          {stores.map((store)=>(
          <tr key={store.id}>
            <td>{store.id}</td>
            <td>{store.noSiup}</td>
            <td>{store.storeName}</td>
            <td>{store.address}</td>
            <td>{store.phone}</td>
            <th>
              <button className={(localStorage.getItem('role').trim() == '"ROLE_CUSTOMER"') ? "d-none" : "btn btn-warning"} onClick={()=>{editStore(store.id)}}>edit</button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button className={(localStorage.getItem('role').trim() == '"ROLE_CUSTOMER"') ? "d-none" : "btn btn-danger"} onClick={()=>{dispatch(deleteStore(store.id))}}>delete</button>
            </th>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}
