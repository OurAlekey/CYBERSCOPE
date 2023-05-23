import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { Button } from "primereact/button";

import { ProgressBar } from "primereact/progressbar";
import { Dialog } from "primereact/dialog";

export const PreguntaPrueba = () => {
  const history = useHistory();
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 20);
  }, [location]);

  const retroceder = () => {
    history.push("/queaprender");
  };

  let estilodiv = {
    div: {
      width: "120px",
      height: "120px",
      position: "relative",
    },
    imagen: {
      maxWidth: "100%",
      maxHeight: " 100%",
      position: "absolute",
      top: " 50%",
      left: "50%",
      transform: " translate(-50%, -50%)",
    },
    borderBt: {
      boxShadow: "0px 2px 4px #D9D9D9",
      border: "1px solid #D9D9D9",
      padding: "20px",
      borderRadius: "24px",
    },
  };

  let preguntas = [
    "¿Cuál de estos es un CPU?",
    "¿Cuál de estos es un CASE?",
    "¿Cuál de estos son los audifonos?",
    "¿Cuál de estos es una MEMORIA RAM?",
  ];

  const [imagenes, setImagenes] = useState([
    "cpu.png",
    "case.png",
    "audifono.jpg",
    "ram.png",
  ]);

  const [correcto, setCorrecto] = useState("nombre");
  const [indice, setIndice] = useState(0);
  const [nombreCorrecto, setNombreCorrecto] = useState("");
  const [seleccion, setSeleccion] = useState(false);
  const [alerta, setAlerta] = useState(false);
  const [respuestaCorrecta, setRespuestaCorrecta] = useState(false);
  const [correctas, setCorrectas] = useState(0);
  const [indicePregunta, setIndicePregunta] = useState(0);
  const [nombre, setNombre] = useState({ nombre: "", descripcion: "" });
  const [informacion,setInformacion] = useState(false);
  function cambiarOrdenImagenes() {
    const imagenesAleatorias = [];

    while (imagenesAleatorias.length < 4) {
      const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
      if (!imagenesAleatorias.includes(indiceAleatorio)) {
        imagenesAleatorias.push(indiceAleatorio);
      }
    }
    const imagenesSeleccionadas = imagenesAleatorias.map(
      (indice) => imagenes[indice]
    );
    setImagenes(imagenesSeleccionadas);
  }

  useEffect(() => {
    switch (indice) {
      case 0:
        break;
      case 1:
        setSeleccion(true);
        setNombreCorrecto("cpu.png");
        setNombre({
          nombre: "CPU",
          descripcion:
            "Un CPU (Central Processing Unit, Unidad Central de Procesamiento en español) es el componente principal de un ordenador o computadora. Es considerado el 'cerebro' del sistema, encargado de ejecutar las instrucciones y realizar los cálculos necesarios para el funcionamiento de la máquina. El CPU está compuesto por varios componentes internos, incluyendo la unidad de control, la unidad aritmético-lógica, la memoria caché y los registros. Estos componentes trabajan en conjunto para llevar a cabo las operaciones de procesamiento de datos.El CPU interpreta y ejecuta instrucciones de programas almacenados en la memoria principal del ordenador. Realiza operaciones aritméticas, lógicas y de control, maneja la transferencia de datos entre los diferentes componentes del sistema y coordina las operaciones de entrada y salida.En resumen, el CPU es el componente esencial que se encarga de procesar datos y realizar operaciones en una computadora. Es responsable de la velocidad y capacidad de respuesta del sistema, y su rendimiento tiene un impacto directo en la velocidad de ejecución de programas y tareas.",
        });
        "cpu.png" == correcto
          ?setRespuestaCorrecta(true) && setCorrectas(correctas+1)
          : setRespuestaCorrecta(false);
        break;
      case 2:
        setSeleccion(true);
        setNombreCorrecto("case.png");

        setNombre({
          nombre: "CASE",
          descripcion:
            "El case es una estructura que protege y organiza los componentes esenciales de una computadora, como la placa madre, la fuente de alimentación, el disco duro, la memoria RAM y las tarjetas de expansión. Proporciona un lugar seguro para montar y conectar estos componentes, además de permitir la circulación adecuada de aire para mantenerlos refrigerados. Además de su función práctica, el case también puede tener un diseño estético, con diferentes formas, colores y estilos para adaptarse a las preferencias del usuario. Algunos cases incluso cuentan con paneles transparentes o iluminación LED para mostrar los componentes internos y crear un efecto visual atractivo.",
        });
        "case.png" == correcto
          ? setRespuestaCorrecta(true) && setCorrectas(correctas+1)
          : setRespuestaCorrecta(false);
        break;
      case 3:
        setSeleccion(true);
        setNombreCorrecto("audifono.jpg");
        setNombre({
          nombre: "Audifonos",
          descripcion:
            "Los audífonos constan de pequeños altavoces, conocidos como drivers, que reproducen el sonido y están conectados por medio de cables o de forma inalámbrica a un dispositivo de reproducción de audio, como un teléfono, un reproductor de música o una computadora. También pueden incluir un micrófono incorporado para realizar o recibir llamadas telefónicas o para comunicarse en aplicaciones de chat de voz.",
        });
        "audifono.jpg" == correcto
          ? setRespuestaCorrecta(true) && setCorrectas(correctas+1)
          : setRespuestaCorrecta(false);
        break;
      case 4:
        setSeleccion(true);
        setNombreCorrecto("ram.png");
        setNombre({
          nombre: "RAM",
          descripcion:
            "La memoria RAM (Random Access Memory, en español 'Memoria de Acceso Aleatorio') es un tipo de memoria de almacenamiento temporal utilizada por los ordenadores para almacenar y acceder a datos de forma rápida mientras el sistema está en funcionamiento La memoria RAM actúa como una especie de 'mesa de trabajo' para el procesador y otros componentes del ordenador. Permite almacenar temporalmente los datos y las instrucciones necesarias para que el procesador realice sus operaciones. A diferencia del almacenamiento permanente, como el disco duro, la memoria RAM es volátil, lo que significa que los datos se borran cuando se apaga el ordenador.",
        });
        "ram.png" == correcto
          ? setRespuestaCorrecta(true) && setCorrectas(correctas+1)
          : setRespuestaCorrecta(false);
        break;
      default:
        break;
    }
  }, [indice]);

  const restablecer = () => {
    setAlerta(false)
    setSeleccion(false);
    setNombreCorrecto("");
    setRespuestaCorrecta(false);
    setCorrecto("nombre");
    cambiarOrdenImagenes();
    setIndicePregunta(indice);
    if(indice == 4){
        history.push("/registro/usuario");   
    }
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
          <ProgressBar value={100} showValue={false} className="mt-2" />
        </div>
        <div className="col-1 mt-4"></div>
      </div>

      <div className="exception-wrapper">
        <div className="exception-content" style={{ padding: "10vw" }}>
          <div style={{ alignContent: "center", textAlign: "center" }}>
            <img
              style={{
                width: "120px",
                height: "120px",
              }}
              src="imgs/queaprender.png"
              alt="CYBERSCOPE"
            />
            <h5>{preguntas[indicePregunta]}</h5>
          </div>
          <div>
            <div className="grid ">
              {imagenes.map((imagen, index) => (
                <div className="col-6 lg:col-3 md:col-3" key={index}>
                  <Button
                    onClick={() => setCorrecto(imagen)}
                    style={estilodiv.borderBt}
                    className={
                      nombreCorrecto == correcto && correcto == imagen
                        ? "p-button-success"
                        : correcto == imagen && seleccion == false
                        ? ""
                        : nombreCorrecto != correcto &&
                          correcto == imagen &&
                          seleccion == true
                        ? "p-button-danger"
                        : "p-button-text"
                    }
                  >
                    <div style={estilodiv.div}>
                      <img
                        alt="cpu"
                        src={`imgs/${imagen}`}
                        style={estilodiv.imagen}
                      />
                    </div>
                  </Button>
                </div>
              ))}

              <div
                className="col-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ProgressBar
                  value={indicePregunta * 25}
                  showValue={false}
                  className="mt-2 "
                  style={{ width: "80%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="exception-footer">
          <Button
            style={{ minWidth: "210px" }}
            label="CONTINUAR"
            type="button"
            className=" p-button-secondary "
            onClick={() => (setIndice(indice + 1), setAlerta(true))}
          />
        </div>
      </div>

      <Dialog
        visible={alerta}
        onHide={() => restablecer()}
        position="bottom"
        breakpoints={{ "960px": "75vw", "640px": "100vw" }}
        style={{ width: "50vw" }}
      
      >
        <div className="flex align-items-center flex-column sm:flex-row">
          <img
            style={{
              width: "120px",
              height: "120px",
            }}
            src={
              respuestaCorrecta == true
                ? "imgs/respuestasi.png"
                : "imgs/respuestano.png"
            }
            alt="CYBERSCOPE"
            className="mb-3"
          />

          <h5 className="mt-4">
            {respuestaCorrecta == true
              ? "Muy bien, ¡Respuesta correcta!"
              : "Respuesta incorrecta"}
          </h5>
        </div>

        <div style={{ padding: "30px", fontSize: "18px" , textAlign:"center"}}>
          <p>
            {respuestaCorrecta == true
              ? `Tu respuesta es correcta, seleccionaste  ${nombre.nombre}
              `
              : `Tu respuesta es incorrecta!
              La respuesta correcta es el ${nombre.nombre}
   
              `}
          </p>
          <p>
          
           Si deseas saber la defincion puedes darle al signo "i""
       
          </p>
        </div>


        <div style={{ textAlign: "center" }}>
          <Button
            style={{ minWidth: "210px" }}
            label="CONTINUAR"
            type="button"
            className=" p-button-secondary mr-3"
            onClick={() =>  restablecer()}
          />

          <Button
            icon="pi pi-info"
            className=" p-button-secondary p-button-rounded "
         onClick={()=> setInformacion(true)}
          />
        </div>
      </Dialog>

      <Dialog
      visible={informacion}
      onHide={()=>setInformacion(false)}
      header="Informacion"
      breakpoints={{ "960px": "75vw", "640px": "100vw" }}
      style={{ width: "65vw" }}>
        <div className="m-5">

        
        <div className="mb-5 flex align-items-center flex-column sm:flex-row">
        <div style={estilodiv.div}>
                      <img
                        alt="cpu"
                        src={`imgs/${nombreCorrecto}`}
                        style={estilodiv.imagen}
                      />
                    </div> 
            <h4>
            {respuestaCorrecta == true
              ? `Tu respuesta es correcta y la definicion de  ${nombre.nombre}
              `
              : `Tu respuesta es incorrecta.
              La respuesta correcta es ${nombre.nombre}  y su defincion es la siguiente:
              `}
            </h4>
       
      
        </div>
        {nombre.descripcion}

 

        </div> 

        <div style={{ textAlign: "center" }}>
          <Button
            style={{ minWidth: "210px" }}
            label="CONTINUAR"
            type="button"
            className=" p-button-secondary mr-3  p-button-outlined"
            onClick={() =>  setInformacion(false)}
          />
          </div>
      </Dialog>
    </div>
  );
};
