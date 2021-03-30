---
title: Verbruik en kosten berekenen
layout: page
parent: Apparaat verbruik
nav_order: 6
---

# {{ page.title }}

{% include youtube.md video="6oOwAZH47JA" %}

---

### Code

Voor de `berekenJaarVerbruik` function:
```js
const minutenPerJaar = minuten_per_dag * 365;
const urenPerJaar = minutenPerJaar / 60;
const wattPerJaar = urenPerJaar * vermogen;
const kwhPerJaar = wattPerJaar / 1000;
```

Voor de `berekenJaarKosten` function:
```js
const prijsPerKwH = 0.2;
const kwhPerJaar = berekenJaarVerbruik(minuten_per_dag, vermogen);
const price = kwhPerJaar * prijsPerKwH;
```

---

### Opdrachten
- [ ] Maak de functie `berekenJaarVerbruik` aan
- [ ] Maak de functie `berekenJaarKosten` aan.
- [ ] Zoek op internet op hoeveel KwH jouw telefoon verbruikt op het moment dat deze wordt opgeladen en plaats deze eenheid in de functie `berekenJaarVerbruik`.

---

{% include bewijs.md %}

---

[Eindopdracht](7-opdracht.md){: .btn .btn-purple .fs-6 }
