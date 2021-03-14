---
title: Apparaat DIV setup
layout: page
parent: Data weergeven
nav_order: 3
---

# {{ page.title }}

{% include youtube.md video="Cou2k2dGQ2I" %}

---

### Code

Code van het data object (zoals in de video wordt uitgelegd)

```js
// Zet alle benodigde informatie in een zelfgemaakt object
let data = {
  container: apparaatDiv, // De verwijzing het div element
  apparaat: apparaat, // De apparaatgegevens
  weergave: "kosten", // Welke weergave je standaard wilt
  prijs_kwh: 0.2, // De prijs voor 1 KwH electriciteit
};
```

---

### Opdrachten
- [ ] Bekijk de PDF en voeg een zelfgekozen apparaat toe aan het `apparaten.json` bestand.
- [ ] Zoek een foto voor het apparaat en gebruik deze voor het apparaat in het JSON-bestand.
- [ ] Verklein de foto, zodat deze maximaal 400 pixels breed is.
---

{% include bewijs.md %}

---

[Image, slider en button](4-image-slider-button){: .btn .btn-purple .fs-6 }
