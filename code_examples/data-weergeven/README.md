### Video 1 - Intro en downloaden
2:36
- Wat gaan we doen, laten zien eindresultaat
- Download de starter code en PDF
- Live server opstarten

#### Opdrachten
- Body achtergrond kleur
- Google Font inalden en als default font zetten?

---

### Video 2 - Laden JSON / 
7:30
- JSON laden en parsen

#### Opdrachten
- Apparaatgegevens toevoegen aan JSON uit PDF
- Afbeelding er bij zoeken en in images zetten
- Verkleinen tot maximaal 400 pixels breed

---

### Video 3 - Apparaat div vinden en object maken
5:43
- querySelectorAll
- forEach
- data object



### Video 4 - Setup apparaat widget
9:03
- Ophalen HTML elementen in de apparaat widget
-

Code geven:
```
knop.addEventListener("click", () => {
    if (knop.innerText === "Toon verbruik") {
      data.weergave = "verbruik";
      knop.innerText = "Toon kosten";
    } else {
      data.weergave = "kosten";
      knop.innerText = "Toon verbruik";
    }
    updateGegevens(data);
  });
  ```

### Video 5 - Updaten en verbruik berekenen
06:08
- 

Code:

CSS:
```
	 display: flex;
    flex-direction: column;
    align-items: center;
    background-size: 120px;
    background-repeat: no-repeat;
    background-position: 30px center;
    margin-bottom: 20px;
```


### Video 5 - Afmaken 
6:08
- Berekeningen maken


#### Opdrachten
- Extra div en apparaten toevoegen
- Stylen / Font
- In Grid zetten?


Code
berekenJaarVerbruik

const minutenPerJaar = minuten_per_dag * 365;
const urenPerJaar = minutenPerJaar / 60;
const wattPerJaar = urenPerJaar * vermogen;
const kwhPerJaar = wattPerJaar / 1000;


berekenJaarKosten
const prijsPerKwH = 0.2;
const kwhPerJaar = berekenJaarVerbruik(minuten_per_dag, vermogen);
const price = kwhPerJaar * prijsPerKwH;





