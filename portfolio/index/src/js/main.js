const FORM = (bg,text,id,title,desc,img,gh,cs,bgNd,c) =>{
    return (
        `
        <div
        class="${bg} me-md-3 pt-3 px-3 pt-md-5 text-center ${text}  d-flex flex-column justify-content-between position-relative overflow-hidden " style="z-index: 1;height:100%;">
      
        <div class="my-3 py-3 px-md-5 position-relative" style="z-index: 2;">
          <h2 class="display-5">${title}</h2>
          <p class="lead ps-3 pe-3">
            ${desc}
          </p>
        </div>



        <div>

        
        <div
        id="proj-${c}"
          class="shadow-sm mx-auto proj-hover ${bgNd} d-flex justify-content-center align-items-center position-relative" 
          style="width: 100%; height: 400px; border-radius: 0px 0px 0 0;z-index: 2;" onclick="clickProj(${c})"
        >
          <div style="width: 95%; height: 90%">
            <div
              class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
              style="
                background-image: url('${img}');
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
              "
            >
            
            </div>
          </div>
        </div>
      
        <ul class="d-flex list-unstyled mt-auto position-absolute bottom-0" style="z-index: 3; width: 80%; left: 50%; transform: translateX(-50%);">
        <li class="me-auto">
            <a
              class="btn btn-light rounded-0 text-primary border shadow"
              href="${gh}"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                />
              </svg>
            </a>
          </li>
          <li class="d-flex align-items-center  ${text}">
    
            <a
              class="btn btn-light rounded-0 text-primary border shadow"
              href="${cs}"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-link-45deg"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"
                />
                <path
                  d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      





        ${id == 0 ? `` : `<div id="${id}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;"></div>`}

      </div>
        `
    )
}


document.getElementById('filatre').innerHTML = FORM(
    "bg-blue",
    "text-white",
    "pink-particles-js",
    "FilaTre Online",
    "Sito per giocare a FilaTre in compagnia. Crea una partita e aspetta l'avversario o condividi il link di accesso ad un amico.",
    "https://raw.githubusercontent.com/vittorioPiotti/FilaTreOnline/main/FilaTreOnline/imgs/home.png",
    "https://github.com/vittorioPiotti/FilaTreOnline",
    "https://vittoriopiotti.altervista.org/FilaTre/Online/index.php",
    "bg-light",0
);
document.getElementById('gestioneHotelSito').innerHTML = FORM(
    "bg-green",
    "text-dark",
    "green-particles-js",
    "Gestione Hotel Sito",
    "Sito per gestire lato cliente le prenotazioni delle stanze in un hotel e lato admin gli hotel e le stanze da visualizzare.",
    "https://github.com/vittorioPiotti/Gestione-Hotel-PHP/blob/main/first.png?raw=true",
    "https://github.com/vittorioPiotti/Gestione-Hotel-PHP",
    "http://vittoriopiotti.altervista.org/GestioneHotels/Online/Client/index.php",
    "bg-light",1
);

document.getElementById('gestioneHotelApp').innerHTML = FORM(
    "bg-green",
    "text-dark",
    "green-second-particles-js",
    "Gestione Hotel App",
    " App per Android e IOS per gestire lato cliente le prenotazioni delle stanze in un hotel",
    "https://github.com/vittorioPiotti/Gestione-Hotel-React-Native/blob/main/mockup.png?raw=true",
    "https://github.com/vittorioPiotti/Gestione-Hotel-React-Native",
    "https://sl2gz4.csb.app/GestioneHotel",
    "bg-light",2
);

document.getElementById('dijkstra').innerHTML = FORM(
    "bg-green",
    "text-white",
    "blue-particles-js",
    "Dijkstra Solver",
    "Sito per la risoluzione di Dijkstra con calcolo di tutti i cammini minimi da grafici che l'utente può creare o importare da Json.",
    "https://raw.githubusercontent.com/vittorioPiotti/Dijkstra-Bootstrap/main/desktop.png",
    "https://github.com/vittorioPiotti/Dijkstra-Bootstrap",
    "https://7khz9k.csb.app/Dijkstra",
    "bg-light",3
);


document.getElementById('bingo').innerHTML = FORM(
    "bg-green",
    "text-dark",
    "yellow-particles-js",
    "Bingo",
    "Sito web per giocare a bingo comprando i quadranti del tabellone o le cartelle.",
    "https://github.com/vittorioPiotti/Bingo-Bootstrap/blob/main/preview.png?raw=true",
    "https://github.com/vittorioPiotti/Bingo-Bootstrap",
    "https://6l2tn4.csb.app/Bingo",
    "bg-light",4
);


document.getElementById('calendario').innerHTML = FORM(
    "bg-light",
    "text-dark",
    0,
    "Calendario App",
    "App per Android e IOS da cui selezionare la data di inizio e di fine di un periodo di tempo. Utile per registrare prenotazioni.",
    "https://github.com/vittorioPiotti/Calendario-React-Native/raw/main/screenshot.PNG",
    "https://github.com/vittorioPiotti/Calendario-React-Native",
    "https://ygmq5s.csb.app/Calendario",
    "bg-white",5
);



document.getElementById('calcolatrice').innerHTML = FORM(
    "bg-light",
    "text-dark",
    0,
    "Calcolatrice App",
    "Calcolatrice per Android e IOS. L'interfaccia dell'app è un clone di quella della calcolatrice di IOS",
    "https://github.com/vittorioPiotti/Calcolatrice-React-Native/blob/main/shot.png?raw=true",
    "https://github.com/vittorioPiotti/Calcolatrice-React-Native",
    "https://h7mfqc.csb.app/Calcolatrice",
    "bg-white",6
);












 const clickProj = (c) =>{
    document.getElementById(`proj-${c}`).classList.remove('proj-hover');

    document.getElementById(`proj-${c}`).classList.add('proj-clicked');
  
   

    setTimeout(() => {
       document.getElementById(`proj-${c}`).classList.add('proj-hover');
       document.getElementById(`proj-${c}`).classList.remove('proj-clicked');
    }, 400);
 }



 

