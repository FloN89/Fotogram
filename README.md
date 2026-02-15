# Fotogram

Eine kleine Bildergalerie im Browser: Vorschaubilder werden als Grid angezeigt. Beim Anklicken öffnet sich ein Overlay (Modal) mit Navigation (vor/zurück) und Bildzähler.

## Features
- Galerie-Grid mit Vorschaubildern
- Overlay-Ansicht mit:
  - Vorheriges / nächstes Bild
  - Bildnummer (z. B. 3 / 12)
- Schließen per Klick außerhalb des Bildbereichs

## Projektstruktur
Empfohlen:

fotogram/
├─ index.html
├─ style.css
├─ script.js
└─ img/
   ├─ Fotogram_Logo.svg
   ├─ favicon.svg
   ├─ favicon.png
   ├─ Background-img.jpg
   ├─ green-2304005_1280.png
   ├─ green-2304007_1280.png
   └─ (deine Galerie-Bilder .jpg)

## Lokal starten (VS Code)
### Option A: Live Server (empfohlen)
1. VS Code Erweiterung **Live Server** installieren
2. `index.html` öffnen
3. Rechtsklick → **Open with Live Server**

### Option B: Direkt im Browser
- `index.html` per Doppelklick öffnen  
Hinweis: Für reine Bilderanzeige reicht das meistens aus.

## Anpassungen
### Bilder hinzufügen/ändern
- In `script.js` im Array `images` neue Pfade ergänzen oder austauschen.

### Styling
- Grid, Overlay und Buttons werden in `style.css` angepasst.

## Technische Hinweise
- JavaScript ist bewusst einfach gehalten (ohne Framework).
- Funktionen sind kurz gehalten (maximal 14 Zeilen pro Funktion).
- Events werden sauber über `addEventListener` behandelt (keine doppelten `onclick` Attribute).

