---
title: Animaties en stijlen 
layout: page
parent: Live weerbericht
nav_order: 5
---

# {{ page.title }}

Hier is geen video voor gemaakt. Volg de instructies en kijk of je de animatie werkend kunt krijgen.
{: .fs-5 .text-green-100 }

---

### Opdrachten

- Voeg de juiste animatie CSS-regels toe (zie onder)
- Gebruik CSS om alles mooi te stijlen:
  - Laad een Google Font.
  - Pas in je CSS de stijlen, kleuren, marges en padding aan.
  - Zoek een andere/betere  loading GIF (Google naar "loading gif")
  - Vervang de afbeeldingen met je eigen weather icons (let op dat naam zelfde wordt)    
- Op [deze pagina](https://weerlive.nl/delen.php){: target="_blank"} vindt je op tabje "Parameters" een overzicht van alle weer informatie.    

---

---

### Voeg slide-in class toe met Javascript)

In de `laadWeerbericht()` function net voor de `setTimeout()` zet je dit.
Dit zorgt dat de elementen weer naar hun beginpositie gaan.

```js
// Haal de slide-in class van het element als deze er op staat
liveDiv.classList.remove('slide-in');
```

Aan einde van de `toonWeerbericht()` function voeg je dit toe.
Dit zorgt da de animatie regels worden geactiveerd,

```js
  // Toevoegen class zorgt voor de slide in animatie
  liveDiv.classList.add('slide-in');
```

---

###  CSS regels voor animatie

Voeg deze CSS-regels toe aan de CSS-selector voor de weer gegevens: `#live h1, #live h2, #live p, #live h3`

```
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.3s ease-in;
```    

En onderaan in de CSS zet je deze nieuwe regels. 
Als de class `slide-in` op de `#live` div wordt toegevoegd, gaan deze elementen animeren van:
- buiten beeld: `translateX(100%);` naar gewone positie: `translateX(0)`
- opacity 0 naar opacity 1 (zichtbaar) 

```css
#live.slide-in h1,
#live.slide-in h2,
#live.slide-in p,
#live.slide-in h3 {
  opacity: 1;
  transform: translateX(0);
}
```

En om de elementen net NA elkaar te laten animeren voeg je een `transition-delay` per element toe die net iets later is dan de vorige:

```css
#live h2 {
    transition-delay: 0.2s;
}

#live p {
    transition-delay: 0.3s;
}

#live h3 {
    transition-delay: 0.4s;
}
```

---

{% include bewijs.md %}

