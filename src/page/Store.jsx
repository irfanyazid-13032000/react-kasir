import { useEffect,useState } from "react"
import NavbarComponent from "../component/NavbarComponent"
import { useDispatch,useSelector } from "react-redux"
import { fetchStore,deleteStore } from "../slice/storeSlice"
import ModalCreate from "../component/ModalCreate"


export default function Store() {
  const dispatch = useDispatch()
  const stores = useSelector((state)=>state.stores.data)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(()=>{
    dispatch(fetchStore())
  },[dispatch])

  return (
    <>
    <NavbarComponent/>
    <div className='container'>
      <h2>Data Store</h2>

      <ModalCreate show={show} handleShow={handleShow} handleClose={handleClose}/>

     


      <table className="table">
        <thead>
        <tr>
          <th>id</th>
          <th>no siup</th>
          <th>store name</th>
          <th>address</th>
          <th>phone</th>
          <th>action</th>
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
            <th><button className="btn btn-danger" onClick={()=>{dispatch(deleteStore(store.id))}}>delete</button></th>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}
