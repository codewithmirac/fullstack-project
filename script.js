// Hier werden die API-Links und HTML-Elemente definiert.
const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&page=1';
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query=";

// Das Haupt-HTML-Element mit der ID "section" wird aus dem DOM ausgewählt.
const main = document.getElementById("section");

// Das HTML-Formular-Element mit der ID "form" wird aus dem DOM ausgewählt.
const form = document.getElementById("form");

// Das HTML-Eingabe-Element mit der ID "query" wird aus dem DOM ausgewählt.
const search = document.getElementById("query");

// Die Funktion "returnMovies" wird mit dem API-Link "APILINK" aufgerufen, um Filme zu laden.
returnMovies(APILINK)

// Die Funktion "returnMovies" wird definiert, um Daten von der API abzurufen und anzuzeigen.
function returnMovies(url){
  // Mit Fetch wird eine HTTP-Anfrage an die API gesendet und die JSON-Daten empfangen.
  fetch(url)
    //Ruft die JSON-Dateien von der API ab und verarbeiten diese
    .then(res => res.json())
    //HIer wird das Ergebnis der API Anfrage in einem JavScript-Objekt namens "data" gespeichert
    .then(function(data){
      console.log(data.results); // Die empfangenen Ergebnisse werden in der Konsole angezeigt.
      // Für jeden Film in den Ergebnissen wird ein HTML-Element erstellt und angezeigt.
      data.results.forEach(element => {
            // Erstelle ein neues HTML-Div-Element und weise es der Variable "div_card" zu.
          const div_card = document.createElement('div');
            // Setze das 'class'-Attribut des erstellten Div-Elements auf 'card'.
          div_card.setAttribute('class', 'card');
          
          const div_row = document.createElement('div');
          div_row.setAttribute('class', 'row');
          
          const div_column = document.createElement('div');
          div_column.setAttribute('class', 'column');
          
          const image = document.createElement('img');
          image.setAttribute('class', 'thumbnail');
          image.setAttribute('id', 'image');
          
          const title = document.createElement('h3');
          title.setAttribute('id', 'title');
          
          const center = document.createElement('center');

          title.innerHTML = `${element.title}`; // Der Filmtitel wird gesetzt.
          image.src = IMG_PATH + element.poster_path; // Die Bildquelle wird festgelegt.

          center.appendChild(image);
          div_card.appendChild(center);
          div_card.appendChild(title);
          div_column.appendChild(div_card);
          div_row.appendChild(div_column);

          main.appendChild(div_row); // Das HTML-Element wird zum Hauptelement hinzugefügt.
      });
    });
}

// Ein Ereignishandler wird dem Formular hinzugefügt, um die Suche nach Filmen auszulösen.
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Das Standardverhalten des Formulars wird verhindert.
  main.innerHTML = ''; // Der Inhalt des Hauptelements wird geleert.

  const searchItem = search.value; // Der eingegebene Suchbegriff wird abgerufen.

  if (searchItem) {
    // Die Funktion "returnMovies" wird erneut aufgerufen, um Filme basierend auf der Suche anzuzeigen.
    returnMovies(SEARCHAPI + searchItem);
    search.value = ""; // Das Suchfeld wird geleert.
  }
});
