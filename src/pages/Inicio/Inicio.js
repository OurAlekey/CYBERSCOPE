import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Message } from "primereact/message";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";


export const Inicio = () => {
  const history = useHistory();
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  const iniciarSesion = () =>{
    history.push("/comenzar");
  }

  const handleLogin = () => {
    iniciarSesion();
  };

  return (
    <div className="login-body">
      <div className="login-wrapper">
        <div className="login-panel">
          <img
            style={{
              width: "200px",
              height: "200px",
            }}
            src="imgs/inicio.png"
            alt="CYBERSCOPE"
          />
          <h5 className="mb-1">
            !Hola! Soy scopy.
           
          </h5>
          <h5 className="mt-1">
          ¿Comenzamos?
          </h5>

     
        
        </div>
        <div className="login-footer">
         
        <Button
            style={{
                width: "20vh",
            }}
            className="p-button-outlined p-button-info mr-2 mb-2" 

            label="CONTINUAR"
            onClick={handleLogin}
       
          />
        </div>
      </div>
    </div>
  );
};
