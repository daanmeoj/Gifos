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
  botonesSugerenciasQueAparecen,
  barraReproduccion,
  intervalProgressBarSubiendo,
  counterProgressBar = 0,
  closeIconCapturar;

///////////////////////////////diccionario palabras//////////////////////////////////////////

let palabrasMasBuscadasGoogle2019 =
  "Koala Chimpance Cocodrilo Karateca Karma kamikaze karaoke kilometro fotos hotel madrid barcelona gratis juegos videos contactos coches españa video alquiler google hoteles motos tv valencia venta casa chat español foro musica sevilla trabajo free ofertas peliculas piso vivienda web accesorios descarga diario messenger mujer mujeres paginas pc viajes casas chicas cine futbol granada imagenes juego malaga mp3 videos gratis zaragoza alicante amor blog callejero comprar deportes en alquiler internet pisos putas segunda mano trucos andalucia apartamentos baratos compra comunidad cursos empleo famosas libros noticias seguridad alquiler piso amateur bilbao chica compartir empresas galicia juegos gratis modelos paris playa programacion programas relaciones salud turismo adsl bajar compartir piso descargas desde foros foros horoscopo piso en alquiler tarragona television billetes bolsa catalunya compraventa diseño fiesta fiestas girona hombres ibiza inmobiliaria maduras motor real madrid seguros alquiler pisos anuncios elecciones flores jugar manga moviles resultados sms tu tv vacaciones viaje belleza color girls londres novia ofertas de viajes ofertas viajes piso madrid sabadell spain tarot alojamiento amigos anuncio apuestas ayuda baloncesto bcn bodas cataluña chistes conciertos culos euro firefox gente gobierno informatica inmobiliarias locales masajes prensa publicidad tias trabajar villa web de web messenger zapatillas amistad chicos juegos online lleida parejas piso en venta por que programacion tv regalos salud y belleza tdt tenis tuporno tv venta piso ventas viajar videos mujeres viviendas vuelo a coruña apartamento barato citas deporte dieta dinero famosos fincas guarras mantenimiento marketing pareja peso pisos en alquiler regalo servidores televisores xx adultos alquilar alquiler de pisos amateurs badalona calientes castilla y leon chalet chatear compartir piso madrid egipto el amor electricidad eventos gimnasio gordas hasta hipoteca humor juegos de chicas juegos para chicas novedades ocio ordenadores padel pagina web pillados plantillas prestamos promociones venta casas venta pisos ver videos what i ve done www con alquileres barça casero cita contacto cruceros dibujos para colorear dietas finca fotos chicas ";

