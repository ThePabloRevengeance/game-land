import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";


export const Login = () => {
  let navigate = useNavigate()

  const {singIn, logIn} = useContext(GlobalContext)

  const [userData, setUserData] = useState({username: "", password: ""})

  const submitLogin = (e) => {
    console.log("Enviado: ", userData);
    e.preventDefault();

    singIn(userData)
  }

  const changeInput = (e) =>{
        
    setUserData({
        ...userData,
        [e.target.name]: e.target.value
    });
  }

  useEffect(() =>{
    if(logIn){
      navigate('/home')
    }
    
  }, [logIn])

  return (
    <div className="loginContainer">
      <div className="loginContainer-form">
        <form action="" onSubmit={submitLogin}>
          <label htmlFor="usuario">
            <span>Email</span>
            <input type="email" id="usuario" name="username" required onChange={changeInput} value={userData.user}/>
          </label>
          <label htmlFor="contra">
            <span>Contraseña</span>
            <input type="password" id="contra" name="password" required onChange={changeInput} value={userData.pass}/>
          </label>
          <button className="login--btn btn">Login</button>
        </form>
      </div>
      <div className="links">

      <Link to="/registration">Registrate</Link>
      <Link to="/home">Invitado</Link>
      </div>
    </div>
  );
}
