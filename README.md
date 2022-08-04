# RealBay Services

<!-- ABOUT THE PROJECT -->
# About The Project

![RealBay Home Screen](readme/RealBayHomeScreen.png)

Jeder kennt das Problem, wenn der Tee mal wieder leer ist und der Weg zu den Azubis zu lang ist, um sie zu zwingen, das zu ändern.
Für diesen Fall haben wir 'RealBay Services' Entwickelt, die Seite für firmeninterne Dienstleistungen, Wetten und Produkte.
Bereits implementiert sind:

* Datenbank 
* API 
* Frontend mit Beispieldaten
* Userprofile via Searchbar finden

<!-- API -->
# API

Die RealBay Services API gewährt GET-Zugriff auf Nutzerdaten, die für öffentliche Profile relevant sind, und alle angebotenen Dienstleistungen, Produkte und Wetten.

## User
<hr> 

- Alle öffentlichen Daten eines Nutzers bekommen:

#### Syntax
```
/user/:id
=> öffentliche Daten im JASON Format
```
#### Beispiel
```
/user/1
=>
{
"UserID": 1,
"UserName": "",
"PwHash": "",
"Email": "",
"Location": "",
"Tel": "",
"Twitter": "",
"LinkedIn": "", 
"Bio": ""
}
```

<hr>

- Alle aktuellen Produkte, Dienstleistungen und Wetten, die ein User anbietet bekommen:

#### Syntax
```
/user/:id/items
=> Array von Items im JASON Format
```

#### Beispiel
```
/user/1/items 
=>
[
{
"ItemID": 1,
"MerchantID": 1,
"ItemName": "Ball",
"TimeLimit": "2022-07-29T22:00:00.000Z",
"Stock": 4,
"PricePerItem": 0,
"LongDescription": "Testestetstesttetstettetstetstetst",
"ShortDescription": "Testtestets",
"Category": "product",
"AvgRating": 10
},
{
"ItemID": 2,
"MerchantID": 1,
"ItemName": "Tee holen",
"TimeLimit": "2022-07-29T22:00:00.000Z",
"Stock": 1,
"PricePerItem": 0,
"LongDescription": "Testestetstesttetstettetstetstetst",
"ShortDescription": "Testtestets",
"Category": "service",
"AvgRating": 10
},
]
```

<hr> 

- Nach Nutzernahmen suchen

#### Syntax
```
/search/:name/:limit
=> Array von Nutzerdaten, bei denen die Nutzernamen die Variable :name enthalten, im JASON Format mit einer maximalen ANzahl an Nutzern definiert durch :limit 
```

#### Beispiel
```
/user/search/a/2 
=>
[
{
"UserID": 1,
"UserName": "LinusDerHuan",
"PwHash": ".lkjhzsdertfzguhij",
"Email": "examplemail@mail.com",
"Location": "RealCoreGroup Essen, ETEC",
"Tel": "+49 0123455678",
"Twitter": "@Linus_huan_der",
"LinkedIn": "Linus Huan",
"Bio": "Moin, ich bin der Linus und nen Huan Moin, ich bin der Linus und nen Huan Moin, ich bin der Linus und nen Huan Moin, ich bin der Linus und nen Huan!"
},
{
"UserID": 2,
"UserName": "FranzWillhelm",
"PwHash": "fgjk34drt7zhui9lp",
"Email": "hallo@bye.tschüss",
"Location": "IndeinerMom",
"Tel": "",
"Twitter": "",
"LinkedIn": "",
"Bio": ""
}
]
```

## Item
<hr>

- Alle Daten eines Items

#### Syntax
```
/item/:id
=> Item Daten im JASON Format
```
#### Beispiel
```
/item/:id
=>
{
"ItemID": 1,
"MerchantID": 1,
"ItemName": "Ball",
"TimeLimit": "2022-07-29T22:00:00.000Z",
"Stock": 1,
"PricePerItem": 0,
"LongDescription": "sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs",
"ShortDescription": "sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs",
"Category": "product",
"AvgRating": 10
}
```

<hr>

- 

#### Syntax
```
/recommendations/:category/:amount/:minID
=> Array von Kategorien, die jeweils mehrere Items als JASON Objekte halten || mehrere JASON Objekte aus einer Kategorie 
```
#### Parameter
| Parameter | Possible values | Description |
| ------------- | ------------- |
| category | foreach, ignore, service, product, bet | get them for each category, get items and ignore the category, get items only from specific category |
| amount | any integer | |
| minID | any integer | |

#### Beispiel
```
/item/:id
=>
{
"ItemID": 1,
"MerchantID": 1,
"ItemName": "Ball",
"TimeLimit": "2022-07-29T22:00:00.000Z",
"Stock": 1,
"PricePerItem": 0,
"LongDescription": "sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs",
"ShortDescription": "sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs",
"Category": "product",
"AvgRating": 10
}
```




<!-- Roadmap -->
# Roadmap

1. Settings zum Frontend hinzufügen
2. Tags Dropdown Menu
3. Login
