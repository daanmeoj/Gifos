var p,
  botonCapturar,
  recorder,
  headingChequeo,
  imagenChequeo,
  imagenPreviaGifs,
  botonRepetirCaptura,
  botonSubir,
  divCamera,
  imagenSubiendo,
  PlanetaSubiendo,
  imagenPlanetaSubiendo,
  textoPlanetaSubiendo,
  textProgressBar,
  botonCancelar,
  botonCopiarEnlace,
  botonDescargarGuifo,
  botonListo,
  botonesChequeo,
  textoGuifoSubido,
  urlNewGif,
  gifos,
  counterGifosLocal = 0,
  particularIndexLocal = 5,
  botonesSugerenciasQueAparecen;

class Timer {
  ResetCounters() {
    StopCronometro();
    counterCentisegundos = 0;
    counterSegundos = 0;
    counterMinutos = 0;
    counterHoras = 0;
    centisegundos.firstElementChild.innerHTML = "00";
    segundos.firstElementChild.innerHTML = "00";
    minutos.firstElementChild.innerHTML = "00";
    horas.firstElementChild.innerHTML = "00";
  }

  startCronometro() {
    intervalID = window.setInterval(this.ControlarCronometro, 10);
  }

  ControlarCronometro() {
    if (counterCentisegundos < 10) {
      centisegundos.firstElementChild.innerHTML = "0" + counterCentisegundos;
    } else if (counterCentisegundos <= 60) {
      centisegundos.firstElementChild.innerHTML = counterCentisegundos;
    } else {
      counterCentisegundos = 0;
      counterSegundos++;
    }

    if (counterSegundos < 10) {
      segundos.firstElementChild.innerHTML = "0" + counterSegundos;
    } else if (counterSegundos <= 60) {
      segundos.firstElementChild.innerHTML = counterSegundos;
    } else {
      counterSegundos = 0;
      counterMinutos++;
    }

    if (counterMinutos < 10) {
      minutos.firstElementChild.innerHTML = "0" + counterMinutos;
    } else if (counterMinutos <= 60) {
      minutos.firstElementChild.innerHTML = counterMinutos;
    } else {
      counterMinutos = 0;
      counterHoras++;
    }

    if (counterHoras < 10) {
      horas.firstElementChild.innerHTML = "0" + counterHoras;
    } else if (counterHoras <= 60) {
      horas.firstElementChild.innerHTML = counterHoras;
    } else {
      counterHoras = 0;
    }

    counterCentisegundos++;
  }

  StopCronometro() {
    clearInterval(intervalID);
  }
}

const timer = new Timer();

class UI {
  displaySugerencias(gifs) {
    const results = document.querySelector("#resultados-sugeridos");
    gifs.forEach((gif) => {
      let title = gif.title;
      results.innerHTML += `
            <div class="card">
                <div class="card-heading"><h3>#${title
                  .substring(0, title.indexOf("GIF"))
                  .replace(/ /g, "")}</h3>
                      <img src="./assets/close.svg" alt="">
                </div>
                <div class="gif">
                            <div>
                                <img src="${gif.images.original.url}" alt="${
        gif.title
      }">
                            </div>
                            <div class="boton combo-item">
                                <a href="#" class="boton-tipo-1"><button>Ver mas...</button></a>
                            </div>
                </div>
                
            </div>`;
    });
  }

  displayTendencias(gifs) {
    const results = document.querySelector("#resultados-tendencias");
    let particularIndex = 8;
    gifs.forEach((gif, index) => {
      if (index > 3) {
        if (index === particularIndex) {
          results.innerHTML += `
          <div class="card particularCard">
              <img src="${gif.images.original.url}" alt="">
              <div class="cabeceraGif">${gif.title
                .substring(0, gif.title.indexOf("GIF"))
                .replace(/ /g, " #")}</div>
          </div>`;
          particularIndex += 5;
        } else {
          results.innerHTML += `
          <div class="card">
              <img src="${gif.images.original.url}" alt="">
              <div class="cabeceraGif">${gif.title
                .substring(0, gif.title.indexOf("GIF"))
                .replace(/ /g, " #")}</div>
          </div>`;
        }
      }
    });
  }

