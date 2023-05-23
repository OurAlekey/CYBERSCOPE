import React, { useEffect, useState } from "react";
import { Route, withRouter, useLocation } from "react-router-dom";
import App from "./App";
import { Login } from "./pages/Login";
import { Error } from "./pages/Error";
import { NotFound } from "./pages/NotFound";
import { Access } from "./pages/Access";
import useAuthExpired from "./hooks/useAuthExpired";
import { Inicio } from "./pages/Inicio/Inicio";
import { Comenzar } from "./pages/Inicio/Comenzar";
import { QueAprender } from "./pages/Inicio/QueAprender";
import { CuantoSabes } from "./pages/Inicio/CuantoSabes";
import { QueSeAprende } from "./pages/Inicio/QueSeAprende";
import { PreguntaPrueba } from "./pages/Inicio/PreguntaPrueba";
import { DondeEmpezar } from "./pages/Inicio/DondeEmpezar";
import { NuevoUsuario } from "./pages/Usuario/NuevoUsuario";

export const ctx = React.createContext();

const AppWrapper = (props) => {
 
  const isAuth = useAuthExpired();
  const [colorScheme, setColorScheme] = useState("light");

  switch (props.location.pathname) {
    case "/registro/usuario":
      return (
        <Route
          path="/registro/usuario"
          render={() => <NuevoUsuario  />}
        />
      );
    case "/preguntaprueba":
      return (
        <Route
          path="/preguntaprueba"
          render={() => <PreguntaPrueba  />}
        />
      );
      case "/cuantosabes":
        return (
          <Route
            path="/cuantosabes"
            render={() => <CuantoSabes  />}
          />
        );
  
    case "/dondeempezar":
      return (
        <Route
          path="/dondeempezar"
          render={() => <DondeEmpezar  />}
        />
      );
  
    case "/queseaprende":
      return (
        <Route
          path="/queseaprende"
          render={() => <QueSeAprende  />}
        />
      );
  

    case "/inicio":
    return (
      <Route
        path="/inicio"
        render={() => <Inicio  />}
      />
    );

  
    case "/comenzar":
      return (
        <Route
          path="/comenzar"
          render={() => <Comenzar  />}
        />
      );
      case "/queaprender":
        return (
          <Route
            path="/queaprender"
            render={() => <QueAprender  />}
          />
        );
      
  
    case "/login":
          return (
            <Route
              path="/login"
              render={() => <Login colorScheme={colorScheme} />}
            />
          );
    case "/error":
      return (
        <Route
          path="/error"
          render={() => <Error colorScheme={colorScheme} />}
        />
      );
    case "/notfound":
      return (
        <Route
          path="/notfound"
          render={() => <NotFound colorScheme={colorScheme} />}
        />
      );
    case "/access":
      return (
        <Route
          path="/access"
          render={() => <Access colorScheme={colorScheme} />}
        />
      );
    default:
      return <App setColorScheme={setColorScheme} />;
  }
};

export default withRouter(AppWrapper);
