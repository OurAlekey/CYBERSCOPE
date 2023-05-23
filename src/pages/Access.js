import React from "react";
import { Button } from "primereact/button";
import { useHistory } from "react-router-dom";

export const Access = (props) => {
  const history = useHistory();
  const goDashboard = () => {
    history.push("/");
  };

  return (
    <div className="exception-body access">
      <div className="exception-topbar">
        <button
          id="logolink"
          onClick={() => history.push("/")}
          className="layout-topbar-logo p-link"
        >
          <img
         src={`assets/layout/images/favicon.ico`}
         alt="Notary"
          />
        </button>
      </div>
      <div className="exception-wrapper">
        <div className="exception-content">
          <img
            src="assets/layout/images/pages/asset-access.svg"
            alt="freya-layout"
            onClick={() => history.push("/")}
          />
          <span onClick={() => history.push("/")}>access denied </span>
          <Button
            type="button"
            label="Inicio"
            onClick={() => history.push("/")}
            className="layout-topbar-logo p-link"
          ></Button>
        </div>
        <div className="exception-footer p-mt-4">
          <h4>Notary</h4>
          <h6>Ⓒ Fénix Computer Inc. 2022. v0.9.1-SNAPSHOT. Alex Say</h6>
        </div>
      </div>
    </div>
  );
};