  displayGifsFromLocal(gif) {
    console.log(counterGifosLocal);
    counterGifosLocal++;
    const results = document.querySelector("#resultados-tendencias");

    if (counterGifosLocal === particularIndexLocal) {
      results.innerHTML += `
                    <div class="card particularCard">
                        <img src="${gif}" alt="">
                    </div>`;
      particularIndexLocal += 5;
    } else {
      results.innerHTML += `
                    <div class="card">
                       <img src="${gif}" alt="">
                    </div>`;
    }
  }

  displayBusqueda(gifs, palabraBusqueda) {
    const results = document.querySelector("#resultados-tendencias");
    let tendencias = document.querySelector(".tendencias");
    let emptyTendencias = document.querySelector(".tendencias .empty-1");
    tendencias.firstElementChild.nextElementSibling.firstElementChild.textContent = `${palabraBusqueda} (resultados)`;
    tendencias.style.height = "1941px";
    emptyTendencias.style.flex = "100";
    results.innerHTML = ``;
    emptyTendencias.innerHTML = ``;
    let particularIndex = 8;
    gifs.forEach((gif, index) => {
      if (index > 3) {
        if (index === particularIndex) {
          results.innerHTML += `
          <div class="card particularCard">
              <img src="${gif.images.original.url}" alt="">
          </div>`;
          particularIndex += 5;
        } else {
          results.innerHTML += `
          <div class="card">
              <img src="${gif.images.original.url}" alt="">
          </div>`;
        }
      } else if (index < 3) {
        let contenedorboton1 = document.createElement("div");
        contenedorboton1.classList.add(
          "boton" + index + "SugerenciasDespuesBusqueda"
        );
        let boton1SugerenciasDespuesBusqueda = document.createElement("button");
        boton1SugerenciasDespuesBusqueda.innerHTML = `# ${gif.title
          .substring(0, gif.title.indexOf("GIF"))
          .replace(/ /g, " ")}`;
        contenedorboton1.appendChild(boton1SugerenciasDespuesBusqueda);
        emptyTendencias.appendChild(contenedorboton1);
      }
    });
  }

  displaySugerenciasQueAparecen(DebenAparacerElementos) {
    if (DebenAparacerElementos) {
      contenedorSugerenciasQueAparecen.innerHTML = `
      <div class="botonQueAparece boton1"><button><h3>Resultado de búsqueda sugerido</h3></button></div>
      <div class="botonQueAparece boton2"><button><h3>Un resultado similar de búsqueda</h3></button></div>
      <div class="botonQueAparece boton3"><button><h3>Y otro más</h3></button></div>
            `;
    } else {
      contenedorSugerenciasQueAparecen.innerHTML = ``;
    }
  }

  HideSections() {
    BusquedaSection.style.display = "none";
    sugerenciasSection.style.display = "none";
  }

  ChangeStyleToSubiendoGuifo() {
    document.querySelector(".imagenPrevia").style.display = "none";
    document.querySelector(".imagenSubiendo").style.display = "block";
    botonRepetirCaptura.style.display = "none";
    botonSubir.style.display = "none";
    document.querySelector(".timer").style.display = "none";
    botonCancelar.style.display = "block";
    headingChequeo.firstElementChild.textContent = "Subiendo Guifo";
  }

  ChangeStyleToGifoSubido() {
    let contenidoChequeo = document.querySelector(".contenidoChequeo");
    contenidoChequeo.classList.add("Minimizar");
    contenidoChequeo.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.style.display =
      "none";
    contenidoChequeo.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.style.display =
      "block";
    tendenciasSection.style.display = "";
    botonCancelar.style.display = "none";
    botonCopiarEnlace = document.createElement("button");
    botonDescargarGuifo = document.createElement("button");
    botonListo = document.createElement("button");
    textoGuifoSubido = document.createElement("h3");
    textoGuifoSubido.textContent = "Guifo creado con éxito";
    botonCopiarEnlace.classList.add("CopiarlEnlace");
    botonDescargarGuifo.classList.add("DescargarGuifo");
    botonListo.classList.add("Listo");
    textoGuifoSubido.classList.add("textoGuifoSubido");
    let textobotonCopiarEnlace = document.createElement("h3");
    let textobotonDescargarGuifo = document.createElement("h3");
    let textobotonListo = document.createElement("h3");
    textobotonCopiarEnlace.textContent = "Copiar Enlace Guifo";
    textobotonDescargarGuifo.textContent = "Descargar Guifo";
    textobotonListo.textContent = "Listo";
    botonCopiarEnlace.appendChild(textobotonCopiarEnlace);
    botonDescargarGuifo.appendChild(textobotonDescargarGuifo);
    botonListo.appendChild(textobotonListo);
    botonesChequeo.appendChild(botonCopiarEnlace);
    botonesChequeo.appendChild(botonDescargarGuifo);
    botonesChequeo.appendChild(botonListo);
    botonesChequeo.appendChild(textoGuifoSubido);
  }

