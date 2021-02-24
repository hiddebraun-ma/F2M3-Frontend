---
title: Grid kolommen 
parent: CSS Grid Start 
nav_order: 3
---

# {{ page.title }}


{% include youtube.md video="1S9iVTDY4iA" %}

---

## Opdrachten

{: .text-green-200}

Met de kennis uit de video:

- [ ] Definieer in je CSS-bestand een grid met minstens 4 kolommen en 2 rijen.
- [ ] Gebruik de eenheden <span class="text-blue-200">px, fr en %</span> en kijk wat er gebeurt als je verschillende
  waarden invoert.
- [ ] Geef elke *grid item* div de class *item* en een eigen item1, item2 etc class. *We kunnen ze dan beter
  afzonderlijk stijlen**

---

{% include bewijs.md %}

### Hulp

Gebruik je eigen afmetingen, dus denk zelf na en speel met die afmetingen! Kijk wat er gebeurt als je de browser
resized.

```css
#dashboard {
    grid-template-columns: 100px 200px 1fr 2fr;
}
```

```html
<div class="item item1">1</div>
<div class="item item2">2</div>
<div class="item item3">3</div>
<div class="item item4">4</div>
<div class="item item5">5</div>
<div class="item item6">6</div>
<div class="item item7">7</div>
<div class="item item8">8</div>
<div class="item item9">9</div>
<div class="item item10">10</div>
```

### Meer info over Grid kolommen maken

- [https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-columns-rows](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-columns-rows){:target="_blank"}
- [https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns){:target="_blank"}

---

[Grid rijen](4-grid-rows){: .btn .btn-green .fs-6 }

