// Hier worden de ingeladen apparaten uit de JSON file opgeslagen
let apparaten = [];

// Deze functie is de start
const startCalculator = () => {
  // Inladen van JSON bestand
  laadJSON("apparaten.json");
};

const laadJSON = (url) => {
  // het XMLHttpRequest object maken
  const aanvraag = new XMLHttpRequest();

  // Omschrijf wat er moet gebeuren ALS je de data succesvol binnen hebt
  aanvraag.onreadystatechange = () => {
    if (aanvraag.readyState === 4 && aanvraag.status === 200) {
      let jsonText = aanvraag.responseText;
      // HIER KOMT CODE DIE UITGELEGD WORDT IN DE VIDEO
    }
  };

  // serveraanvraag specificeren
  aanvraag.open("GET", url, true);

  // aanvraag versturen
  aanvraag.send();
};

const toonApparaten = () => {
  //  Sla alle div's met de class "appraat" iop in de variabele containerDivs
  const apparaatDivs = document.querySelectorAll(".apparaat");

// Gebruik een forEach loop om elk aparaat div te verwerken
apparaatDivs.forEach((apparaatDiv) => {
    // Haal de code van het apparaat op uit het attribuut "data-id"
    const code = apparaatDiv.attributes["data-id"].value;

    // Zoek met deze het appraat op in de ingeladen appraten (uit het JSON bestand)
    const apparaat = apparaten.find((value) => {
      return value.code === code;
    });

    // Zet alle benodigde informatie in een zelfgemaakt object
    let data = {
     // HIER KOMT CODE DIE UITGELEGD WORDT IN DE VIDEO
    };

    // Geef het data object aan de maakWidget function.
    maakWidget(data);
  });

};

const maakWidget = (data) => {
  // Nu gaan we de data gebruiken om alles in te vullen

  // De div uit het data object halen en in eigen variabele zetten voor het gemak
  const apparaatDiv = data.container;

  // Eerst alle HTML elementen ophalen uit de container div
  const slider = apparaatDiv.querySelector("input");
  const minuten = apparaatDiv.querySelector("span");
  const knop = apparaatDiv.querySelector("button");

  // HIER KOMT CODE DIE UITGELEGD WORDT IN DE VIDEO
};

const updateGegevens = (data) => {
  // De div uit het data object halen en in eigen variabele zetten voor het gemak
  const apparaatDiv = data.container;

  // De afzonderlijke elementen ophalen
  const titel = apparaatDiv.querySelector("h1");
  const nummer = apparaatDiv.querySelector("h2");
  const slider = apparaatDiv.querySelector("input");

  // HIER KOMT CODE DIE UITGELEGD WORDT IN DE VIDEO
};

const berekenJaarVerbruik = (minuten_per_dag, vermogen) => {
  // HIER KOMT CODE DIE UITGELEGD WORDT IN DE VIDEO
  
  //   const minutenPerJaar =
  //   const urenPerJaar =
  //   const wattPerJaar =
  //   const kwhPerJaar =

  return kwhPerJaar.toFixed(2);
};

const berekenJaarKosten = (minuten_per_dag, vermogen) => {
  // HIER KOMT CODE DIE UITGELEGD WORDT IN DE VIDEO

  //   const prijsPerKwH = 0.2;
  //   const kwhPerJaar =
  //   const price =
  //   return price.toFixed(2);
};

//Hier begint alles.
window.addEventListener("DOMContentLoaded", startCalculator);
