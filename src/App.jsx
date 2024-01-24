import Cashier from './page/Cashier'
import Login from './component/Login'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Store from './page/Store';

function App() {

  
  
  return (
   <BrowserRouter>
   <main>
    <Routes>
      <Route path="/cashier" element={<Cashier/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/store" element={<Store/>}/>
    </Routes>
   </main>
   </BrowserRouter>
  )
}

export default App
