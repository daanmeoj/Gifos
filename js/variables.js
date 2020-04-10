////////////////////////colores/////////////////////////
let primero = "#f7c9f3",
  segundo = "#4180f6",
  tercero = "#110038",
  cuarto = "#997d97",
  quinto = "#808080",
  sexto = "#b4b4b4",
  septimo = "#ffffff",
  octavo = " #e6bbe2",
  noveno = "e6dce4",
  decimo = "#4c2f99",
  decimoPrimero = " #284f99",
  decimoSegundo = "#fffafe",
  decimoTercero = "#ee3efe",
  decimoCuarto = "#2e32fb",
  decimoQuinto = "#2124b3",
  decimoSexto = "#8f8f8f",
  decimoSeptimo = "#fff4fd",
  decimoOctavo = "#e6e6e6",
  decimoNoveno = "#000000",
  vigesimo = "#979797",
  vigesimoPrimero = "#80687d",
  vigesimoSegundo = "#5C5C5C",
  vigesimoTercero = "#A72CB3",
  vigesimoCuarto = "#CCCCCC",
  vigesimoQuinto = "#E6DCE4";
///////////////////////////////////////assets//////////////////////////////////////
let darkLogo = "./assets/gifOF_logo_dark.png",
  darkLupa = "./assets/Combined_Shape.svg",
  activeLupa = "./assets/lupa.svg",
  inactiveLupa = "./assets/lupa_inactive.svg",
  activaDarkLupa = "./assets/lupa_light.svg",
  modalWindow = "./assets/window img.png",
  lightLogo = "./assets/gifOF_logo.png",
  recording = "./assets/recording.svg",
  camera = "/assets/camera.svg",
  imagenPlanetaPng = "./assets/globe_img.png";
/////////////////////////////selectores/////////////////////////////////////////
const BodyOfdocument = document.body,
  lupa = document.querySelector(".boton-tipo-2 button .lupa img"),
  navegacion = document.querySelector(".navegacion"),
  landingLogo = document.querySelector(".landing .logo img"),
  BotonCrear = document.querySelector(".boton-tipo-1 button"),
  enlace = document.querySelector(".enlace a"),
  comboElegirTema1 = document.querySelector(".boton-tipo-4 button:first-child"),
  comboElegirTema2 = document.querySelector(".boton-tipo-4 button:last-child"),
  ContenedorBusqueda = document.querySelector(".contenedor-busqueda "),
  titulo = document.querySelector(".titulo"),
  zonaBusqueda = document.querySelector(".zona-busqueda"),
  BotonBusqueda = document.querySelector(".boton-tipo-2 button"),
  palabraBuscar = document.querySelector(".boton-tipo-2 button .etiqueta h3"),
  tendenciasHeading = document.querySelector(".tendencias .heading"),
  sugerenciasHeading = document.querySelector(".sugerencias .heading"),
  botonDropdownPersonalizado = document.getElementById(
    "botonDropdownPersonalizado"
  ),
  botonMisGifos = document.getElementById("MisGuifos"),
  day = document.getElementById("dayTheme"),
  night = document.getElementById("nightTheme"),
  inputBusqueda = document.getElementById("searchTerm"),
  listaTemas = document.querySelector(".contenedor-ListaTemas"),
  emptySugerenciasBusqueda = document.querySelector("#sugerencias-empty-1"),
  sugerenciasSection = document.querySelector("#sugerenciasSection"),
  contenedorSugerenciasQueAparecen = document.querySelector(
    "#sugerencias-empty-1"
  ),
  SugerenciasEmpty2 = document.querySelector("#sugerencias-empty-2"),
  BusquedaSection = document.querySelector("#busquedaSection"),
  modalWindowSection = document.querySelector("#modalWindow"),
  contenedorModal = document.querySelector(".contenedorModal"),
  ChequeoAntesComenzar = document.querySelector(".ChequeoAntes"),
  tendenciasSection = document.querySelector(".tendencias"),
  title = document.querySelector("title"),
  now = new Date();

var resultadosSugeridos,
  video,
  intervalID,
  counterCentisegundos,
  counterSegundos,
  counterMinutos,
  counterHoras,
  centisegundos,
  segundos,
  minutos,
  horas;
