import React, { useEffect, useState, useRef } from "react";
import { classNames } from "primereact/utils";
import { InputText } from "primereact/inputtext";
import AppMenu from "./AppMenu";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { MegaMenu } from "primereact/megamenu";
import { createAriaClickAttrs } from "@fullcalendar/react";
import { Button } from "primereact/button";

const AppTopbar = (props) => {
  const history = useHistory();
  const searchPanelDesktop = useRef(null);
  const searchPanelMobile = useRef(null);
  try {
    var usuario;

    var conList = localStorage.getItem("user");

    if (conList !== "null" && conList !== null && conList !== "") {
      usuario = JSON?.parse(conList);
    } else {
      window.location = "#/login";
    }
  } catch (err) {
    window.location = "#/login";
  }
  const [appUsuario, setAppUsuario] = useState(usuario);

  useEffect(() => {
    if (props.searchActive) {
      if (window.innerWidth >= 576) searchPanelDesktop.current.focus();
      else searchPanelMobile.current.focus();
    }
  }, [props.searchActive]);

  const onInputKeydown = (event) => {
    const key = event.which;

    //escape, tab and enter
    if (key === 27 || key === 9 || key === 13) {
      if (props.searchActive) props.onTopbarSearchToggle();
    }
  };

  function cerrar() {
    localStorage.setItem("contrato", null);
    localStorage.setItem("persona", null);
    localStorage.setItem("token", null);
    localStorage.setItem("user", null);
  }
  return (
    <div className="layout-topbar">
      <div className="layout-topbar-wrapper">
        <div className="layout-topbar-left">

    
      <Button
 
    className="p-button-text p-button-secondary mr-2 mb-2"
      >
 <i
                  className="pi pi-align-justify"
                  style={{
                    fontSize: "30px",
                
                  }}
                ></i>
      </Button>
     
        </div>
    

        {/* <AppMenu
          menuMode={props.menuMode}
          sidebarActive={props.sidebarActive}
          sidebarStatic={props.sidebarStatic}
          model={props.menu}
          menuActive={props.menuActive}
          onRootMenuItemClick={props.onRootMenuItemClick}
          onMobileMenuActive={props.onMobileMenuActive}
          onMenuItemClick={props.onMenuItemClick}
          onSidebarMouseOver={props.onSidebarMouseOver}
          onSidebarMouseLeave={props.onSidebarMouseLeave}
          onToggleMenu={props.onToggleMenu}
          resetActiveIndex={props.resetActiveIndex}
          onMenuClick={props.onMenuClick}
        /> */}

        <div className="layout-topbar-right">
          <ul className="layout-topbar-actions">
            <li
              className={classNames("topbar-item search-item", {
                "active-topmenuitem": props.searchActive,
              })}
            >
              {/* <button
                className="p-link"
                tabIndex="0"
                style={{ cursor: "pointer" }}
                onClick={props.onTopbarSearchToggle}
              >
                <i className="topbar-icon pi pi-search"></i>
              </button> */}{" "}
              {/* <div
                className="search-input-wrapper"
                onClick={props.onTopbarSearchClick}
              >
                <span className="p-input-icon-left">
                  <i className="pi pi-search"></i>
                  <InputText
                    ref={searchPanelDesktop}
                    type="text"
                    placeholder="Search..."
                    onKeyDown={onInputKeydown}
                  />
                </span>
              </div> */}
              {/* <ul className="fadeInDown">
                                <div className="search-input-wrapper p-fluid" style={{ width: '100%' }} onClick={props.onTopbarSearchClick} >
                                    <span className="p-input-icon-left">
                                        <i className="pi pi-search"></i>
                                        <InputText ref={searchPanelMobile} type="text" placeholder="Search..." onKeyDown={onInputKeydown} />
                                    </span>
                                </div>
                            </ul> */}
            </li>
            <li
              style={{
                fontSize: "20px",
                borderRight: "0.5px  solid #F2F2F2",
                marginRight: "5px",
              }}
            >
              <p
                style={{
                  marginRight: "50px",
                }}
              >
                {appUsuario?.nombre + " " + appUsuario?.apellido + "  "}
              </p>
            </li>

            <li
              className={classNames("topbar-item user-profile", {
                "active-topmenuitem fadeInDown": props.topbarUserMenuActive,
              })}
            >
              <button
                className="layout-rightpanel-button p-link"
                onClick={props.onTopbarUserMenuClick}
                style={{
                  height: "50px",
                }}
              >
                <div
                  style={{
                    width: "35px",
                    height: "35px",
                    textAlign: "center",
                    borderRadius: "50%",
                    backgroundColor: "#5499C7",

                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <b
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      margin: "0px auto",
                      color: "#FDFEFE ",
                    }}
                  >
                    {appUsuario?.nombre.substring(0, 1)}
                  </b>
                </div>

                <i
                  className="pi pi-align-justify"
                  style={{
                    fontSize: "30px",
                    marginLeft: "10px",
                  }}
                ></i>
              </button>

              <ul
                className="fadeInDown"
                style={{
                  borderRadius: "5%",
                }}
              >
                <Link
                  to={{
                    pathname: "/perfil/usuario",
                  }}
                >
                  <button
                    className="layout-rightpanel-button p-link"
                    style={{
                      height: "50px",
                      width: "200px",
                      marginTop: "14px",
                      alignItems: "left",
                      justifyContent: "left",
                    }}
                  >
                    {" "}
                    <i
                      className="pi pi-user"
                      style={{
                        fontSize: "20px",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                    ></i>
                    <label>Perfil</label>
                  </button>
                </Link>
                <Link
                  to={{
                    pathname: "/login",
                  }}
                >
                  <button
                    className="layout-rightpanel-button p-link"
                    style={{
                      height: "50px",
                      width: "200px",
                      marginTop: "14px",
                      marginBottom: "10px",
                      alignItems: "left",
                      justifyContent: "left",
                    }}
                    onClick={() => cerrar()}
                  >
                    {" "}
                    <i
                      className="pi pi-sign-out"
                      style={{
                        fontSize: "20px",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                    ></i>
                    <label>Cerrar sesion</label>
                  </button>
                </Link>
              </ul>
            </li>
          </ul>

          {/* <button
            tabIndex="0"
            style={{ cursor: "pointer" }}
            className="layout-rightpanel-button p-link"
            onClick={props.onRightPanelButtonClick}
          >
            <i className="pi pi-arrow-left"></i>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default AppTopbar;