let palabrasClavesGoogle2019EnIngles =
  "Keywords facebook youtube google gmail hotmail amazon translator  facebook login yahoo google translate yahoomail google maps ebay whatsapp porn instagram traductor weather redtube netflix outlook pokemon go twitter xhamster fahrenheit youporn olx craigslist msn grammes free porn beeg youtube mp3 snapchat you messenger news sex videos pornotube ali express walmart bbc news google trad clash of clans linkedin tubidy pinterest vminecraft glob whatsapp web mincraft badoo bideo porno video porn ikea live score cnn cable news network e okul youtube to mp3 olympics auol uolo speed test speedometer test minecraft traduttore game games paypal tiempos daily mail pornhub crikbuzz sahibinden MercadoLibre ok google libero mail milliyet bild marca marcar google tradutor euro 2016 google onedrive ryanair traduttor myn skype aleg espn ebay kleinanzeigen factory automation football association mail mailen mails nynet beezars allegro convertidos sexuality video wp sex videos flipkart home depot home-depot hotel hotelaria restaurant restauration fox news iphone 7 chaturbate ebay uk national basketball association nba g drive google drive bet365 pokemom after service akciova spolecnost dropbox bed 365 bookers booking zalando oranges calcu omegle indeed calculator calculators mp3 pandora target zara airbnb best buy brazzers irctc cricbuzz uc browser phim sex gmx satta matka tubemate traductor google juegos hotels putlocker donald trump patriot ordnance factory pof restaurants bbc sports wells fargo pirate bay tumblr office 365 office365 youtube converter goggle docs billionaire boys club bbc wikipedia el mundo traduzir cam4 leboncoin pizza hut pizzahut deals santander hentai el pais subway surfers brazzer brazzers roblox soundcloud bank of america google play gum tree spotify dominos interia goggle chrome staeam steam international mathematics olympiad playstore apple groupon itube.com amazon uk amazon united kingdom cricinfo argos atgis augos tube8 xxx video facebook lite adna klasnik odnoklassniki imdb aol mail aol mailbox sports man united justin bieber state bank india online american online inc sbi online google docs backpages lowes cosco aol bing wwe anti virus dich hdfc netbanking auto trader candy crush perfect girl expedia vodafone adidas porn tube pornstar tube kooora trivago liber nike viber google chrome chrome chromed trip advisor automated surface observing system whatsapp messenger line macys skyscanner facebook en espa ol decathlon shareit snap deal snapdeal 24h internet movie database banco de venezuela reddit icloud uber trump game of thrones aright move peppa pig deadpool national football league nfl samsung world star hip hop aloewishes anime goog mp3xd lotto meenakshisundaram metros monsieur alvyda american airlines ansaa flashscore real madrid itunes accuweather yandex youtube downloader capital one dailymotion hsbc email pages jaunes google earth mcdonalds asck clean master amazon prime ask imo porno gratis pornogratis usps tracking zillows kohls paytm gta costco facebook messenger happy wheels kim kardashian porn video toys r us cricket scoreboard cricket scores traducir mercado libre mexican restaurants near me nfl scores dravi star wars google scholar cooi math gams cool math game solitaire afton bladet google news google images tinder chase goggle images caf iltalehti vpn goggle news iphone 6s selena gomez mp3 converter aresanel driver suicide squad mobile mobili wallpapers wc forever 21 powerball ticketmaster web whatsapp a erocam aor omes asrnel bbc weather hotmaillogin corrosion of conformity windows 10 easyjet hot litre mapquest vn express kizi youtube videos bradesco lol clarin photo edit photography editing trenitalia candy crush saga fanatik mappy b6 12 meteos celsius firefox grand theft auto greater toronto area kik next victoria secret sexo teamviewer etsy bla bla car indian railway lazada pnr-status hotstar x video bidmate jogos mfacebook la caixa t-mobile hillary clinton restaurant near me ymz tmz Ariana Grande sky news mp3 juice ig cool math the walking dead ilta-sanomat arsenal asana barca barcelona barcelonistas sky sports ultimate fighting championship taylor swift banisteriopsis general motors genetically modified gm le monde web kurir chased prince 123movies kayak b lic minion music downloader youtube music edmodo cars hola att happy birthday dee iphone 6 wish papa johns sat major league baseball mlb australian broadcasting corporation index indexer credit karma snap tube aloha tube banco estado kickass aphotoshop abc fifa 16 db deutsche bahn iphone 5s actualitees messi kylie jenner utorrent image terra google classrooms rediffmail torrents extra torrent xdj starbucks movies matka wordreference anime sarkari result retrica 4shared kahoot habe ups track 9 gag antozone auroson auroxone gazeteler tesco bank2u downloads mango ok qvc unicredit banco bilbao vizcaya argentaria bbvas horoscope 24 sata baqnesco credit agricole bed bath and beyond buienradar old navy are";

