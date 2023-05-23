import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Message } from "primereact/message";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import classNames from "classnames";
import useAuth from "../auth/useAuth";
import Api from "../Api";

export const Login = () => {
  const history = useHistory();
  let location = useLocation();
  const auth = useAuth();
  const previusObjectURL = location.state?.from;

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

  const iniciarSesion = async () => {
    const api = new Api();
    setSubmitted(true);
    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usr),
      };
      let res = await fetch(api.baseUrl() + "/auth/authenticate", config);
      let json = await res.json();
      if (res.status === 200) {
        setEstado(true);
        auth.login(json.jwt);
        //obtenemos datos del usuario
        let config = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${json.jwt}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        };

        let res = await fetch(
          api.baseUrl() + "/appusuario/" + usr.username,
          config
        );
        let usuario = await res.json();
        auth.login(json.jwt, usuario);
        history.push(previusObjectURL || "/");
      } else if (res.status === 403) {
        setEstado(false);
      }
    } catch (err) {}
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _usr = { ...usr };
    _usr[`${name}`] = val;
    setUsr(_usr);
  };

  const handleLogin = () => {
    iniciarSesion();
  };

  return (
    <div className="login-body">
      <div className="login-wrapper">
        <div className="login-panel">
          <img
            src="assets/layout/images/logo-dark.svg"
            className="logo"
            alt="diamond-layout"
          />
          <div className="card">
            <form className="login-form">
              <h2>Iniciar Sesión</h2>
              <p>
                ¿Ya tienes una cuenta? <a href="/">Solicite una</a>
              </p>

              {submitted && !usr.username && (
                <Message
                  severity="error"
                  text="Se requiere nombre de usuario"
                />
              )}
              <InputText
                placeholder="Usuario"
                value={usr.username || ""}
                onChange={(e) => onInputChange(e, "username")}
                required
                className={classNames({
                  "p-invalid": submitted && !usr.username,
                })}
              />

              {submitted && !usr.password && (
                <Message
                  severity="error"
                  text="Se requiere contraseña de usuario"
                />
              )}
              <Password
                placeholder="Contraseña"
                value={usr.password || ""}
                onChange={(e) => onInputChange(e, "password")}
                required
                className={classNames({
                  "p-invalid": submitted && !usr.password,
                })}
              />

              <Button
                onClick={handleLogin}
                label="ACCEDER"
                type="button"
                className={classNames({
                  "p-invalid": submitted && !estado,
                })}
              ></Button>
              <br />
              {submitted && !estado && (
                <Message
                  severity="error"
                  text="* Por favor revisa tu usuario y contraseña. Los campos son
                sensibles a mayúsculas y minúsculas."
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
