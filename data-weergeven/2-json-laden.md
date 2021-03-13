---
title: JSON inladen
layout: page
parent: Data weergeven
nav_order: 2
---

# {{ page.title }}

{% include youtube.md video="EL9khaIDSwg" %}

---

### Code

Object met alle benodigde data:

```js
let data = {
    container: apparaatDiv, // De verwijzing het div element
    apparaat: apparaat, // De apparaatgegevens
    weergave: "kosten", // Welke weergave je standaard wilt
    prijs_kwh: 0.2, // De prijs voor 1 KwH electriciteit
};
```

### Opdrachten


---

{% include bewijs.md %}

---

[Apparaat DIV setup](3-apparaat-div){: .btn .btn-purple .fs-6 }
