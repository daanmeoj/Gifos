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
  BotonCrear.addEventListener("click", SetearSeguimientoClickCrear);
  botonMisGifos.addEventListener("click", SetearSeguimientoClickMisGuifos);
}
/////////////////////funciones/////////////////////////////////////////////

function MostrarEstiloBusqueda() {
  ui.displayEstiloBusqueda();
}

function SetearSeguimientoClickCrear() {
  localStorage.setItem("clickTrace", "crear");
}

function SetearSeguimientoClickMisGuifos() {
  localStorage.setItem("clickTrace", "misGuifos");
}

function RealizarBusqueda(e) {
  e.preventDefault();
  let searchTerm = document.querySelector("#searchTerm");
  if (BotonBusqueda.classList.contains("enable")) {
    sugerenciasSection.style.display = "none";
    GetGifsByName(24, searchTerm.value);
  }
}

function getGifs(limit, typeOfRequest, isFromApi) {
  if (isFromApi) {
    serverResponse = gifs.getGifs(limit);
    serverResponse.then((gifs) => {
      if (typeOfRequest === "sugerencias") {
        ui.displaySugerencias(gifs.gifs.data);
      } else {
        ui.displayTendencias(gifs.gifs.data);
      }
    });
  } else {
    const localStorageContent = localStorage.getItem("gifos");
    let gifos;
    if (localStorageContent === null) {
      gifos = [];
    } else {
      gifos = JSON.parse(localStorageContent);
    }
    gifos.forEach((gifo) => {
      //console.log(gifo);
      serverResponse = gifs.getGifsFromLocal(gifo);
      serverResponse.then((gifo) => {
        console.log(gifo.gifs.data.images.original.url);
        ui.displayGifsFromLocal(gifo.gifs.data.images.original.url);
      });
    });
  }
}

function GetGifsByName(limite, TerminoBusqueda) {
  serverResponse = gifs.getGifsByName(limite, TerminoBusqueda);
  serverResponse.then((gifs) => {
    ui.displayBusqueda(gifs.gifs.data, TerminoBusqueda);
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

changeToNight(false);
getGifs(4, "sugerencias", true);
getGifs(24, "tendencias", true);

EventListeners();
