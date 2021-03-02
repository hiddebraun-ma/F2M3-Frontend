---
title: Grid container
layout: page
parent: CSS Grid Start
nav_order: 2
---

# {{ page.title }}

{% include youtube.md video="HFY0uEb5XDY" %}

---

### Opdrachten

- [ ] Maak zoals in de video een nieuw HTML-bestand met een `<style>` block in de `<head>`.
- [ ] Maak in de HTML een *grid container* div (zie video).
- [ ] Maak in de *grid container* div nu minimaal 10 *grid items*
- [ ] Geef de *grid items* met een CSS class dezelfde achtergrondkleur, tekstkleur en een beetje padding.

---

{% include bewijs.md %}

### Hulp

Hier vind je stukjes code die je kunt gebruiken in je oplossing. 
Je moet zelf bedenken waar dit moeten komen. **Gebruik de video hierbij!**.

#### Grid container

```html
<div id="dashboard"></div>
```

#### Grid items

```html
<div class="item">1</div>
<div class="item">2</div>
<div class="item">3</div>
<div class="item">4</div>
<div class="item">5</div>
<div class="item">6</div>
<div class="item">7</div>
<div class="item">8</div>
<div class="item">9</div>
<div class="item">10</div>
```

```css
.item {
    background-color: maroon;
    color: #ffffff;
    padding: 5px;
}
```

---

[Grid kolommen](2-grid-columns){: .btn .btn-purple .fs-6 }


