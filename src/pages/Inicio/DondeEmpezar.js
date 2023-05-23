import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { Button } from "primereact/button";

import { ProgressBar } from "primereact/progressbar";

export const DondeEmpezar = () => {
  const history = useHistory();
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 20);
  }, [location]);

  const retroceder = () => {
    history.push("/queseaprende");
  };

  let estiloLista = {
    li: {
      boxShadow: "0px 2px 4px #D9D9D9",
      border: "1px solid #D9D9D9",
      padding: "20px",
      borderRadius: "24px",
    },
  };

  return (
    <div className="exception-body error" style={{ background: "#ffffff" }}>
      <div className="grid ">
        <div className="col-2 mt-4">
          <Button
            icon="pi pi-times"
            className="p-button-text p-button-secondary ml-5 "
            onClick={() => retroceder()}
          />
        </div>
        <div className="col mt-4" style={{ textAlign: "center" }}>
          <ProgressBar value={80} showValue={false} className="mt-2" />
        </div>
        <div className="col-1 mt-4"></div>
      </div>

      <div className="exception-wrapper">
        <div className="exception-content" style={{ padding: "10vw" }}>
          <div>
            <h5
              className=" mr-4 ml-4"
              style={{ textAlign: "center", padding: "5vw" }}
            >
              ¡Esto es todo lo que podrás lograr acá!
            </h5>
            <div className=" timeline " style={{ textAlign: "left" }}>
              <ul>
                <li style={estiloLista.li}>
                  <div
                    className=" ml-3 mr-3 "
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img alt="logo" src="imgs/nave.jpg" className="h-4rem " />
                  </div>
                  <div className="event-content">
                    <span className="event-title">
                      ¿Aprendemos sobre hardware por primera vez?
                    </span>
                    <span>Desde un incio</span>
                  </div>
                </li>

                <li style={estiloLista.li}>
                  <div
                    className=" ml-3 mr-3 "
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img alt="logo" src="imgs/nave1.jpg" className="h-4rem " />
                  </div>
                  <div className="event-content">
                    <span className="event-title">
                      ¿Ya sabes algo sobre hardware?
                    </span>
                    <span>Responde unas preguntas para asignarne un nivel</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="exception-footer">
          <Button
            style={{ minWidth: "210px" }}
            label="CONTINUAR"
            type="button"
            className=" p-button-secondary "
            onClick={() => history.push("/preguntaprueba")}
          />
        </div>
      </div>
    </div>
  );
};