  ToggleList(e) {
    let listaTemas = document.querySelector(".contenedor-ListaTemas");
    if (listaTemas.classList.contains("isNotActive")) {
      listaTemas.style.display = "block";
      listaTemas.classList.remove("isNotActive");
    } else {
      listaTemas.style.display = "none";
      listaTemas.classList.add("isNotActive");
    }
  }

  displayChequeoAntesGrabacion() {
    //ocultar ventana modal
    modalWindowSection.classList.remove("modalActive");
    //mostrar venatana chequeo antes de comenzar
    ChequeoAntesComenzar.classList.add("chequeoActive");
    //remover ventana modal
    modalWindowSection.firstElementChild.firstElementChild.firstElementChild.remove();
    modalWindowSection.firstElementChild.lastElementChild.firstElementChild.remove();
    modalWindowSection.firstElementChild.lastElementChild.firstElementChild.remove();
    modalWindowSection.firstElementChild.lastElementChild.firstElementChild.remove();
    tendenciasSection.style.display = "none";
    //Crear Contenedor Chequeo antes de comenzar
    let contenidoChequeo = document.createElement("div");
    headingChequeo = document.createElement("div");
    let bodyChequeo = document.createElement("div");
    imagenChequeo = document.createElement("video");
    botonesChequeo = document.createElement("div");
    botonCapturar = document.createElement("button");
    botonRepetirCaptura = document.createElement("button");
    botonSubir = document.createElement("button");
    botonCancelar = document.createElement("button");
    let timer = document.createElement("div");
    let textTimer = document.createElement("h3");
    divCamera = document.createElement("div");
    let divTexto = document.createElement("div");
    let ImageCamera = document.createElement("img");
    let TextoCapturar = document.createElement("h3");
    let TextoHeadingChequeo = document.createElement("h3");
    let TextoRepetirCaptura = document.createElement("h3");
    let TextoSubir = document.createElement("h3");
    timer.classList.add("timer");
    timer.innerHTML = `<div class="contenedorTimer">
                            <span class="horas"><h3>00</h3></span>
                            <span>:</span>
                            <span class="minutos"><h3>00</h3></span>
                            <span>:</span>
                            <span class="segundos"><h3>00</h3></span>
                            <span>:</span>
                            <span class="centisegundos"><h3>00</h3></span>
                      </div>`;
    imagenPreviaGifs = document.createElement("img");
    imagenSubiendo = document.createElement("div");
    PlanetaSubiendo = document.createElement("div");
    imagenPlanetaSubiendo = document.createElement("img");
    imagenPlanetaSubiendo.src = imagenPlanetaPng;
    textoPlanetaSubiendo = document.createElement("h3");
    textProgressBar = document.createElement("h3");
    textProgressBar.classList.add("textProgressBar");
    textProgressBar.innerHTML = `Tiempo restante: <span>38 años </span>algunos minutos`;
    textoPlanetaSubiendo.textContent = "Estamos subiendo tu guifo…";
    let ProgressBar = document.createElement("div");
    let BarsContainer = document.createElement("div");
    let textobotonCancelar = document.createElement("h3");
    textobotonCancelar.textContent = "Cancelar";
    BarsContainer.classList.add("BarContainer");
    ProgressBar.appendChild(BarsContainer);
    for (let i = 0; i < 23; i++) {
      BarsContainer.innerHTML += `<div class="ProgressElement"></div>`;
    }
    TextoHeadingChequeo.textContent = "Un Chequeo Antes de Empezar";
    TextoSubir.textContent = "Subir Guifo";
    TextoRepetirCaptura.textContent = "Repetir Captura";
    headingChequeo.appendChild(TextoHeadingChequeo);
    ImageCamera.src = camera;
    TextoCapturar.textContent = "Capturar";
    contenidoChequeo.classList.add("contenidoChequeo");
    headingChequeo.classList.add("headingChequeo");
    bodyChequeo.classList.add("bodyChequeo");
    imagenChequeo.classList.add("imagenChequeo");
    botonesChequeo.classList.add("botonesChequeo");
    botonCapturar.classList.add("botonCapturar");
    divCamera.classList.add("divCamera");
    divTexto.classList.add("divTexto");
    botonRepetirCaptura.classList.add("repetirCaptura");
    botonSubir.classList.add("subir");
    imagenPreviaGifs.classList.add("imagenPrevia");
    imagenSubiendo.classList.add("imagenSubiendo");
    PlanetaSubiendo.classList.add("PlanetaSubiendo");
    ProgressBar.classList.add("ProgressBar");
    botonCancelar.classList.add("botonCancelar");
    botonCancelar.appendChild(textobotonCancelar);
    botonRepetirCaptura.appendChild(TextoRepetirCaptura);
    PlanetaSubiendo.appendChild(imagenPlanetaSubiendo);
    PlanetaSubiendo.appendChild(textoPlanetaSubiendo);
    botonSubir.appendChild(TextoSubir);
    divCamera.appendChild(ImageCamera);
    divTexto.appendChild(TextoCapturar);
    botonCapturar.appendChild(divCamera);
    botonCapturar.appendChild(divTexto);
    botonesChequeo.appendChild(botonCapturar);
    bodyChequeo.appendChild(imagenChequeo);
    bodyChequeo.appendChild(imagenPreviaGifs);
    bodyChequeo.appendChild(imagenSubiendo);
    bodyChequeo.appendChild(botonesChequeo);
    contenidoChequeo.appendChild(headingChequeo);
    contenidoChequeo.appendChild(bodyChequeo);
    botonesChequeo.appendChild(timer);
    botonesChequeo.appendChild(botonRepetirCaptura);
    botonesChequeo.appendChild(botonSubir);
    botonesChequeo.appendChild(botonCancelar);
    imagenSubiendo.appendChild(PlanetaSubiendo);
    imagenSubiendo.appendChild(ProgressBar);
    imagenSubiendo.appendChild(textProgressBar);
    ChequeoAntesComenzar.firstElementChild.appendChild(contenidoChequeo);
    video = imagenChequeo;
    imagenChequeo.style.display = "block";
    imagenPreviaGifs.style.display = "none";
    imagenSubiendo.style.display = "none";
    this.displayVideo();
  }

