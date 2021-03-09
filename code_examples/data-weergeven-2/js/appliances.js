// Hier slaan we de keuzes in op:
// - apparaat: object
// - weergave: prijs of vermogen,
// - kosten: per uur, dag, maand of jaar
let settings = {
  apparaat: null,
  weergave: "kosten",
  prijs_kwh: 0.20
};

// Hier slaan de ingeladen apparaten uit de JSON file in op
let apparaten = [];

// Hier slaan de de DOM elementen op die we nodig hebben
let ladenDiv, kiesDiv, verbruikDiv;

// Deze functie is de start
const startCalculator = () => {

  // Haal de drie hoofd elementen uit de DOM en sla op in variabelen
  ladenDiv = document.querySelector('.loader');
  kiesDiv = document.querySelector('.appliance');
  verbruikDiv = document.querySelector('.usage');
  verbruikDiv.style.backgroundImage = '';

  laadJSON('apparaten.json');

  // setTimeout(() => {
  //   //Laad de apparaat gegevens uit de JSON
  //   laadJSON('apparaten.json');
  // }, 2000);

}

const laadJSON = (url) => {
  // het XMLHttpRequest object maken
  const aanvraag = new XMLHttpRequest();

  // omschrijf wat er moet gebeuren ALS je de data succesvol binnen hebt
  aanvraag.onreadystatechange = () => {
    if (aanvraag.readyState === 4 && aanvraag.status === 200) {
      let jsonText = aanvraag.responseText;
      apparaten = JSON.parse(jsonText);
      toonSelectieScherm(apparaten);
    }
  }

  // serveraanvraag specificeren
  aanvraag.open("GET", url, true);

  // aanvraag versturen
  aanvraag.send();

}

const toonSelectieScherm = (apparaten) => {

  ladenDiv.classList.add('hidden');
  verbruikDiv.classList.add('hidden');
  kiesDiv.classList.remove('hidden');

  const apparaatMenu = document.querySelector('.appliance select');
  apparaatMenu.innerHTML = '';
  const kiesButton = document.querySelector('.appliance button');

  apparaten.forEach(apparaat => {
    let option = document.createElement('option');
    option.value = apparaat.code;
    option.innerText = apparaat.naam;
    apparaatMenu.appendChild(option);
  });

  kiesButton.addEventListener('click', kiesApparaat);
}

const kiesApparaat = () => {
  const apparaatSelect = document.querySelector('.appliance select');

  // Welke optie is geselecteerd
  const index = apparaatSelect.selectedIndex;

  // Wat is de waarde van die geselecteerde optie (de code van het apparaat)
  const code = apparaatSelect.options[index].value;

  // Doorzoek de apparaten en geef de eerste match terug van een apparaat met die code
  settings.apparaat = apparaten.find(value => {
    return value.code === code;
  });

  // Zet alvast de juiste background image, door de style regel goed te zetten
  verbruikDiv.style.backgroundImage = `url(${settings.apparaat.image})`;

  toonVerbruikScherm();
}

const toonVerbruikScherm = () => {

  ladenDiv.classList.add('hidden');
  kiesDiv.classList.add('hidden');
  verbruikDiv.classList.remove('hidden');

  const slider = verbruikDiv.querySelector('input');
  const minuten = verbruikDiv.querySelector('span');

  slider.addEventListener('input', (event) => {
    minuten.innerHTML = slider.value;
    toonGegevens();
  })

  const knop = verbruikDiv.querySelector('button');
  knop.addEventListener('click', () => {
    if (knop.innerText === 'Toon verbruik') {
      settings.weergave = 'verbruik';
      knop.innerText = 'Toon kosten';
    } else {
      settings.weergave = 'kosten';
      knop.innerText = 'Toon verbruik';
    }
    toonGegevens();
  })


  toonGegevens();

}

const toonGegevens = () => {
  // De afzonderlijke elementen ophalen
  const titel = verbruikDiv.querySelector('h1');
  const nummer = verbruikDiv.querySelector('h2');
  const slider = verbruikDiv.querySelector('input');

  // Nu gegevens invullen van het apparaat!
  titel.innerHTML = settings.apparaat.naam;

  // Aantal minuten uitlezen
  const minutenPerDag = parseInt(slider.value);

  if (settings.weergave === 'kosten') {
    let jaarlijkseKosten = berekenJaarKosten(minutenPerDag, settings.apparaat.kwh);
    nummer.innerHTML = '€ ' + jaarlijkseKosten + ' per jaar';
  } else {
    let jaarlijksVerbruik = berekenJaarVerbruik(minutenPerDag, settings.apparaat.kwh);
    nummer.innerHTML = jaarlijksVerbruik + ' KwH';
  }

}

const berekenJaarVerbruik = (minuten, vermogen) => {

  const minutenPerJaar = minuten * 365;
  const urenPerJaar = minutenPerJaar / 60;
  const wattPerJaar = (urenPerJaar * vermogen);
  const kwhPerJaar = wattPerJaar / 1000;

  return Math.round(kwhPerJaar);

}

const berekenJaarKosten = (minuten, vermogen) => {

  const prijsPerKwH = 0.20;
  const kwhPerJaar = berekenJaarVerbruik(minuten, vermogen);

  return Math.round(kwhPerJaar * prijsPerKwH);

}


//Hier begint alles.
window.addEventListener("DOMContentLoaded", startCalculator);
