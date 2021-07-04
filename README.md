# WebDev: Frontend-Development – Basics

Das ist der Startercode für die ersten Sessions im Kurs Frontend-Development. Wir werden zur Bearbeitung der Aufgaben GitHub Classroom nutzen.

**Verwenden Sie zur Bearbeitung den Einladungslink** auf der [Aufgabenseite zur Session #1](https://th-koeln.github.io/mi-bachelor-webdevelopment/assignments/fd_01_html-1/). Dann wird automatisch ein Repository auf Basis dieses Templates erstellt. Klonen Sie bitte anschließend das Repository auf ihren Rechner und bearbeiten Sie die Aufgaben darin.

- [Über Frontend-Development](https://th-koeln.github.io/mi-bachelor-webdevelopment/frontend-development/)
- [Session #1](https://th-koeln.github.io/mi-bachelor-webdevelopment/lehrveranstaltungen/fd-01/)

## Credits 📝

Der Content für diese Aufgabe basiert auf der Bachelorarbeit *Online Sports Comnunities – A concept for supporting the user’s participation in team sports* von Kephas Nguyen (2021) an der TH Köln.

## Ordnerstruktur
```
/dist     kompilierter Code … hier wird nix gemacht
/helper   Helferlein für's Kompilieren
/src      Quellcode … hier wird entwickelt

```
## Funktionen

`npm install`
Installiert die erforderlichen Abhängigkeiten.

`npm run watch`
Watchmode für den SASS Compiler.

`npm run build` kompiliert einen Build und speichert diesen im `dist` Folder.

`npm run dev` Watchmode für den SASS Compiler und Browsersync, der die Inhalte im `src` Folder, inkl. livereload, serviert.

`npm run live` erzeugt einen Build und startet den Webserver, der die Inhalte im `dev` Folder serviert.

`npm run lint:css` startet stylelint.

`npm run lint:css:fix` startet stylelint und korrigiert die Fehler, sofern möglich.

`npm run lint:js` startet eslint.

`npm run lint:js:fix` startet eslint und korrigiert die Fehler, sofern möglich.