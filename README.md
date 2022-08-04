# RealBay Services

<!-- ABOUT THE PROJECT -->
# About The Project

![RealBay Home Screen](readme/RealBayHomeScreen.png)

Everyone knows the problem when the tea is empty again and the way to the trainees is too long to force them to change it.
For this case we have developed 'RealBay Services', the site for in-house services, bets and products.
Already implemented are:

* Database 
* API 
* Frontend with sample data
* Find user profiles via searchbar

<!-- API -->
# API

The RealBay Services API grants GET access to user data relevant to public profiles and all services, products and bets offered.

## User
<hr> 

- Get all public data of a user:

#### Syntax
```
/user/:id
=> public data in JASON format
```
#### Example
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

- Get all the latest products, services and bets offered by a user:

#### Syntax
```
/user/:id/items
=> array of items in JASON format
```

#### Example
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
"LongDescription": "testestestestestestestestest",
"ShortDescription": "TestTests",
"Category": "product",
"AvgRating": 10
},
{
"ItemID": 2,
"MerchantID": 1,
"ItemName": "GetTea",
"TimeLimit": "2022-07-29T22:00:00.000Z",
"Stock": 1,
"PricePerItem": 0,
"LongDescription": "TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest",
"ShortDescription": "TestTests",
"Category": "service",
}, "AvgRating": 10
},
]
```

<hr> 

- Search for user names

#### Syntax
```
/search/:name/:limit
=> Array of user data where the user names contain the variable :name, in JASON format with a maximum number of users defined by :limit. 
```

#### Example
```
/user/search/a/2 
=>
[
{
}, "UserID",
"UserName": "LinusDerHuan",
"PwHash": ".lkjhzsdertfzguhij",
"Email": "examplemail@mail.com",
"Location": "RealCoreGroup Essen, ETEC",
"Tel": "+49 0123455678",
"Twitter":"@Linus_huan_der",
"LinkedIn": "Linus Huan",
"bio": "Moin, I'm the Linus and nen Huan Moin, I'm the Linus and nen Huan Moin, I'm the Linus and nen Huan Moin, I'm the Linus and nen Huan!"
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

- All data of an item

#### Syntax
```
/item/:id
=> Item data in JASON format
```
#### Example
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
"LongDescription": "sfwfsfsfssfwfsfssfwfsffsfwfsffsfwfsffsfwfsffsfwfsffsfwfsffsfwfsffsfwfsffsffsfwfsffsffsfwfsffsffsfwfsffsfwfsffsffsfwfsffsfwfsffsffsfs",
"ShortDescription": "sfwfsfsfssfwfsfsfssfwfsfs",
"Category": "product",
"AvgRating": 10
}
```

<hr>

- 

#### Syntax
```
/recommendations/:category/:amount/:minID
=> array of categories, each holding multiple items as JASON objects || multiple JASON objects from one category. 
```
#### Parameters
| Parameter | Possible values | Description |
| ------------- | ------------- | ------------- |
| category | foreach, ignore, service, product, bet | get them for each category, get items and ignore the category, get items only from specific category |
| amount | any integer | amount of items to get for each selected category |
| minID | any integer | minimal id of the items to select (-1 to ignore) |

#### Example
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
"LongDescription": "sfwfsfsfssfwfsfssfwfsffsfwfsffsfwfsffsfwfsffsfwfsffsfwfsffsfwfsffsfwfsffsffsfwfsffsffsfwfsffsffsfwfsffsfwfsffsffsfwfsffsfwfsffsffsfs",
"ShortDescription": "sfwfsfsfssfwfsfsfssfwfsfs",
"Category": "product",
"AvgRating": 10
}
```




<!-- Roadmap -->
# Roadmap

1. add settings to the frontend
2. tags dropdown menu
3. login
