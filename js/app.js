///////////////////instanciaciones/////////////////////////////////////////
const gifs = new GiphyAPI();
const ui = new UI();
/////////////////////event listeners///////////////////////////////////////
function EventListeners() {
  botonDropdownPersonalizado.addEventListener("click", ui.ToggleList);
  day.addEventListener("click", CambiarTema);
  night.addEventListener("click", CambiarTema);
  inputBusqueda.addEventListener("keyup", MostrarEstiloBusqueda);
  BotonBusqueda.addEventListener("click", RealizarBusqueda);
  BotonCrear.addEventListener("click", OpenModalWindow);
}
/////////////////////funciones/////////////////////////////////////////////
function OpenModalWindow() {
  ui.ShowModalWindow();
  let botonComenzar = document.querySelector(".boton-2-modal");
  botonComenzar.addEventListener("click", ChequeoAntesDeGrabacion);
}

function MostrarEstiloBusqueda() {
  ui.displayEstiloBusqueda();
}

function ChequeoAntesDeGrabacion() {
  ui.displayChequeoAntesGrabacion();
  EsperarPorComienzo();
}

function EsperarPorComienzo() {
  console.log(botonCapturar);
  botonCapturar.addEventListener("click", ui.ComenzarCaptura);
  botonSubir.addEventListener("click", subirCaptura);
}

function subirCaptura() {
  let form = new FormData();
  form.append("file", recorder.getBlob(), "myGif.gif");
  ui.ChangeStyleToSubiendoGuifo();
  gifs.postear(form).then(function (gif) {
    ui.ChangeStyleToGifoSubido();
    urlNewGif = `https://api.giphy.com/v1/gifs/${gif.data.data.id}?api_key=fXk4hALQmQWZGRZNz6R0x4XuztKdKMvK`;
    // console.log(urlNewGif);
    // SendToClipboard(urlNewGif);
    botonCopiarEnlace.addEventListener("click", SendToClipboard);
  });
}

function RealizarBusqueda(e) {
  e.preventDefault();
  let searchTerm = document.querySelector("#searchTerm");
  if (BotonBusqueda.classList.contains("enable")) {
    sugerenciasSection.style.display = "none";
    GetGifsByName(24, searchTerm.value);
  }
}

function SendToClipboard() {
  navigator.clipboard
    .writeText(urlNewGif)
    .then(() => {
      // Success!
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
}

function getGifs(limit, typeOfRequest) {
  serverResponse = gifs.getGifs(limit);
  serverResponse.then((gifs) => {
    if (typeOfRequest === "sugerencias") {
      ui.displaySugerencias(gifs.gifs.data);
    } else {
      ui.displayTendencias(gifs.gifs.data);
    }
  });
}

function GetGifsByName(limite, TerminoBusqueda) {
  serverResponse = gifs.getGifsByName(limite, TerminoBusqueda);
  serverResponse.then((gifs) => {
    ui.displayBusqueda(gifs.gifs.data);
  });
}

function changeToNight(state) {
  ui.displaySailorNight(state);
}

function CambiarTema(e) {
  if (e.target.className === "day") {
    changeToNight(false);
    botonDropdownPersonalizado.classList.add("isDay");
  } else {
    changeToNight(true);
    botonDropdownPersonalizado.classList.remove("isDay");
  }
}

getGifs(4, "sugerencias");
getGifs(24, "tendencias");
changeToNight(false);
if (document.querySelector("title").textContent !== "index") {
  OpenModalWindow();
}

EventListeners();
