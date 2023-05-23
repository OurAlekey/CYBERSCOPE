import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Message } from "primereact/message";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { ProgressBar } from "primereact/progressbar";

export const CuantoSabes = () => {
  const history = useHistory();
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 20);
  }, [location]);

  const [estado, setEstado] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // const iniciarSesion = () => {
  //     const userService = new  UserService()

  //     userService.findByEmail(usr.username).then((user) => {
  //       cons
  //     })
  // }

  const retroceder = () => {
    history.push("/queaprender");
  };



  return (
    <div className="login-body">
      <div className="grid ">
        <div className="col-2 mt-4">
          <Button
            icon="pi pi-times"
            className="p-button-text p-button-secondary ml-5 "
            onClick={() => retroceder()}
          />
        </div>
        <div className="col mt-4 " style={{ textAlign: "center" }}>
          <ProgressBar value={40} showValue={false} className="mt-2" />
        </div>
        <div className="col-1 mt-4"></div>
      </div>

      <div className="login-wrapper">
        <div className="login-panel">
          <div className="flex align-items-center flex-column sm:flex-row">
        

              <img
                style={{
                  width: "120px",
                  height: "120px",
                }}
                src="imgs/queaprender.png"
                alt="CYBERSCOPE"
                className="mb-3"
              />
       
     
              <h5 className="mt-5">¿Cuanto sabes de Hardware?</h5>
           
          </div>

          <Button
            type="button"
            onClick={() => setEstado(1)}
        
            iconPos="right"
            className={classNames({
                "p-invalid": submitted && !estado,
              },"p-button-secondary p-button-outlined")}
          >
            <img
              alt="logo"
              src="imgs/recienempiezo.png"
              className="h-3rem ml-3"
            />
            <span style={{textAlign:"left"}}>Recien empiezo a aprender</span>
            <i
              className={
                estado == 1 ? "pi pi-check  px-2" : "pi pi-times px-2"
              }
              style={{ fontSize: "20px" }}
            />
          </Button>

          <Button
                  onClick={() => setEstado(2)}
            type="button"
            className=" p-button-secondary p-button-outlined"
          >
            <img
              alt="logo"
              src="imgs/conozcobasico.png"
              className="h-3rem ml-3"
            />

<span style={{textAlign:"left"}}>Conozco lo basico</span>
            <i
              className={
                estado == 2 ? "pi pi-check  px-2" : "pi pi-times px-2"
              }
              style={{ fontSize: "20px" }}
            />
          </Button>
          <Button
                onClick={() => setEstado(3)}
            type="button"
            className=" p-button-secondary p-button-outlined"
          
          >
             <img
              alt="logo"
              src="imgs/puedotecnologia.png"
              className="h-3rem ml-3"
            />
   <span style={{textAlign:"left"}}>Puedo trabajar con la tecnologia</span>

            <i
              className={
                estado == 3 ? "pi pi-check  px-2" : "pi pi-times px-2"
              }
              style={{ fontSize: "20px" }}
            />
            </Button>
          <Button
             onClick={() => setEstado(4)}
            type="button"
            className=" p-button-secondary p-button-outlined"
   
          >
               <img
              alt="logo"
              src="imgs/avanzado.png"
              className="h-3rem ml-3"
            />

<span style={{textAlign:"left"}}>Tengo un nivel avanzado</span>

            <i
              className={
                estado == 4 ? "pi pi-check  px-2" : "pi pi-times px-2"
              }
              style={{ fontSize: "20px" }}
            />
            </Button>

            {submitted && !estado  && (
            <Message
              severity="error"
              text="* Por favor seleccione una opción"
            />
          )}
        </div>
        <div className="login-footer">
          <Button
            style={{ minWidth: "210px" }}
            label="CONTINUAR"
            type="button"
            className=" p-button-secondary "
            onClick={()=> history.push("/queseaprende")}
          />
        </div>
      </div>
    </div>
  );
};
