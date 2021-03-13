---
title: Image, slider en button
layout: page
parent: Data weergeven
nav_order: 4
---

# {{ page.title }}

{% include youtube.md video="D_YQXCSm5pI" %}

---

### Opdrachten

TODO

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

{% include bewijs.md %}

---

[Update apparaat gegevens](5-update-gegevens){: .btn .btn-purple .fs-6 }