let otherWords =
  "ability able about above accept according account across act action activity actually add address administration admit adult affect after again against age agency agent ago agree agreement ahead air all allow almost alone along already also although always American among amount analysis and animal another answer any anyone anything appear apply approach area argue arm around arrive art article artist as ask assume at attack attention attorney audience author authority available avoid away baby back bad bag ball bank bar base be beat beautiful because become bed before begin behavior behind believe benefit best better between beyond big bill billion bit black blood blue board body book born both box boy break bring brother budget build building business but buy by call camera campaign can cancer candidate capital car card care career carry case catch cause cell center central century certain certainly chair challenge chance change character charge check child choice choose church citizen city civil claim class clear clearly close coach cold collection college color come commercial common community company compare computer concern condition conference Congress consider consumer contain continue control cost could country couple course court cover create crime cultural culture cup current customer cut dark data daughter day dead deal death debate decade decide decision deep defense degree Democrat democratic describe design despite detail determine develop development die difference different difficult dinner direction director discover discuss discussion disease do doctor dog door down draw dream drive drop drug during each early east easy eat economic economy edge education effect effort eight either election else employee end energy enjoy enough enter entire environment environmental especially establish even evening event ever every everybody everyone everything evidence exactly example executive exist expect experience expert explain eye face fact factor fail fall family far fast father fear federal feel feeling few field fight figure fill film final finally financial find fine finger finish fire firm first fish five floor fly focus follow food foot for force foreign forget form former forward four free friend from front full fund future game garden gas general generation get girl give glass go goal good government great green ground group grow growth guess gun guy hair half hand hang happen happy hard have he head health hear heart heat heavy help her here herself high him himself his history hit hold home hope hospital hot hotel hour house how however huge human hundred husband I idea identify if image imagine impact important improve in include including increase indeed indicate individual industry information inside instead institution interest interesting international interview into investment involve issue it item its itself job join just keep key kid kill kind kitchen know knowledge land language large last late later laugh law lawyer lay lead leader learn least leave left leg legal less let letter level lie life light like likely line list listen little live local long look lose loss lot love low machine magazine main maintain major majority make man manage management manager many market marriage material matter may maybe me mean measure media medical meet meeting member memory mention message method middle might military million mind minute miss mission model modern moment money month more morning most mother mouth move movement movie Mr Mrs much music must my myself name nation national natural nature near nearly necessary need network never new news newspaper next nice night no none nor north not note nothing notice now n't number occur of off offer office officer official often oh oil ok old on once one only onto open operation opportunity option or order organization other others our out outside over own owner page pain painting paper parent part participant particular particularly partner party pass past patient pattern pay peace people per perform performance perhaps period person personal phone physical pick picture piece place plan plant play player PM point police policy political politics poor popular population position positive possible power practice prepare present president pressure pretty prevent price private probably problem process produce product production professional professor program project property protect prove provide public pull purpose push put quality question quickly quite race radio raise range rate rather reach read ready real reality realize really reason receive recent recently recognize record red reduce reflect region relate relationship religious remain remember remove report represent Republican require research resource respond response responsibility rest result return reveal rich right rise risk road rock role room rule run safe same save say scene school science scientist score sea season seat second section security see seek seem sell send senior sense series serious serve service set seven several sex sexual shake share she shoot short shot should shoulder show side sign significant similar simple simply since sing single sister sit site situation six size skill skin small smile so social society soldier some somebody someone something sometimes son song soon sort sound source south southern space speak special specific speech spend sport spring staff stage stand standard star start state statement station stay step still stock stop store story strategy street strong structure student study stuff style subject success successful such suddenly suffer suggest summer support sure surface system table take talk task tax teach teacher team technology television tell ten tend term test than thank that the their them themselves then theory there these they thing think third this those though thought thousand threat three through throughout throw thus time to today together tonight too top total tough toward town trade traditional training travel treat treatment tree trial trip trouble true truth try turn TV two type under understand unit until up upon us use usually value various very victim view violence visit voice vote wait walk wall want war watch water way we weapon wear week weight well west western what whatever when where whether which while white who whole whom whose why wide wife will win wind window wish with within without woman wonder word work worker world worry would write writer wrong yard yeah year yes yet you young your yourself";

let palabras =
  palabrasMasBuscadasGoogle2019 + palabrasClavesGoogle2019EnIngles + otherWords;

var sortAlphabets = function (text) {
  return text.split(" ").sort().join(",");
};

const unique = (value, index, self) => {
  return self.indexOf(value) === index;
};

const uniqueWords = sortAlphabets(palabras).split(",").filter(unique);

