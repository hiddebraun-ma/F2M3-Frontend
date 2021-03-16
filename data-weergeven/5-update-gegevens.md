---
title: Update apparaat gegevens
layout: page
parent: Data weergeven
nav_order: 5
---

# {{ page.title }}

{% include youtube.md video="X453lckROPg" %}

---

### Code

CSS code om de achtergrond-afbeelding beter weer te geven en om van de apparaat div een flex container te maken:

```css
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: 120px;
    background-repeat: no-repeat;
    background-position: 30px center;
```


Javascript code voor de `updateGegevens` function

```js
  // Nu gegevens invullen van het apparaat!
  titel.innerHTML = data.apparaat.naam;

  // Aantal minuten uitlezen
  const minutenPerDag = parseInt(slider.value);

  // Kijken of we de kosten of het verbruik willen zien
  if (data.weergave === "kosten") {
    let jaarlijkseKosten = berekenJaarKosten(minutenPerDag, data.apparaat.vermogen);
    nummer.innerHTML = "€ " + jaarlijkseKosten + " per jaar";
  } else {
    let jaarlijksVerbruik = berekenJaarVerbruik( minutenPerDag, data.apparaat.vermogen);
    nummer.innerHTML = jaarlijksVerbruik + " KwH";
  }
```

---

### Opdrachten
- [ ] Voeg de CSS toe en zorg dat je kunt uitleggen wat er met de extra CSS gebeurt.
- [ ] Pas de titel van het apparaat aan.
- [ ] Voeg de code aan het JS-bestand toe.


---

{% include bewijs.md %}

---

[Verbruik en kosten berekenen](6-verbruik-kosten-berekenen){: .btn .btn-purple .fs-6 }
