import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Message } from "primereact/message";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import AuthService from "../service/Auth/AuthService";
import { Toolbar } from "primereact/toolbar";
import { Tooltip } from "chart.js";
import UserService from "../service/AppService/UserService";
export const Login = () => {
  const history = useHistory();
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  let emptyUsr = {
    username: null,
    password: null,
  };

  const [usr, setUsr] = useState(emptyUsr);
  const [submitted, setSubmitted] = useState(false);
  const [estado, setEstado] = useState(false);

  const iniciarSesion = () => {
    setSubmitted(true);
    const authService = new AuthService();

    authService.login(usr).then((response) => {
      if (response === 403) {
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
        setEstado(false);
      } else if (response.status === 200) {
        localStorage.setItem("token", JSON.stringify(response.data));
        authService
          .getUser(usr.username, JSON.stringify(response.data))
          .then((response) => {
            localStorage.setItem("user", JSON.stringify(response));
            history.push("/");
            history.go();
            //  window.location.reload();
            setEstado(true);
            setSubmitted(false);
          });
      }
    });
  };

  // const iniciarSesion = () => {
  //     const userService = new  UserService()

  //     userService.findByEmail(usr.username).then((user) => {
  //       cons
  //     })
  // }
  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _usr = { ...usr };
    _usr[`${name}`] = val;
    setUsr(_usr);
  };

  const handleLogin = () => {
    iniciarSesion();
  };

  const retroceder = () => {
    history.push("/comenzar");
  }

  return (
    <div className="login-body">
      <div className="grid ">
        <div className="col-1 mt-4">
          {" "}
          <Button
            icon="pi pi-times"
            className="p-button-text p-button-secondary ml-5 "
            onClick={()=>retroceder()}
          />
        </div>
        <div className="col mt-4" style={{ textAlign: "center" }}>
          <h4>Ingrese tus datos</h4>
        </div>
        <div className="col-1 mt-4"></div>
      </div>

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
          <InputText
            placeholder="Correo"
            value={usr.username || ""}
            onChange={(e) => onInputChange(e, "username")}
            required
            className={classNames({
              "p-invalid": submitted && !usr.username,
            },"mb-3")}
          />

          <InputText
            placeholder="Contraseña"
            type="password"
            value={usr.password || ""}
            onChange={(e) => onInputChange(e, "password")}
            required
            className={classNames({
              "p-invalid": submitted && !usr.password,
            },"mb-3")}
          />
          <Button
            label="INGRESAR"
            type="button"
            onClick={handleLogin}
            className=" p-button-secondary p-button-rounded"
          />
          <Button
            label="OLVIDÓ LA CONTRASEÑA?"
            type="button"
            onClick={handleLogin}
            className="p-button-text p-button-secondary p-button-rounded"
          />
          {submitted && !estado && (
            <Message
              severity="error"
              text="* Por favor revisa tu usuario y contraseña."
            />
          )}
        </div>
        <div className="login-footer">
          <div className="grid" style={{textAlign:"center"}}>
            <div className="col-12">   <Button
            label="GOOGLE"
            type="button"
            icon="pi pi-google"
            className="p-button-outlined p-button-secondary "
          /></div>
            <div className="col-12">
            <h5>
            Al registrarte en CyberScope ceptas nuestros Terminos y Politicas de privacidad
          </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
