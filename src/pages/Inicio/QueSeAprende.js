import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";

export const QueSeAprende = () => {
  const history = useHistory();
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 20);
  }, [location]);

  const retroceder = () => {
    history.push("/cuantosabes");
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
          <ProgressBar value={60} showValue={false} className="mt-2"  />
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
                <li>
                  <div
                    className=" ml-3 mr-3"
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img alt="logo" src="imgs/libro.png" className="h-4rem " />
                  </div>
                  <div className="event-content">
                    <span className="event-title">
                      Aprende de forma autónoma y personalizada:{" "}
                    </span>
                    <span>
                      Tendrás la oportunidad de explorar y aprender a tu propio
                      ritmo, según tus intereses. El contenido se adapta a tus
                      necesidades individuales, permitiéndote descubrir temas de
                      tecnología y computación de manera divertida y flexible.
                    </span>
                  </div>
                </li>

                <li>
                  <div
                    className=" ml-3 mr-3"
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      alt="logo"
                      src="imgs/cerebro.png"
                      className="h-4rem "
                    />
                  </div>
                  <div className="event-content">
                    <span className="event-title">
                      Desarrolla habilidades tecnológicas prácticas:{" "}
                    </span>
                    <span>
                      Podrás adquirir habilidades relevantes en el campo de la
                      tecnología. Aprenderás conceptos fundamentales,
                      descubrirás herramientas y software útiles, y
                      desarrollarás habilidades que te serán valiosas en tu
                      educación y en futuras oportunidades.
                    </span>
                  </div>
                </li>
                <li className="blue">
                  <div
                    className=" ml-3 mr-3"
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img alt="logo" src="imgs/foco.png" className="h-4rem " />
                  </div>
                  <div className="event-content">
                    <span className="event-title">
                      Estimula tu curiosidad y creatividad:{" "}
                    </span>
                    <span>
                      invitamos a explorar y experimentar con la tecnología,
                      inspirándote a través de actividades interactivas,
                      desafíos y proyectos. Desarrollarás tu curiosidad y
                      creatividad, descubriendo nuevas formas de utilizar la
                      tecnología para crear soluciones innovadoras.
                    </span>
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
            className=" p-button-outlined p-button-secondary "
            onClick={() => history.push("/dondeempezar")}
          />
        </div>
      </div>
    </div>
  );
};
