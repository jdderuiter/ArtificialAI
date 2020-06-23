# Artificial AI

## Context van de webapplicatie
Repo voor de webappliatie van de interactieve installatie Artificial AI van groep 8 HR.

Artificial AI is een fysieke installatie op basis van technologie ontwikkeld voor het datalab in de Hogeschool Rotterdam. De installatie bestaat uit twee hokjes die er uitzien als een photobooth. Mensen die de installatie betreden zullen in eerste instantie denken dat de hokjes identiek zijn en dat ze in de hokjes beoordeeld zullen worden door een Artificial Intelligence via een webcam en een scherm. Een van de hokjes is echter anders en geeft de gebruiker de rol van de AI en zal in dit proces de “beoordelaar” zijn. De beoordelaar krijgt na korte instructies over zijn rol de webcambeelden van het andere hokje te zien. De beoordeelde weet niet dat hij eigenlijk beoordeeld wordt door de andere persoon en krijgt na korte instructies zijn eigen webcam beeld te zien met een gezichtsherkennings inclusief gezichtsherkenning.

De beoordelaar doorloopt een aantal vragen die normaal beantwoord zouden worden door kunstmatige intelligentie. Deze vragen beginnen simpel zoals bijvoorbeeld “Is deze persoon een vrouw?”, maar worden steeds complexer. De beoordeelde ziet in het andere hokje live wat er over hem wordt gezegd. Na het invullen van alle vragen wordt er een profiel opgesteld op basis van de beoordeling. Voordat de beoordeelde dit profiel kan bekijken, wordt er onthuld dat er geen echte AI was. De beoordeelde krijgt de webcam beelden te zien van de beoordelaar die op dat moment ook te horen krijgt dat hij onthuld wordt. Na deze onthulling kan de beoordeelde zijn profiel uitprinten samen met foto’s net zoals bij een standaard photobooth gebeurt. 


## De webapplicatie
In ons mvp hebben we de volgende functionaliteiten ontwikkeld.

![storyboard](http://project.cmi.hr.nl/2019_2020/dc7_zh_t8/wp-content/uploads/2020/06/Screenshot-2020-06-23-at-16.49.38.png "Storyboard")

-   Onboarding voor zowel de beoordelaar als beoordeelde
-   Live videofeed tussen de beoordeelde en de beoordelaar
-   Realtime vragen tussen twee browsers
-   Realtime antwoorden tussen twee browsers

De pagina van de beoordeelde is te bekijken op: `/`
De pagina van de beoordelaar is te bekijken op: `/onboarding-ai`




## Project setup
```
npm install
cd server
npm install
```

### Compiles and hot-reloads for front-end development
```
npm start
```

#### Seperate services
If you want to run all the serverices in seperate terminalls to work on the backend or see loggs
```
node server/app.js
npm run serve
```

### Socket connection from the front-end
[Vue-socket.io-extended](https://github.com/probil/vue-socket.io-extended)

### Facialrecognition library
[Face-api.js](https://github.com/justadudewhohacks/face-api.js/)