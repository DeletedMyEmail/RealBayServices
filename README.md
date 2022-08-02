# RealBay Services

<!-- ABOUT THE PROJECT -->
## About The Project

![RealBay Home Screen](readme/RealBayHomeScreen.png)

Jeder kennt das Problem, wenn der Tee mal wieder leer ist und der Weg zu den Azubis zu lang ist, um sie zu zwingen, das zu ändern.
Für diesen Fall haben wir 'RealBay Services' Entwickelt, die Seite für firmeninterne Dienstleistungen, Wetten und Produkte.
Bereits implementiert sind:

* Datenbank 
* API 
* Frontend mit Beispieldaten
* Userprofile via Searchbar finden

<!-- API -->
## API

Die RealBay Services API gewährt GET-Zugriff auf Nutzerdaten, die für öffentliche Profile relevant sind, und alle angebotenen Dienstleistungen, Produkte und Wetten.

#### Anwendung

- Alle öffentlichen Daten eines Nutzers bekommen:

**Syntax**
> /user/:id
> => öffentliche Daten in JASON Format
 
**Beispiel**
> /user/1
> =>
> {
> "UserID": 1,
> "UserName": "",
> "PwHash": "",
> "Email": "",
> "Location": "",
> "Tel": "",
> "Twitter": "",
> "LinkedIn": "", 
> "Bio": ""
> }

- Alle aktuellen Produkte, Dienstleistungen und Wetten, die ein User anbietet bekommen:

**Syntax**
> /user/:id/items
> => Item in in JASON Format
 
**Beispiel**
> /user/1/items
> =>
> [
>{
>"ItemID": 1,
>"MerchantID": 1,
>"ItemName": "Ball",
>"TimeLimit": "2022-07-29T22:00:00.000Z",
>"Stock": 4,
>"PricePerItem": 0,
>"LongDescription": "Testestetstesttetstettetstetstetst",
>"ShortDescription": "Testtestets",
>"Category": "product",
>"AvgRating": 10
>},
>{
>"ItemID": 2,
>"MerchantID": 1,
>"ItemName": "Tee holen",
>"TimeLimit": "2022-07-29T22:00:00.000Z",
>"Stock": 1,
>"PricePerItem": 0,
>"LongDescription": "Testestetstesttetstettetstetstetst",
>"ShortDescription": "Testtestets",
>"Category": "service",
>"AvgRating": 10
>},
>]


<!-- Roadmap -->
## Roadmap

1. Settings zum Frontend hinzufügen
2. Tags Dropdown Menu
3. Login
