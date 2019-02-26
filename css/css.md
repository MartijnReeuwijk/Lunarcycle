## Css Smacss

### css example

``css
.lunarBattery-Top {
  z-index: -1;
  position: absolute;
  top: -10px;
  left: 9px;
  width: 25px;
  height: 10px;
  border: 2px solid black;
  border-radius: 3px;
  background-color: #bbbbbb;
}
``
### Css regels over de categories
Smacss wil dat je je code opdeeld in verschilende files gebaseert op hun functie op de website site, zoals base,layout,modules,states en themes. Hier onder een korte uitleg van de site
```
Layout rules divide the page into sections. Layouts hold one or more modules together.

Modules are the reusable, modular parts of our design. They are the callouts, the sidebar sections, the product lists and so on.

State rules are ways to describe how our modules or layouts will look when in a particular state. Is it hidden or expanded? Is it active or inactive? They are about describing how a module or layout looks on screens that are smaller or bigger. They are also about describing how a module might look in different views like the home page or the inside page.
```
Mijn site gebruikt niet een standaart layout of veel reusable parts, hier door verliest Smacss veel van zijn kracht.

### conclusie
In mijn project heeft Smacss minder "nut" omdat ik eigelijk niet echt een layout gebruik/heb als bijvoorbeeld een standaart news website.
