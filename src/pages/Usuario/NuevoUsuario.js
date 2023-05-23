
import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import UserService from "../../service/AppService/UserService";
import AuthService from "../../service/Auth/AuthService";
export const NuevoUsuario = () =>{
  const history = useHistory();
  let location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 30);
      }, [location]);
    
let usuarioLet ={
    id: 0,
    correo: "",
    constrasena: "",
    nombre: "",
    apellido:"",
    nombreUsuario: "",
    edad: 0,
    idDepartamento: 1,
}
let departamentos = [
    {
        label:"Solola",
        value :1
    },
    {
        label:"Guatemala",
        value :2
    }
    ,
    {
        label:"Alta Verapaz",
        value :3
    }
    ,
    {
        label:"Chimaltenango",
        value :5
    }
    ,
    {
        label:"Chiquimula",
        value :6
    }
    ,
    {
        label:"Izabal",
        value :7
    }
]


const [usuario,setUsuario] = useState(usuarioLet)
  

const registrar = () =>{
    const authService = new AuthService();
    const userService = new UserService()
    userService.save(usuario).then((response)=>{
       if(response?.status == 201){
          var user = {
            username: usuario.correo,
            password: usuario.constrasena,
          }
          authService.login(user).then((res)=>{
            if(res.status== 200){
              localStorage.setItem("token", JSON.stringify(res.data));
              authService.getUser(user.username,JSON.stringify(res.data)).then((rest)=>{
                localStorage.setItem("user", JSON.stringify(rest));
                history.push("/");
                history.go()

              })
            }
          })

       }else{

       }
      
    })
}

return (

        <div className="exception-body error" style={{ background: "#ffffff" }}>
 <div className="grid ">
        <div className="col-2 mt-4">
          <Button
            icon="pi pi-times"
            className="p-button-text p-button-secondary ml-5 "
            onClick={() =>  history.push("/inicio")}
          />
        </div>
        <div className="col mt-4" style={{ textAlign: "center" }}>
          <h2>Ingresa tus datos</h2>
        </div>
        <div className="col-1 mt-4"></div>
      </div>

      
      <div className="exception-wrapper">
        <div className="exception-content" style={{padding:"15vw"}}  >
      
        <div style={{ alignContent: "center", textAlign: "center" }}>
            <img
              style={{
                width: "120px",
                height: "120px",
              }}
              src="imgs/queaprender.png"
              alt="CYBERSCOPE"
            />
            <h5>Vamos a crearte un usuario</h5>
          </div>
          <div className="grid p-fluid">
            <div className="col-12 lg:col-6 md:col-6">
                <label>Nombre</label>
              <InputText
              value={usuario.nombre}
              onChange={(e)=>setUsuario({...usuario,
            nombre:e.target.value})}
            placeholder="nombre"
              />
            </div>
            <div className="col-12 lg:col-6 md:col-6">
            <label>apellido</label>
              <InputText
                value={usuario.apellido}
                onChange={(e)=>setUsuario({...usuario,
                    apellido:e.target.value})}
              placeholder="apellido"/>
            </div>
          </div>
          <div className="grid p-fluid">
          <div className="col-12 lg:col-6 md:col-6">
            <label>Usuario</label>
              <InputText
                 value={usuario.nombreUsuario}
                 onChange={(e)=>setUsuario({...usuario,
                    nombreUsuario:e.target.value})}

              placeholder="Usuario"
              />
            </div>
           
            <div className="col-12 lg:col-6 md:col-6">
            <label>Edad</label>
              <InputText
                value={usuario.edad}
                onChange={(e)=>setUsuario({...usuario,
                    edad:e.target.value})}
              placeholder="Edad"
              type="number"
              />
            </div>
          </div>
          <div className="grid p-fluid">
          <div className="col-12 lg:col-6 md:col-6">
            <label>Correo</label>
              <InputText
             value={usuario.correo}
              onChange={(e)=>setUsuario({...usuario,
                correo:e.target.value})}
            placeholder="Correo"
            type="email"
              />
            </div>
            <div className="col-12 lg:col-6 md:col-6">

            <label>Departamento</label>
              <Dropdown
              options={departamentos}
              value={usuario.idDepartamento}
                onChange={(e)=>setUsuario({...usuario,
                    idDepartamento:e.target.value})}
              />
            </div>
          
            
          </div>
          <div className="grid p-fluid">
          
            <div className="col-12 ">
            <label>Contraseña</label>
              <InputText
                 value={usuario.constrasena}
                 onChange={(e)=>setUsuario({...usuario,
                    constrasena:e.target.value})}

                    type="password"
                    placeholder="***********"
              />
            </div>
            
          </div>
        </div>
  
        
         
        </div>

        <div className="exception-footer" style={{textAlign:"center"}}>
            
          <Button
            style={{ minWidth: "150px",
         boxShadow: "0px 2px 4px #D9D9D9",
            border: "1px solid #D9D9D9",
            padding: "10px",
            borderRadius: "15px" }}
            label="CREAR"
            type="button"
            className=" p-button-secondary p-button-text"
          onClick={() => registrar()}
          />
          <p>
          Al registrarte en CyberScope, aceptas nuestros Términos y Política de Privacidad.
          </p>
        </div>
            </div>
    )
}