// Vul jouw weerlive.nl API key hier in
const apiKey = 'f915780d2a';

// Variabelen initialiseren voor alle HTML/DOM elementen die we gaan aanpassen
let liveDiv, selectMenu, weerIcon, info1, info2, info3, info4;

const startLiveWeer = () => {

  // Alle HTMl elementen uit de DOM halen die we nodig hebben
  liveDiv = document.getElementById('live');
  selectMenu = document.getElementById('city');

  // Als we een andere plaats selecteren, dan weerbericht opnieuw laden!
  selectMenu.addEventListener('change', laadWeerbericht);

  // De HTML elementen die we snel willen kunnen aanpassen
  weerIcon = document.querySelector('#live img');
  info1 = document.querySelector('#live h1');
  info2 = document.querySelector('#live h2');
  info3 = document.querySelector('#live p');
  info4 = document.querySelector('#live h3');

  // 1,5 seconden de loading laten zien, om aan te geven dat er iets geladen wordt
  setTimeout(laadWeerbericht, 1000);
}

const laadWeerbericht = () => {
  // Hier komt de jouw code die na het laden van de pagina wordt uitgevoerd
  let plaats = haalGeselecteerdePlaats();
  //let url = 'voorbeeld.json';
  let url = `https://weerlive.nl/api/json-data-10min.php?key=${apiKey}&locatie=${plaats}`


  weerIcon.src = 'images/loading.gif';

  // Haal de slide-in class van het element als deze er op staat
  liveDiv.classList.remove('slide-in');

  // Altijd minimaal 1 seconden de loading laten zien
  setTimeout(() => {

    info1.innerHTML = '';
    info2.innerHTML = '';
    info3.innerHTML = '';
    info4.innerHTML = '';

    laadJSON(url)
  }, 1500);
}

const haalGeselecteerdePlaats = () => {

  let selectedIndex = selectMenu.selectedIndex;
  return selectMenu.options[selectedIndex].value;
}

const laadJSON = (url) => {
  // het XMLHttpRequest object maken
  const aanvraag = new XMLHttpRequest();

  // omschrijf wat er moet gebeuren ALS je de data succesvol binnen hebt
  aanvraag.onreadystatechange = () => {
    if (aanvraag.readyState === 4 && aanvraag.status === 200) {
      let jsonText = aanvraag.responseText;

      // Ze de JSON tekst om in een Javascript array met JSON.parse()
      // Sla het resultaat op in de variabele: weerbericht
      const weerbericht = JSON.parse(jsonText);

      // Roep de maakGrafiek() function met de data
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

  let weer = weerbericht.liveweer[0];

  // maak zelf eigen afbeeldingen voor de teruggegeven codes
  weerIcon.src = `images/icons/${weer.image}.png`;

  //Kies zelf welke gegevens je wilt tonen
  info1.innerHTML = weer.plaats;
  info2.innerHTML = weer.samenv;
  info3.innerHTML = weer.verw;
  info4.innerHTML= weer.temp + '\u2103';

  // Toevoegen class zorgt voor de slide in animatie
  liveDiv.classList.add('slide-in');

}


// Wacht tot de pagina is geladen, dan pas de startLiveWeer functie uitvoeren
window.addEventListener('DOMContentLoaded', startLiveWeer);
