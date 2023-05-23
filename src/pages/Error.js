import React from "react";
import { useHistory } from "react-router-dom";

export const Error = (props) => {
  const history = useHistory();

  return (
    <div className="exception-body error">
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
            src="assets/layout/images/pages/asset-error.svg"
            alt="freya-layout"
          />
          <span>Error</span>
        </div>
        <div className="exception-footer">
          <h4>Notary</h4>
          <h6>Ⓒ Fénix Computer Inc. 2022. v0.9.1-SNAPSHOT. Alex Say</h6>
        </div>
      </div>
    </div>
  );
};
