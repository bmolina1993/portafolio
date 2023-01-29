import React, { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  //---------
  //variables
  //---------
  const dataProjects = [
    {
      title: "Buzón de correo",
      description:
        "Sitio para leer cada correo recibido por usuario desde el BackEnd",
      vertical: false,
      bgPreview: "bg-mailboxPreview",
      bgImages: [
        "bg-mailboxDesktopGif",
        "bg-mailboxMobileGif",
        "bg-mailboxDesktop",
        "bg-mailboxMobile",
        "bg-mailboxJson",
      ],
      repository: "https://github.com/bmolina1993/mailbox",
      demo: "https://bmolina1993.github.io/mailbox/",
    },
    {
      title: "Viajes",
      description: "Sitio de alquiler",
      vertical: false,
      bgPreview: "bg-travelPreview",
      bgImages: ["bg-travelDesktop", "bg-travelMobile"],
      repository: "https://github.com/bmolina1993/travel",
      demo: "https://bmolina1993.github.io/travel/index.4906e77435b13bfc22e6.html",
    },
    {
      title: "To do list",
      description: "Sitio para cargar tareas pendientes",
      vertical: true,
      bgPreview: "bg-todoListPreview",
      bgImages: ["bg-todoListMobileGif", "bg-todoListMobile"],
      repository: "https://github.com/bmolina1993/todoReact",
      demo: "https://bmolina1993.github.io/todoReact/",
    },
    {
      title: "Datos inmobiliarios",
      description:
        "Web scraping para extraer datos de sitio y exportarlo en Json/PostgreSQL",
      vertical: true,
      bgPreview: "bg-realEstatePreview",
      bgImages: ["bg-realEstatePreview"],
      repository: "https://github.com/bmolina1993/real-estate-visualization",
      demo: null,
    },
  ];
  const defaultDetailProject = {
    title: null,
    description: null,
    vertical: false,
    bgPreview: null,
    bgImages: [],
    repository: null,
    demo: null,
  };

  //-------
  //estados
  //-------
  const [detailProject, setDetailProject] =
    React.useState(defaultDetailProject); //[detail project]
  const [showSideBar, setShowSideBar] = React.useState(false); //[menu mobile]
  const [showModal, setShowModal] = React.useState(false); //[card detalle mobile]

  //---------
  //funciones
  //---------
  const activeDisableBodyScrollY = () => {
    const body = document.querySelector("body");

    !body.style.overflowY
      ? (body.style.overflowY = "hidden")
      : body.removeAttribute("style");
  };

  const onClickShowSideBar = () => {
    setShowSideBar((prevState) => !prevState);
    activeDisableBodyScrollY();
  }; //[menu mobile]

  const onClickShowModal = () => {
    setShowModal((prevState) => !prevState);
    activeDisableBodyScrollY();
  }; //[card detalle mobile]

  const onClickDetailProject = (data) => {
    setDetailProject({
      title: data.title,
      description: data.description,
      vertical: data.vertical,
      bgPreview: data.bgPreview,
      bgImages: data.bgImages,
      repository: data.repository,
      demo: data.demo,
    });
  };

  //-------------
  //retorno datos
  //-------------
  return (
    <GlobalContext.Provider
      value={{
        dataProjects,
        detailProject,
        setDetailProject,
        onClickDetailProject,
        showModal,
        onClickShowModal,
        showSideBar,
        onClickShowSideBar,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