  ComenzarCaptura() {
    if (!botonCapturar.classList.contains("RecordingNow")) {
      recorder.startRecording();
      centisegundos = document.querySelector(".centisegundos");
      segundos = document.querySelector(".segundos");
      minutos = document.querySelector(".minutos");
      horas = document.querySelector(".horas");
      timer.startCronometro();

      botonCapturar.firstElementChild.firstElementChild.src = recording;
      botonCapturar.lastElementChild.firstElementChild.textContent = "Listo";
      botonCapturar.lastElementChild.firstElementChild.style.left = "54.5px";
      botonCapturar.firstElementChild.style.background = VigesimoSexto;
      botonCapturar.firstElementChild.style.border = `1px solid ${tercero}`;
      botonCapturar.firstElementChild.style.boxShadow = `inset -1px -1px 0 0 ${vigesimoSeptimo}, inset 1px 1px 0 0 ${septimo}`;
      botonCapturar.lastElementChild.firstElementChild.src = recording;
      botonCapturar.lastElementChild.style.background = VigesimoSexto;
      botonCapturar.lastElementChild.style.border = `1px solid ${tercero}`;
      botonCapturar.lastElementChild.style.boxShadow = `inset -1px -1px 0 0 ${vigesimoSeptimo}, inset 1px 1px 0 0 ${septimo}`;
      botonCapturar.lastElementChild.firstElementChild.style.color = septimo;
      botonCapturar.classList.add("RecordingNow");
      headingChequeo.firstElementChild.textContent = "Capturando Tu Guifo";
    } else {
      headingChequeo.firstElementChild.textContent = "Vista Previa";
      botonCapturar.classList.remove("RecordingNow");
      timer.StopCronometro();
      //imagenChequeo.style.display = "none";
      setTimeout(function () {
        recorder.stopRecording(function (blobURL) {
          imagenChequeo.style.display = "none";
          imagenPreviaGifs.style.display = "block";
          imagenPreviaGifs.src = blobURL;
          botonCapturar.style.display = "none";
          botonRepetirCaptura.style.display = "block";
          botonSubir.style.display = "block";
        });
      }, 3000);
    }
  }

