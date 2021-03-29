---
title: Image, slider en button
layout: page
parent: Data weergeven
nav_order: 4
---

# {{ page.title }}

{% include youtube.md video="D_YQXCSm5pI" %}

---

### Code 
Nodig bij het kijken van de video:

Om achtergrond image in te stellen:
```js
// Achtergrond afbeelding zetten
  apparaatDiv.style.backgroundImage = `url(${data.apparaat.image})`;
```

Om slider uit te lezen:
```js
  slider.addEventListener("input", (event) => {
    minuten.innerHTML = slider.value;
    updateGegevens(data);
  });
```

Voor het "togglen" van de knop:
```js
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

updateGegevens(data);
```
---

### Opdrachten
- [ ] Stel de achtergrondafbeelding in.
- [ ] Zorg dat de slider wordt uitgelezen.
- [ ] Zorg dat de minuten worden aangepast als je de slider beweegt.

### Als je het leuk vindt
- [ ] Kijk [met hulp van deze uitleg](https://www.w3schools.com/howto/howto_js_rangeslider.asp){: target="_blank"} of je de slider mooier kunt stijlen.
- [ ] Maak ook de `button` mooier. Gebruik de [W3 Schools uitleg](https://www.w3schools.com/css/css3_buttons.asp){: target="_blank"} of de [uitleg van CSS Tricks](https://css-tricks.com/a-complete-guide-to-links-and-buttons/){: target="_blank"}. 

---


{% include bewijs.md %}

---

[Update apparaat gegevens](5-update-gegevens){: .btn .btn-purple .fs-6 }
