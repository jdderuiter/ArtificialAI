# Fysieke Cookiewall | Ranking app

## Context van de webapplicatie
Repo voor de webappliatie van de interactieve installatie Fysieke Cookiewall van groep 8 HR.

We maken een fysieke versie van deze cookie wall. Een grote muur met algemene voorwaarden erop geprojecteerd. Er zijn twee deuren waar je doorheen kan, een ‘akkoord’ deur en ‘niet akkoord’ deur.

De deur met ‘akkoord’ erboven zal extra aantrekkelijk gemaakt worden. Hij is groter, hij is versiert, en je hoort muziek achter de deur vandaan komen. De deur met ‘niet akkoord’ zal minder aantrekkelijk zijn en niet uitnodigend.
Als je door deur van ‘akkoord’ loopt zul je terechtkomen op een, op het eerste gezicht, super leuk en intiem feest. Er draait een DJ en er wordt gedanst.

Maar als je goed oplet ziet je overal camera’s. Je wordt van alle kanten bekeken. Alles waar je mee akkoord bent gegaan wat op de cookiewall stond, gebeurd nu daarbinnen.

Eens in de zoveel tijd gaat er een knipperlicht aan in de donkere ‘niet akkoord’ ruimte die ervoor zorgt dat de mensen in de ‘akkoord’ kamer zijn hun kunnen zien. Op die manier hebben ze door dat ze bekeken worden. De mensen in de ‘niet akkoord’ kamer zitten beoordelen de mensen in de ‘akkoord’ kamer. Hier word een status rapport van gemaakt die de ‘akkoord’ mensen als confrontatie aan het einde te zien krijgen

![alt text](https://project.cmi.hr.nl/2019_2020/dc7_zh_t8/wp-content//uploads/2020/04/Plattegrond-Copy.png "Visualisatie")

## De webapplicatie
Een belangrijk onderdeel van de installatie is het beoordelen van de feestgangers. Dit gebeurt enkel op basis van hun uiterlijk en via een digitaal systeem. Zodra een feestganger binnenkomt, wordt er door een camera een foto gemaakt.

De camera pagina is te bekijken op de homepage: `/`

Deze foto wordt direct opgeslagen op de server en live doorgestuurd naar de beoordelingsruimte. Dit is de kamer waar de mensen terechtkomen die door de ‘niet akkoord’ deur zijn gelopen. Zij kunnen door een grote doorkijkspiegel de feestgangers live zien en hebben daarnaast een groot scherm tot hun beschikking. Op dit scherm staat de beoordelingsapplicatie. Hier moeten de beoordelaars op basis van verschillende stellingen de feestgangers beoordelen.

De beoordelingspagina is te bekijken op `/rating`

Op deze manier wordt er een profiel opgemaakt van de feestgangers die buiten de ruimtes te zien is op een groot scherm.

De profielen zijn te bekijken op `/profiles`

Wanneer een feestganger het feest verlaat wordt hij uit het systeem verwijderd en enkele minuten later ook zijn profiel.

De verwijder pagina is te bekijken op `/delete`

Dit digitale systeem werkt via Socket.io om alle data synchroon op alle schermen te laten zien en Vue.js om de interactie soepel te laten verlopen. We slaan geen persoonlijke data op en verwijderen alle profielen nadat de feestgangers de ruimte verlaten.

Team 8 CMGT


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

### Compiles frond-end and minifies for production
```
npm run build
```

#### Seperate services
If you want to run all the serverices in seperate terminalls to work on the backend or see loggs
```
mongod
node server/app.js
npm run serve
```

### Socket connection from the front-end
[https://github.com/probil/vue-socket.io-extended](https://github.com/probil/vue-socket.io-extended)