import axios from 'axios';
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
});

// const [errors, setErrors] = useState({});
// const [valid, setValid] = useState(true);
const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    // let isValid = true;
    // let validationErrors = {};

    // if (formData.username === "" || formData.username === null) {
    //     isValid = false;
    //     validationErrors.username = "username harus diisi";
    // }

    // if (formData.password === "" || formData.password === null) {
    //     isValid = false;
    //     validationErrors.password = "Kata sandi harus diisi";
    // }

    console.log(formData.username);
    console.log(formData.password);

    axios.post('http://localhost:8088/api/auth/login',{
        username:formData.username,
        password:formData.password
    },{
        headers: {
          'Content-Type': 'application/json'
        }
    }).then(response => {
        localStorage.setItem('token', JSON.stringify(response.data.data.token));
        navigate('/cashier');
        console.log("hore berhasil",response.data.data.token);
    }).catch(err=>{
        console.log("error terus kamu ",err);
    })



    


};

const handleShowPassword = () => {
  let input = document.getElementById("setPassword");
  let icon = document.getElementById("passwordToggleIcon");

  if (input.type === "password") {
      input.type = "text";
      icon.innerHTML = '<i class="bi bi-eye-fill"></i>';
  } else {
      input.type = "password";
      icon.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
  }
};
  
  
  

  return (
    <div className="bg-lr">
        <div className="container container-lr">
            <div className="col-md-8">
                <form className="border form-lr" onSubmit={handleSubmit}>
                    <div className="row container-fluid justify-content-center">
                        <div className="col-md-4 d-flex">
                            <img src="public/images/Login.svg" alt="login form" className="img-fluid" />
                        </div>
                        <div className='col-md-7 p-4'>
                            <h4 className="mb-3">Masuk</h4>
                            <div className="row">
                                <div className="mb-2 col-md-12">
                                    <label className="mb-2">username<span className="text-danger"> *</span></label>
                                    <input type="username" name="username" className="form-control" placeholder="Masukkan username anda" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                                </div>
                                <div className="mb-1 col-md-12">
                                    <label className="mb-2">Kata sandi<span className="text-danger"> *</span></label>
                                    <div className="input-group">
                                        <input type="password" id="setPassword" name="password" className="form-control" placeholder="Masukkan kata sandi anda" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                                        <div className="input-group-append">
                                            <span className="input-group-text ms-2 eye-icon" onClick={handleShowPassword} id='passwordToggleIcon'>
                                                <i className="bi bi-eye-slash-fill"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-check mt-2">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck" />
                                        <label className="form-check-label" htmlFor="exampleCheck">Ingat saya</label>
                                    </div>
                                </div>
                                <p className="text-secondary mb-3">Tidak punya akun? <Link to="/register" className="lr-link">Daftar akun</Link></p>
                                <div className="col-md-12">
                                    <button className="btn float-end button-lr" onClick={handleSubmit}>Masuk</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
);
}



export default Login
