const startMeterstanden= () => {
    laadJSON('http://localhost:8888/standen2json.php');
}

const laadJSON = () => {
    // het XMLHttpRequest object maken
    const aanvraag = new XMLHttpRequest();

    // omschrijf wat er moet gebeuren ALS je de data succesvol binnen hebt
    aanvraag.onreadystatechange = () => {
        if (aanvraag.readyState === 4 && aanvraag.status === 200) {
            let jsonText = aanvraag.responseText;

            // Ze de JSON tekst om in een Javascript array met JSON.parse()
            // Sla het resultaat op in de variabele: apparaten
            let meterstanden = JSON.parse(jsonText);

            // Roep de toonApparaten() function aan om alles te tonen
            maakGrafiek(meterstanden);
        }
    };

    // serveraanvraag specificeren
    aanvraag.open("GET", url, true);

    // aanvraag versturen
    aanvraag.send();
}

maakGrafiek = (data) => {

}


window.addEventListener('DOMContentLoaded', startMeterstanden);