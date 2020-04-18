///////////////////instanciaciones/////////////////////////////////////////
const gifs = new GiphyAPI();
const ui = new UI();
document.querySelector(
  ".navegacion"
).firstElementChild.firstElementChild.textContent = localStorage.getItem(
  "visitCounter"
);
/////////////////////event listeners///////////////////////////////////////
function EventListeners() {
  BotonCrear.addEventListener("click", OpenModalWindow);
}
/////////////////////funciones/////////////////////////////////////////////
function OpenModalWindow() {
  ui.ShowModalWindow();
  let botonComenzar = document.querySelector(".boton-2-modal");
  botonComenzar.addEventListener("click", ChequeoAntesDeGrabacion);
  document
    .querySelector(".boton-1-modal")
    .addEventListener("click", changeToIndex);
}

function changeToIndex() {
  window.location.href = "./index.html";
}

function ChequeoAntesDeGrabacion() {
  ui.displayChequeoAntesGrabacion();
  EsperarPorComienzo();
}

function EsperarPorComienzo() {
  console.log(botonCapturar);
  botonCapturar.addEventListener("click", ui.ComenzarCaptura);
  botonSubir.addEventListener("click", subirCaptura);
  botonRepetirCaptura.addEventListener("click", RepetirCaptura);
}

function RepetirCaptura() {
  location.reload();
}

function subirCaptura() {
  let form = new FormData();
  form.append("file", recorder.getBlob(), "myGif.gif");
  ui.ChangeStyleToSubiendoGuifo();
  gifs
    .postear(form)
    .then(function (gif) {
      ui.ChangeStyleToGifoSubido();
      urlNewGif = `https://api.giphy.com/v1/gifs/${gif.data.data.id}?api_key=fXk4hALQmQWZGRZNz6R0x4XuztKdKMvK`;
      botonCopiarEnlace.addEventListener("click", SendToClipboard);
      botonDescargarGuifo.addEventListener("click", SaveGuifoToLocalStorage);
      botonListo.addEventListener("click", () => location.reload());
    })
    .catch(function (error) {
      console.log("funcion subirCaptura fallo");
    });
}

function SaveGuifoToLocalStorage() {
  const localStorageContent = localStorage.getItem("gifos");
  let gifos;
  if (localStorageContent === null) {
    gifos = [];
  } else {
    gifos = JSON.parse(localStorageContent);
  }
  if (gifos.indexOf(urlNewGif) === -1) {
    //console.log(gifos.indexOf(urlNewGif));
    gifos.push(urlNewGif);
    localStorage.setItem("gifos", JSON.stringify(gifos));
  }
}

function SendToClipboard() {
  navigator.clipboard
    .writeText(urlNewGif)
    .then(() => {})
    .catch((err) => {
      console.log("Fallo SendToClipboard", err);
    });
}

function getGifs(limit, typeOfRequest, isFromApi) {
  if (isFromApi) {
    serverResponse = gifs.getGifs(limit);
    serverResponse
      .then((gifs) => {
        if (typeOfRequest === "sugerencias") {
          ui.displaySugerencias(gifs.gifs.data);
        } else {
          ui.displayTendencias(gifs.gifs.data);
        }
      })
      .catch(function (error) {
        console.log("funcion getGifs fallo");
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
      serverResponse
        .then((gifo) => {
          console.log(gifo.gifs.data.images.original.url);
          ui.displayGifsFromLocal(gifo.gifs.data.images.original.url);
        })
        .catch(function (error) {
          console.log("funcion GetGifs fallo");
        });
    });
  }
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
if (localStorage.getItem("clickTrace") === "crear") {
  OpenModalWindow();
} else {
  ui.HideSections();
  document.querySelector("#MisGuifos").firstElementChild.style.color = "grey";
  document.querySelector(".tendencias .empty-1").style.flex = "0";
  document.querySelector(".tendencias .heading").firstElementChild.innerHTML =
    "Mis guifos";
}

getGifs("", "", false);

EventListeners();

console.log();
