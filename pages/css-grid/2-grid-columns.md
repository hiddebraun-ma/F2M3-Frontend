---
title: Grid kolommen
permalink: :path/:basename
parent: CSS Grid
nav_order: 2
---

# {{ page.title }}

Bekijk eerst de video **fullscreen**. Doe daarna de opdrachten.

<iframe width="560" height="315" src="https://www.youtube.com/embed/1S9iVTDY4iA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
---


## Opdrachten 
{: .text-green-200}

Met de kennis uit de video: 
- [ ] Definieer in je CSS-bestand een grid met minstens 4 kolommen en 2 rijen.
- [ ] Gebruik de eenheden <span class="text-blue-200">px, fr en %</span> en kijk wat er gebeurt als je verschillende waarden invoert.
- [ ] Geef elke *grid item* div de class *item* en een eigen item1, item2 etc class. *We kunnen ze dan beter afzonderlijk stijlen**
 
---

{% include bewijs.md %}

### Hulp
Gebruik je eigen afmetingen, dus denk zelf na en speel met die afmetingen! Kijk wat er gebeurt als je de browser resized.

```css
#dashboard {
   grid-template-columns: 100px 200px 1fr 2fr;
}
```


### Websites met meer uitleg en verdieping

- [https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns){:target="_blank"}


