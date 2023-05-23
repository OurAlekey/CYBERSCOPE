import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Message } from "primereact/message";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { ProgressBar } from "primereact/progressbar";

export const QueAprender = () => {
  const history = useHistory();
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 20);
  }, [location]);

  const [estado, setEstado] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // const iniciarSesion = () => {
  //     const userService = new  UserService()

  //     userService.findByEmail(usr.username).then((user) => {
  //       cons
  //     })
  // }

  const retroceder = () => {
    history.push("/comenzar");
  };

  const cuantoSabes = () =>{
    if(
        estado
    ){
        history.push("/cuantosabes");
    }else{
        setSubmitted(true)
    }
  }

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
        <div className="col mt-4" style={{ textAlign: "center" }}>
          <ProgressBar value={20} showValue={false}  className="mt-2" />
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
          
            
              <h5 className="mt-5">¿Qué te gustaria aprender?</h5>
  </div>
      

          <Button
            type="button"
            onClick={() => setEstado(!estado)}
        
            iconPos="right"
            className={classNames({
                "p-invalid": submitted && !estado,
              },"p-button-secondary p-button-outlined")}
          >
            <img
              alt="logo"
              src="imgs/hardware.png"
              className="h-3rem ml-3"
            />

            <span className="px-3">Hardware</span>

            <i
              className={
                estado == true ? "pi pi-check  px-6" : "pi pi-times px-6"
              }
              style={{ fontSize: "20px" }}
            />
          </Button>

          <Button
            type="button"
            className=" p-button-secondary p-button-outlined"
            disabled={true}
          >
            <img
              alt="logo"
              src="imgs/software.png"
              className="h-3rem ml-3"
            />

            <span className="px-3">Software</span>

            <i
              className={
                false == true ? "pi pi-check  px-6" : "pi pi-times px-6"
              }
              style={{ fontSize: "20px" }}
            />
          </Button>
          <Button
        
            type="button"
            className=" p-button-secondary p-button-outlined"
            disabled={true}
          >
             <img
              alt="logo"
              src="imgs/logica.png"
              className="h-3rem ml-3"
            />

            <span className="px-3">Logicas</span>

            <i
              className={
                false == true ? "pi pi-check  px-7" : "pi pi-times px-7"
              }
              style={{ fontSize: "20px" }}
            />
            </Button>
          <Button
     
            type="button"
            className=" p-button-secondary p-button-outlined"
            disabled={true}
          >
               <img
              alt="logo"
              src="imgs/tecnologias.png"
              className="h-3rem ml-3"
            />

            <span className="px-3">Tecnologías</span>

            <i
              className={
                false == true ? "pi pi-check  px-5" : "pi pi-times px-5"
              }
              style={{ fontSize: "20px" }}
            />
            </Button>

            {submitted && !estado && (
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
            onClick={()=>cuantoSabes()}
          />
        </div>
      </div>
    </div>
  );
};