/////////////////////////////////////////////////////////////////////////////////////////////

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
                      <img src="./assets/close.svg" alt="sugerencias">
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

    setTimeout(function () {
      document
        .querySelector(".resultados-sugeridos")
        .addEventListener("click", function (e) {
          if (e.target.innerHTML === "Ver mas...") {
            //this.displaySugerenciasQueAparecen(true, inputBusqueda.value);
            let palabraclave = e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.innerHTML.replace(
              "#",
              ""
            );
            let text = palabraclave;
            var result = text.replace(/([A-Z])/g, " $1");
            var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
            sugerenciasSection.style.display = "none";
            const gifs = new GiphyAPI();
            serverResponse = gifs.getGifsByName(24, finalResult);
            serverResponse
              .then((gifs) => {
                ui.displayBusqueda(gifs.gifs.data, finalResult);
              })
              .catch(function (error) {
                console.log("funcion displaySugerencias fallo");
              });
          }
        });
    }, 1000);
  }

  displayTendencias(gifs) {
    const results = document.querySelector("#resultados-tendencias");
    let particularIndex = 8;
    gifs.forEach((gif, index) => {
      if (index > 3) {
        if (index === particularIndex) {
          results.innerHTML += `
          <div class="card particularCard">
              <img src="${gif.images.original.url}" alt="tendencias">
              <div class="cabeceraGif">${gif.title
                .substring(0, gif.title.indexOf("GIF"))
                .replace(/ /g, " #")}</div>
          </div>`;
          particularIndex += 5;
        } else {
          results.innerHTML += `
          <div class="card">
              <img src="${gif.images.original.url}" alt="tendencias">
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
                        <img src="${gif}" alt="GifLocal">
                    </div>`;
      particularIndexLocal += 5;
    } else {
      results.innerHTML += `
                    <div class="card">
                       <img src="${gif}" alt="GifLocal">
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
              <img src="${gif.images.original.url}" alt="busqueda">
          </div>`;
          particularIndex += 5;
        } else {
          results.innerHTML += `
          <div class="card">
              <img src="${gif.images.original.url}" alt="busqueda">
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

  Suggestionswords(SearchTerm) {
    return uniqueWords.filter(function (word) {
      return word.startsWith(SearchTerm);
    });
  }

  displaySugerenciasQueAparecen(DebenAparacerElementos, inputBusqueda) {
    if (DebenAparacerElementos) {
      if (this.Suggestionswords(inputBusqueda)[0] === undefined) {
        contenedorSugerenciasQueAparecen.innerHTML = `<div class="botonQueAparece boton1"><button><h3>pascua</h3></button></div>`;
      } else {
        contenedorSugerenciasQueAparecen.innerHTML = `
      <div class="botonQueAparece boton1"><button><h3>${
        this.Suggestionswords(inputBusqueda)[0]
      }</h3></button></div>`;
      }
      if (this.Suggestionswords(inputBusqueda)[1] === undefined) {
        contenedorSugerenciasQueAparecen.innerHTML += `<div class="botonQueAparece boton1"><button><h3>colombia</h3></button></div>`;
      } else {
        contenedorSugerenciasQueAparecen.innerHTML += `
      <div class="botonQueAparece boton1"><button><h3>${
        this.Suggestionswords(inputBusqueda)[1]
      }</h3></button></div>`;
      }
      if (this.Suggestionswords(inputBusqueda)[2] === undefined) {
        contenedorSugerenciasQueAparecen.innerHTML += `<div class="botonQueAparece boton1"><button><h3>trump</h3></button></div>`;
      } else {
        contenedorSugerenciasQueAparecen.innerHTML += `
      <div class="botonQueAparece boton1"><button><h3>${
        this.Suggestionswords(inputBusqueda)[2]
      }</h3></button></div>`;
      }
    } else {
      contenedorSugerenciasQueAparecen.innerHTML = ``;
    }
  }

  HideSections() {
    BusquedaSection.style.display = "none";
    sugerenciasSection.style.display = "none";
  }

  ChangeStyleToSubiendoGuifo() {
    document.querySelector(".closeIconCapturar").style.display = "block";
    document.querySelector(".imagenPrevia").style.display = "none";
    document.querySelector(".imagenSubiendo").style.display = "block";
    botonRepetirCaptura.style.display = "none";
    barraReproduccion.style.display = "none";
    botonSubir.style.display = "none";
    document.querySelector(".timer").style.display = "none";
    botonCancelar.style.display = "block";
    headingChequeo.firstElementChild.textContent = "Subiendo Guifo";
    intervalProgressBarSubiendo = window.setInterval(function () {
      if (counterProgressBar === 23) {
        counterProgressBar = 0;
        console.log(counterMinutos);
      }
      console.log(document.querySelector(".elem" + counterProgressBar));
      document.querySelector(".elem" + counterProgressBar).style.background =
        "#F7C9F3";
      counterProgressBar++;
    }, 1000);
  }

  ChangeStyleToGifoSubido() {
    clearInterval(intervalProgressBarSubiendo);
    document.querySelector(".closeIconCapturar").style.left = "695px";

    document.querySelector(".headingChequeo").firstElementChild.innerHTML =
      "Guifo Subido Con Éxito";

    //   "Guifo Subido Con Éxito";
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
    closeIconCapturar = document.createElement("div");
    closeIconCapturar.classList.add("closeIconCapturar");
    let closeIconCapturarImagen = document.createElement("img");
    closeIconCapturarImagen.src = closeIconImg;
    closeIconCapturarImagen.alt = "close icon";
    closeIconCapturar.appendChild(closeIconCapturarImagen);
    barraReproduccion = document.createElement("div");
    let botonPlay = document.createElement("div");
    let barraProgresoReproduccion = document.createElement("div");
    let contenedorDivsProgreso = document.createElement("div");
    contenedorDivsProgreso.classList.add("contenedorDivsProgreso");
    for (let i = 0; i < 17; i++) {
      let element = document.createElement("div");
      element.classList.add("progressDiv");
      element.classList.add("index" + i);
      contenedorDivsProgreso.appendChild(element);
    }
    barraProgresoReproduccion.appendChild(contenedorDivsProgreso);
    let imagenBotonPlay = document.createElement("img");
    imagenBotonPlay.alt = "imagenBotonPlay";
    imagenBotonPlay.src = svgBotonPlay;
    imagenBotonPlay.classList.add("imagenBotonPlay");
    botonPlay.appendChild(imagenBotonPlay);
    barraReproduccion.classList.add("barraReproduccion");
    botonPlay.classList.add("botonPlay");
    barraProgresoReproduccion.classList.add("barraProgresoReproduccion");
    barraReproduccion.appendChild(botonPlay);
    barraReproduccion.appendChild(barraProgresoReproduccion);
    botonRepetirCaptura = document.createElement("button");
    botonSubir = document.createElement("button");
    botonCancelar = document.createElement("button");
    let timer = document.createElement("div");
    let textTimer = document.createElement("h3");
    divCamera = document.createElement("div");
    let divTexto = document.createElement("div");
    let ImageCamera = document.createElement("img");
    ImageCamera.alt = "imagen camara";
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
    imagenPreviaGifs.alt = "imagen previa gif";
    imagenSubiendo = document.createElement("div");
    PlanetaSubiendo = document.createElement("div");
    imagenPlanetaSubiendo = document.createElement("img");
    imagenPlanetaSubiendo.src = imagenPlanetaPng;
    imagenPlanetaSubiendo.alt = "imagen planeta subiendo";
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
      BarsContainer.innerHTML += `<div class="ProgressElement elem${i}"></div>`;
    }
    TextoHeadingChequeo.textContent = "Un Chequeo Antes de Empezar";
    TextoSubir.textContent = "Subir Guifo";
    TextoRepetirCaptura.textContent = "Repetir Captura";
    headingChequeo.appendChild(TextoHeadingChequeo);
    headingChequeo.appendChild(closeIconCapturar);
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
    botonesChequeo.appendChild(barraReproduccion);
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
    barraReproduccion.style.display = "none";
    this.displayVideo();
  }

  ComenzarCaptura() {
    if (!botonCapturar.classList.contains("RecordingNow")) {
      recorder.startRecording();
      centisegundos = document.querySelector(".centisegundos");
      segundos = document.querySelector(".segundos");
      minutos = document.querySelector(".minutos");
      horas = document.querySelector(".horas");
      botonCapturar.style.display = "none";
      headingChequeo.firstElementChild.textContent = "Capturando Tu Guifo";
    } else {
      headingChequeo.firstElementChild.textContent = "Vista Previa";
      document.querySelector(".closeIconCapturar").style.display = "none";
      botonCapturar.classList.remove("RecordingNow");
      timer.StopCronometro();

      recorder.stopRecording(function (blobURL) {
        imagenChequeo.style.display = "none";
        imagenPreviaGifs.style.display = "block";
        imagenPreviaGifs.src = blobURL;
        botonCapturar.style.display = "none";
        botonRepetirCaptura.style.display = "block";
        botonSubir.style.display = "block";
        barraReproduccion.style.display = "block";
      });
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
            timer.startCronometro();
            botonCapturar.style.display = "block";
            botonCapturar.firstElementChild.firstElementChild.src = recording;
            botonCapturar.lastElementChild.firstElementChild.textContent =
              "Listo";
            botonCapturar.lastElementChild.firstElementChild.style.left =
              "54.5px";
            botonCapturar.firstElementChild.style.background = VigesimoSexto;
            botonCapturar.firstElementChild.style.border = `1px solid ${tercero}`;
            botonCapturar.firstElementChild.style.boxShadow = `inset -1px -1px 0 0 ${vigesimoSeptimo}, inset 1px 1px 0 0 ${septimo}`;
            botonCapturar.lastElementChild.firstElementChild.src = recording;
            botonCapturar.lastElementChild.style.background = VigesimoSexto;
            botonCapturar.lastElementChild.style.border = `1px solid ${tercero}`;
            botonCapturar.lastElementChild.style.boxShadow = `inset -1px -1px 0 0 ${vigesimoSeptimo}, inset 1px 1px 0 0 ${septimo}`;
            botonCapturar.lastElementChild.firstElementChild.style.color = septimo;
            botonCapturar.classList.add("RecordingNow");
          },
        });
      } catch (error) {
        video.src = window.URL.createObjectURL(mediaStream);
      }
      video.onloadedmetadata = function (e) {
        video.play();
      };
    }).catch(console.log("funcion displayVideo fallo"));
  }

  displayEstiloBusqueda() {
    if (inputBusqueda.value.length >= 1) {
      setTimeout(function () {
        try {
          contenedorSugerenciasQueAparecen.firstElementChild.addEventListener(
            "click",
            function (e) {
              inputBusqueda.value = e.target.textContent;
            }
          );
          contenedorSugerenciasQueAparecen.firstElementChild.nextElementSibling.addEventListener(
            "click",
            function (e) {
              inputBusqueda.value = e.target.textContent;
            }
          );
          contenedorSugerenciasQueAparecen.lastElementChild.addEventListener(
            "click",
            function (e) {
              inputBusqueda.value = e.target.textContent;
            }
          );
        } catch (error) {
          //console.log(error);
        }
      }, 1000);
      BotonBusqueda.classList.add("enable");
      sugerenciasSection.style.height = "424px";
      emptySugerenciasBusqueda.style.flex = "37.7";
      ui.displaySugerenciasQueAparecen(true, inputBusqueda.value);
      contenedorSugerenciasQueAparecen.style.background = decimoOctavo;
      contenedorSugerenciasQueAparecen.style.padding = "16px 17px";
      sugerenciasHeading.style.display = "none";
      SugerenciasEmpty2.style.display = "none";

      let imagenesAparecidas = document.querySelectorAll(
        ".resultados-sugeridos .card .gif img"
      );

      //////////moviendo imagenes hacia arriba/////////
      // document.querySelector("#sugerencias-empty-1").style.zIndex = "1000";

      // for (let i = 0; i < 4; i++) {
      //   imagenesAparecidas[i].style.position = "absolute";
      //   imagenesAparecidas[i].style.bottom = "-265px";
      // }

      /////////////////////////////

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
      ui.displaySugerenciasQueAparecen(false, "");
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

        resultadosTen = document.querySelectorAll(
          ".resultados-tendencias .card"
        );

        for (let item of resultadosTen) {
          item.lastElementChild.style.background =
            "linear-gradient(270deg, #EE3EFE 0%, #2E32FB 100%)";
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

        resultadosTen = document.querySelectorAll(
          ".resultados-tendencias .card"
        );

        for (let item of resultadosTen) {
          item.lastElementChild.style.background = "";
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
