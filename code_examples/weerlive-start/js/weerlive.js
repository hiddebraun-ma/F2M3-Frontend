// Vul jouw weerlive.nl API key hier in
const apiKey = '';

// Variabelen initialiseren voor alle HTML/DOM elementen die we gaan aanpassen
let liveDiv, selectMenu, weerIcon, info1;

const startLiveWeer = () => {

  // Alle HTML elementen uit de DOM halen die we nodig hebben
  liveDiv = document.getElementById('live');
  selectMenu = document.getElementById('city');

  // Als we een andere plaats selecteren, dan weerbericht opnieuw laden!
  // Dus luisteren naar het "change" event op het selectMenu
  selectMenu.addEventListener('change', laadWeerbericht);

  // De HTML elementen die we snel willen kunnen aanpassen
  weerIcon = document.querySelector('#live img');
  info1 = document.querySelector('#live h1');

  // Altijd minimaal 1 seconden de loading laten zien
  setTimeout(laadWeerbericht, 1000);
}

const laadWeerbericht = () => {
  // Hier komt de jouw code die na het laden van de pagina wordt uitgevoerd
  let plaats = haalGeselecteerdePlaats();

  // Je kunt eerst testen met de voorbeeld.json
  let url = 'voorbeeld.json';

  // Daarna kun je de ECHTE API gebruiken door deze code te gebruiken
  //let url = `https://weerlive.nl/api/json-data-10min.php?key=${apiKey}&locatie=${plaats}`

  weerIcon.src = 'images/loading.gif';

  // 1,5 seconden de loading laten zien, om aan te geven dat er iets geladen wordt
  setTimeout(() => {

    info1.innerHTML = '';

    laadJSON(url)
  }, 1500);
}

const haalGeselecteerdePlaats = () => {
  // Kijk de video om de juiste plaats uit de select te halen
  // Extra: Voeg plaatsen toe aan de select
}

const laadJSON = (url) => {
  // het XMLHttpRequest object maken
  const aanvraag = new XMLHttpRequest();

  // omschrijf wat er moet gebeuren ALS je de data succesvol binnen hebt
  aanvraag.onreadystatechange = () => {
    if (aanvraag.readyState === 4 && aanvraag.status === 200) {
      let jsonText = aanvraag.responseText;

      // Ze de JSON tekst om in een Javascript array met JSON.parse()
      // Sla het resultaat op in de variabele: apparaten
      const weerbericht = JSON.parse(jsonText);

      // Roep de toonWeerbericht() function met de data
      toonWeerbericht(weerbericht);
    }
  };

  // serveraanvraag specificeren
  aanvraag.open("GET", url, true);

  // aanvraag versturen
  aanvraag.send();
};

const toonWeerbericht = (weerbericht) => {
  // Kijk naar voorbeeld.json. Zo ziet de data er uit die terugkomt uit de API

  // console.log(weerbericht)

  // let weer = 

  // Gebruik de image code uit de JSON om de afbeelding src te maken
  weerIcon.src = ``;

  //Kies zelf welke gegevens je wilt tonen
  info1.innerHTML = `Kies gegevens uit het weerbericht`

}

// Wacht tot de pagina is geladen, dan pas de startLiveWeer functie uitvoeren
window.addEventListener('DOMContentLoaded', startLiveWeer);