  displayVideo() {
    p = navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        width: { exact: 832 },
        height: { exact: 440 },
      },
    });
    p.then((mediaStream) => {
      try {
        video.srcObject = mediaStream;
        recorder = RecordRTC(mediaStream, {
          type: "gif",
          frameRate: 1,
          quality: 10,
          width: 360,
          hidden: 240,
          onGifRecordingStarted: function () {
            console.log("started");
          },
        });
      } catch (error) {
        video.src = window.URL.createObjectURL(mediaStream);
      }
      video.onloadedmetadata = function (e) {
        video.play();
      };
    });
  }

  displayEstiloBusqueda() {
    if (inputBusqueda.value.length >= 1) {
      BotonBusqueda.classList.add("enable");
      sugerenciasSection.style.height = "424px";
      emptySugerenciasBusqueda.style.flex = "37.7";
      ui.displaySugerenciasQueAparecen(true);
      contenedorSugerenciasQueAparecen.style.background = decimoOctavo;
      contenedorSugerenciasQueAparecen.style.padding = "16px 17px";
      sugerenciasHeading.style.display = "none";
      SugerenciasEmpty2.style.display = "none";
      resultadosSugeridos = document.querySelectorAll(
        ".resultados-sugeridos .card"
      );
      for (let item of resultadosSugeridos) {
        item.style.height = "264px";
        let VerMasButton = (item.firstElementChild.style.display = "none");
      }
      if (botonDropdownPersonalizado.classList.contains("isDay")) {
        contenedorSugerenciasQueAparecen.style.background = decimoOctavo;
        contenedorSugerenciasQueAparecen.style.boxShadow = `inset -2px -2px 0 0 ${sexto}, inset 2px 2px 0 0 ${septimo}`;
        botonesSugerenciasQueAparecen = document.querySelectorAll(
          ".botonQueAparece button"
        );
        botonesSugerenciasQueAparecen[0].style.background = "";
        botonesSugerenciasQueAparecen[1].style.background = "";
        botonesSugerenciasQueAparecen[2].style.background = "";
        botonesSugerenciasQueAparecen[0].style.border = "";
        botonesSugerenciasQueAparecen[1].style.border = "";
        botonesSugerenciasQueAparecen[2].style.border = "";
        botonesSugerenciasQueAparecen[0].style.boxShadow = "";
        botonesSugerenciasQueAparecen[1].style.border = "";
        botonesSugerenciasQueAparecen[2].style.border = "";
        BotonBusqueda.firstElementChild.firstElementChild.src = activeLupa;
        BotonBusqueda.lastElementChild.firstElementChild.style.color = tercero;
        BotonBusqueda.style.background = primero;
        BotonBusqueda.style.border = `1px solid ${tercero}`;
        BotonBusqueda.style.boxShadow = `inset -1px -1px 0 0 ${cuarto}, inset 1px 1px 0 0 ${septimo}`;
      } else {
        botonesSugerenciasQueAparecen = document.querySelectorAll(
          ".botonQueAparece button"
        );
        botonesSugerenciasQueAparecen[0].style.background = vigesimoCuarto;
        botonesSugerenciasQueAparecen[1].style.background = vigesimoCuarto;
        botonesSugerenciasQueAparecen[2].style.background = vigesimoCuarto;
        botonesSugerenciasQueAparecen[0].style.border = `1px solid ${quinto}`;
        botonesSugerenciasQueAparecen[1].style.border = `1px solid ${quinto}`;
        botonesSugerenciasQueAparecen[2].style.border = `1px solid ${quinto}`;
        botonesSugerenciasQueAparecen[0].style.boxShadow = ` inset -1px -1px 0 0 ${sexto}, inset 1px 1px 0 0 ${septimo}`;
        botonesSugerenciasQueAparecen[1].style.border = ` inset -1px -1px 0 0 ${sexto}, inset 1px 1px 0 0 ${septimo}`;
        botonesSugerenciasQueAparecen[2].style.border = ` inset -1px -1px 0 0 ${sexto}, inset 1px 1px 0 0 ${septimo}`;
        contenedorSugerenciasQueAparecen.style.background = sexto;
        contenedorSugerenciasQueAparecen.style.boxShadow = `inset -2px -2px 0 0 ${decimoSexto}, inset 2px 2px 0 0 ${septimo}`;
        BotonBusqueda.firstElementChild.firstElementChild.src = activaDarkLupa;
        BotonBusqueda.lastElementChild.firstElementChild.style.color = septimo;
        BotonBusqueda.style.background = decimoTercero;
        BotonBusqueda.style.border = `1px solid ${tercero}`;
        BotonBusqueda.style.boxShadow = `inset -1px -1px 0 0 ${vigesimoTercero}, inset 1px 1px 0 0 ${septimo}`;
      }
    } else {
      BotonBusqueda.classList.remove("enable");
      ui.displaySugerenciasQueAparecen(false);
      contenedorSugerenciasQueAparecen.style.background = "";
      contenedorSugerenciasQueAparecen.style.boxShadow = "";
      sugerenciasSection.style.height = "428px";
      emptySugerenciasBusqueda.style.flex = "14.9";
      sugerenciasHeading.style.display = "block";
      SugerenciasEmpty2.style.display = "block";
      contenedorSugerenciasQueAparecen.style.padding = "0";
      resultadosSugeridos = document.querySelectorAll(
        ".resultados-sugeridos .card"
      );
      for (let item of resultadosSugeridos) {
        item.style.height = "313px";
        let VerMasButton = (item.firstElementChild.style.display = "");
      }
      if (botonDropdownPersonalizado.classList.contains("isDay")) {
        BotonBusqueda.firstElementChild.firstElementChild.src = inactiveLupa;
        BotonBusqueda.lastElementChild.firstElementChild.style.color = sexto;
        BotonBusqueda.style.background = decimoOctavo;
        BotonBusqueda.style.border = `1px solid ${quinto}`;
        BotonBusqueda.style.boxShadow = `inset -1px -1px 0 0 ${sexto}, inset 1px 1px 0 0 ${septimo}`;
      } else {
        BotonBusqueda.firstElementChild.firstElementChild.src = darkLupa;
        BotonBusqueda.lastElementChild.firstElementChild.style.color = decimoSexto;
        BotonBusqueda.style.background = sexto;
        BotonBusqueda.style.border = `1px solid ${quinto}`;
        BotonBusqueda.style.boxShadow = `inset -1px -1px 0 0 ${sexto}, inset 1px 1px 0 0 ${septimo}`;
      }
    }
  }

  displaySailorNight(SailorNightChoosen) {
    if (SailorNightChoosen) {
      document.querySelector(".boton-tipo-2 button .lupa img").src = darkLupa;
      botonDropdownPersonalizado.firstElementChild.firstElementChild.lastElementChild.firstElementChild.style.filter =
        "invert(100%)";
      ///////////////////cambiar estilo a elementos que aparecen dinamicamente//////////////////////////
      setTimeout(() => {
        resultadosSugeridos = document.querySelectorAll(
          ".resultados-sugeridos .card"
        );
        for (let item of resultadosSugeridos) {
          let VerMasButton =
            item.lastElementChild.lastElementChild.firstElementChild
              .firstElementChild;
          item.style.background = sexto;
          item.style.boxShadow = `inset -2px -2px 0 0 ${vigesimoSegundo}, inset 2px 2px 0 0 ${septimo}`;
          VerMasButton.style.background = decimoCuarto;
          VerMasButton.style.border = `1px solid ${decimo}`;
          VerMasButton.style.boxShadow = `inset -2px -2px 0 0 ${decimoQuinto}, inset 2px 2px 0 0 ${septimo}`;
          item.firstElementChild.style.background = `linear-gradient(270deg, ${decimoTercero} 0%, ${decimoCuarto} 100%)`;
        }
      }, 1000);

      /////////////////////////////cambiar estilo a elementos fijos del html///////////////////////////
      BodyOfdocument.style.backgroundColor = tercero;
      navegacion.style.backgroundImage = `linear-gradient(270deg, ${decimoTercero} 0%, ${decimoCuarto} 100%)`;
      landingLogo.src = darkLogo;
      BotonCrear.style.background = decimoTercero;
      BotonCrear.style.color = septimo;
      comboElegirTema1.style.background = decimoTercero;
      comboElegirTema1.style.color = septimo;
      comboElegirTema2.style.background = decimoTercero;
      enlace.style.color = septimo;
      ContenedorBusqueda.style.background = sexto;
      ContenedorBusqueda.style.padding = "2px";
      ContenedorBusqueda.style.boxShadow = `inset -2px -2px 0 0 ${decimoSexto}, inset 2px 2px 0 0 ${septimo}`;
      titulo.style.backgroundImage = `linear-gradient(270deg, ${decimoTercero} 0%, ${decimoCuarto} 100%)`;
      zonaBusqueda.style.background = sexto;
      BotonBusqueda.style.background = sexto;
      palabraBuscar.style.color = decimoSexto;
      sugerenciasHeading.style.border = `1px solid ${decimoCuarto}`;
      sugerenciasHeading.style.boxShadow = ` inset -2px -2px 0 0 ${noveno}, inset 2px 2px 0 0 ${tercero}`;
      tendenciasHeading.style.border = `1px solid ${decimoCuarto}`;
      tendenciasHeading.style.boxShadow = ` inset -2px -2px 0 0 ${noveno}, inset 2px 2px 0 0 ${tercero}`;
      listaTemas.style.background = sexto;
      listaTemas.style.boxShadow = `inset -2px -2px 0 0 ${decimoSexto}, inset 2px 2px 0 0 ${septimo}`;
      day.style.background = vigesimoCuarto;
      day.style.border = `1px solid ${quinto}`;
      day.style.boxShadow = `inset -1px -1px 0 0 ${sexto}, inset 1px 1px 0 0 ${septimo}`;
      night.style.background = decimoCuarto;
      night.style.border = ` 1px solid rgba(51,53,143,0.20)`;
      night.style.boxShadow = `inset -1px -1px 0 0 ${vigesimoQuinto}, inset 1px 1px 0 0 ${septimo}`;
      night.style.color = septimo;
      day.firstElementChild.style.textDecoration = "none";
      night.firstElementChild.style.textDecoration = "underline";
    } else {
      document.querySelector(
        ".boton-tipo-2 button .lupa img"
      ).src = inactiveLupa;
      botonDropdownPersonalizado.firstElementChild.firstElementChild.lastElementChild.firstElementChild.style.filter =
        "";
      ///////////////////cambiar estilo a elementos que aparecen dinamicamente//////////////////////////
      setTimeout(() => {
        resultadosSugeridos = document.querySelectorAll(
          ".resultados-sugeridos .card"
        );
        for (let item of resultadosSugeridos) {
          let VerMasButton =
            item.lastElementChild.lastElementChild.firstElementChild
              .firstElementChild;
          item.style.background = "";
          item.style.boxShadow = "";
          VerMasButton.style.background = "";
          VerMasButton.style.border = "";
          VerMasButton.style.boxShadow = "";
          item.firstElementChild.style.background = "";
        }
      }, 1000);

      /////////////////////////////cambiar estilo a elementos fijos del html///////////////////////////
      BodyOfdocument.style.backgroundColor = "";
      navegacion.style.backgroundImage = "";
      landingLogo.src = lightLogo;
      BotonCrear.style.background = "";
      BotonCrear.style.color = "";
      comboElegirTema1.style.background = "";
      comboElegirTema1.style.color = "";
      comboElegirTema2.style.background = "";
      enlace.style.color = "";
      ContenedorBusqueda.style.background = "";
      ContenedorBusqueda.style.padding = "";
      ContenedorBusqueda.style.boxShadow = "";
      titulo.style.backgroundImage = "";
      zonaBusqueda.style.background = "";
      BotonBusqueda.style.background = "";
      palabraBuscar.style.color = "";
      sugerenciasHeading.style.border = "";
      sugerenciasHeading.style.boxShadow = "";
      tendenciasHeading.style.border = "";
      tendenciasHeading.style.boxShadow = "";
      listaTemas.style.background = "";
      listaTemas.style.boxShadow = "";
      day.style.background = "";
      day.style.border = "";
      day.style.boxShadow = "";
      night.style.background = "";
      night.style.border = "";
      night.style.boxShadow = "";
      night.style.color = "";
      day.firstElementChild.style.textDecoration = "";
      night.firstElementChild.style.textDecoration = "";
    }
  }
  ShowModalWindow() {
    if (!modalWindowSection.classList.contains("modalActive")) {
      //////ocultar botones
      botonDropdownPersonalizado.style.display = "none";
      BotonCrear.style.display = "none";
      botonMisGifos.style.display = "None";
      BusquedaSection.style.display = "none";
      modalWindowSection.classList.add("modalActive");
      sugerenciasSection.style.display = "none";

      //////agregar texto encabezado
      let CrearHeader = document.createElement("h3");
      CrearHeader.textContent = "Crear Gifos";
      modalWindowSection.firstElementChild.firstElementChild.appendChild(
        CrearHeader
      );

      ////agregar secciones al body
      ////crear elementos html
      let seccionTitulo = document.createElement("div");
      let seccionTituloImagen = document.createElement("div");
      seccionTituloImagen.appendChild(document.createElement("img"));
      let seccionTituloParrafo = document.createElement("h3");
      seccionTitulo.appendChild(seccionTituloImagen);
      seccionTitulo.appendChild(seccionTituloParrafo);
      let seccionBody = document.createElement("div");
      let list = document.createElement("ul");
      for (let i = 0; i < 4; i++) {
        list.appendChild(document.createElement("li"));
      }
      seccionBody.appendChild(document.createElement("p"));
      seccionBody.appendChild(list);
      seccionBody.appendChild(document.createElement("p"));
      let seccionBotones = document.createElement("div");
      let boton1 = document.createElement("button");
      let boton2 = document.createElement("button");
      let texto1 = document.createElement("h3");
      let texto2 = document.createElement("h3");
      texto1.textContent = "Cancelar";
      texto2.textContent = "Comenzar";
      boton1.appendChild(texto1);
      boton2.appendChild(texto2);
      boton1.classList.add("boton-1-modal");
      boton2.classList.add("boton-2-modal");
      seccionTitulo.classList.add("seccionTitulo");
      seccionBody.classList.add("seccionBody");
      seccionBotones.classList.add("seccionBotones");
      ///agregar texto a elementos html
      seccionTitulo.firstElementChild.firstElementChild.src = modalWindow; //////////////////////////
      seccionTitulo.lastElementChild.textContent =
        "Aquí podrás crear tus propios guifos";
      seccionBody.firstElementChild.innerHTML =
        "Crear tu <span>guifo</span> es muy fácil, graba cualquier imagen" +
        "con tu cámara y obtén guifos personalizados. Los pasos para crear tu guifo son:";
      seccionBody.firstElementChild.nextElementSibling.firstElementChild.innerHTML =
        "<span>1)</span> Dar permisos de acceso a la cámara (sólo por el tiempo de uso)";
      seccionBody.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerHTML =
        "<span>2)</span> Capturar tu momento guifo";
      seccionBody.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.innerHTML =
        "<span>3)</span> Revisar el momento";
      seccionBody.firstElementChild.nextElementSibling.lastElementChild.innerHTML =
        "<span>4)</span> Listo para subir y compartir!";
      seccionBody.lastElementChild.innerHTML =
        "¿Quieres comenzar a crear tu <span>guifo</span> ahora?";
      seccionBotones.appendChild(boton1);
      seccionBotones.appendChild(boton2);
      ///adjuntar hijos al body
      modalWindowSection.firstElementChild.lastElementChild.appendChild(
        seccionTitulo
      );
      modalWindowSection.firstElementChild.lastElementChild.appendChild(
        seccionBody
      );
      modalWindowSection.firstElementChild.lastElementChild.appendChild(
        seccionBotones
      );
    } else {
      BusquedaSection.style.display = "";
      modalWindowSection.classList.remove("modalActive");
      sugerenciasSection.style.display = "";
      modalWindowSection.firstElementChild.firstElementChild.firstElementChild.remove();
      modalWindowSection.firstElementChild.lastElementChild.firstElementChild.remove();
      modalWindowSection.firstElementChild.lastElementChild.firstElementChild.remove();
      modalWindowSection.firstElementChild.lastElementChild.firstElementChild.remove();
    }
  }
}
