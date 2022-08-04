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

- Get newest items from categories

#### Syntax
```
/recommendations/:category/:amount/:minID/:maxID/:order
```
#### Parameters
| Parameter | Possible values | Description |
| ------------- | ------------- | ------------- |
| category | foreach, ignore, service, product, bet | get them for each category, get items and ignore the category, get items only from specific category |
| amount | any integer | amount of items to get for each selected category |
| minID | ignore, any integer | minimal id of the items to select |
| maxID | ignore, any integer | maximal id of the items to select |
| order | desc, asc | descending  or ascending  order |

#### Example
```
/recommendations/foreach/3/1/10/desc
=>
[
[
{
"ItemID": 3,
"MerchantID": 1,
"ItemName": "Ball3",
"TimeLimit": "2022-07-29T22:00:00.000Z",
"Stock": 1,
"PricePerItem": 0,
"LongDescription": "sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs",
"ShortDescription": "sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs",
"Category": "product",
"AvgRating": 10
},
{
"ItemID": 2,
"MerchantID": 1,
"ItemName": "Ball2",
"TimeLimit": "2022-07-29T22:00:00.000Z",
"Stock": 1,
"PricePerItem": 0,
"LongDescription": "sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs",
"ShortDescription": "sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs",
"Category": "product",
"AvgRating": 10
},
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
],
[
{
"ItemID": 10,
"MerchantID": 4,
"ItemName": "Pizza holen",
"TimeLimit": "2022-07-29T22:00:00.000Z",
"Stock": 1,
"PricePerItem": 0,
"LongDescription": "sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs",
"ShortDescription": "sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs",
"Category": "service",
"AvgRating": 10
},
{
"ItemID": 9,
"MerchantID": 1,
"ItemName": "Tee holen",
"TimeLimit": "2022-07-29T22:00:00.000Z",
"Stock": 1,
"PricePerItem": 0,
"LongDescription": "sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs",
"ShortDescription": "sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs",
"Category": "service",
"AvgRating": 10
},
{
"ItemID": 8,
"MerchantID": 1,
"ItemName": "kochen",
"TimeLimit": "2022-07-29T22:00:00.000Z",
"Stock": 1,
"PricePerItem": 0,
"LongDescription": "sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs",
"ShortDescription": "sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs",
"Category": "service",
"AvgRating": 10
}
],
[
{
"ItemID": 7,
"MerchantID": 2,
"ItemName": "kickern",
"TimeLimit": "2022-07-29T22:00:00.000Z",
"Stock": 1,
"PricePerItem": 0,
"LongDescription": "sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs",
"ShortDescription": "sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs",
"Category": "bet",
"AvgRating": 10
},
{
"ItemID": 6,
"MerchantID": 2,
"ItemName": "kickern",
"TimeLimit": "2022-07-29T22:00:00.000Z",
"Stock": 1,
"PricePerItem": 0,
"LongDescription": "sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs",
"ShortDescription": "sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs",
"Category": "bet",
"AvgRating": 10
},
{
"ItemID": 5,
"MerchantID": 2,
"ItemName": "kickern",
"TimeLimit": "2022-07-29T22:00:00.000Z",
"Stock": 1,
"PricePerItem": 0,
"LongDescription": "sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs",
"ShortDescription": "sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs",
"Category": "bet",
"AvgRating": 10
}
]
]
```




<!-- Roadmap -->
# Roadmap

1. add settings to the frontend
2. tags dropdown menu
3. login
