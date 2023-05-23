import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Message } from "primereact/message";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";

export const Comenzar = () => {
  const history = useHistory();

  const iniciarSesion = () => {
    history.push("/login");
  };

 const comenzarAhora = () => {
  history.push("/queaprender");
 }

  return (
    <div className="login-body">
      <div className="login-wrapper">
        <div className="login-panel">
        <img
            style={{
              width: "200px",
              height: "200px",
            }}
            src="imgs/logoLetras.jpg"
            alt="CYBERSCOPE"
            className="mb-3"
          />
          <h5 className="mb-1">¿Listo para descubrir?</h5>
          <h5 className="mt-1 mb-1">el maravilloso universo de la</h5>
          <h5 className="mt-1">tecnologia mientras de diviertes?</h5>
        </div>
        <div className="login-footer">
          <Button
            style={{
              width: "23vh",
            }}
            className=" p-button-secondary mr-2 mb-2"
            label="COMENZAR AHORA"
            onClick={()=>comenzarAhora()}
          />
          <Button
            style={{
              width: "23vh",
            }}
            className="p-button-outlined p-button-secondary mr-2 mb-2"
            label="YA TENGO UNA CUENTA"
            onClick={()=>iniciarSesion()}
          />
        </div>
      </div>
    </div>
  );
};
