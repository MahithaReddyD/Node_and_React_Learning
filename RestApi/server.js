const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { ROUTE_CONSTANTS } = require('./helpers/route_constants');
//route,callback function
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

app.post(ROUTE_CONSTANTS.POST_REGISTER,function(req,res){
    console.log(req.body);
    app.use(bodyParser.json());
    res.send("succesfully Registered");
});
app.post(ROUTE_CONSTANTS.POST_LOGIN,function(req,res){
  console.log(req.body);
  app.use(bodyParser.json());
  res.send("succesfully Logged-In");
});
app.get(ROUTE_CONSTANTS.DEFAULT,function(req,res){
    res.send("<h1>welcome to pega</h1>");
});
app.get(ROUTE_CONSTANTS.GET_LOGIN,function(req,res){
   // res.send("<h1>welcome to pega login</h1>");
   res.sendFile(__dirname+'/html-pages/login.html');
});
app.get(ROUTE_CONSTANTS.GET_REGISTER,function(req,res){
    res.sendFile(__dirname+'/html-pages/register.html');
});
app.get(ROUTE_CONSTANTS.GET_PRODUCTS,function(req,res){
   // res.send("<h1>welcome to available products</h1>");
   const productsdata = [
    {
      "_id": "5f586118ae5d18df7b0b8b69",
      "index": 0,
      "guid": "ae6d94ce-209d-4668-b071-038a012bf1fc",
      "isActive": false,
      "balance": "$2,692.19",
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "eyeColor": "green",
      "name": "David Lloyd",
      "gender": "male",
      "company": "NETPLODE",
      "email": "davidlloyd@netplode.com",
      "phone": "+1 (896) 478-2595",
      "address": "330 Polar Street, Kansas, Idaho, 5243",
      "about": "Veniam nisi consectetur cupidatat ex elit veniam id cillum tempor mollit cupidatat. Cillum proident ullamco deserunt adipisicing dolore sint dolore aliqua velit ea aliqua ullamco labore dolore. Minim dolor nostrud amet nostrud ullamco ex ullamco sunt consectetur ex irure ea officia. Incididunt labore id voluptate dolor ut tempor.\r\n",
      "registered": "2015-10-11T11:01:04 -06:-30",
      "latitude": -83.890001,
      "longitude": 16.38996,
      "tags": [
        "excepteur",
        "consequat",
        "minim",
        "amet",
        "excepteur",
        "irure",
        "eiusmod"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Lillian Clay"
        },
        {
          "id": 1,
          "name": "Glenda James"
        },
        {
          "id": 2,
          "name": "Jacobs Cooper"
        }
      ],
      "greeting": "Hello, David Lloyd! You have 5 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5f586118ca38ef8c9e907d0f",
      "index": 1,
      "guid": "ab178bfd-f3c5-4efc-a7b5-c57c5395493b",
      "isActive": true,
      "balance": "$1,578.96",
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "eyeColor": "green",
      "name": "Marquita Powell",
      "gender": "female",
      "company": "VISALIA",
      "email": "marquitapowell@visalia.com",
      "phone": "+1 (905) 420-2952",
      "address": "180 Arion Place, Cade, Arizona, 3523",
      "about": "Veniam occaecat cupidatat eu labore commodo culpa consectetur duis eu magna. Eiusmod dolor id qui labore laborum Lorem ut ad. Tempor tempor esse aliquip nulla incididunt. Aliquip veniam id cupidatat laboris. Id et aliqua dolor esse fugiat ex quis id mollit aliqua culpa in velit velit. Ut consequat irure id ut id.\r\n",
      "registered": "2018-12-26T11:18:08 -06:-30",
      "latitude": -20.655743,
      "longitude": -92.937003,
      "tags": [
        "occaecat",
        "sit",
        "sint",
        "ut",
        "ullamco",
        "voluptate",
        "dolor"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Rochelle Stone"
        },
        {
          "id": 1,
          "name": "Gay Short"
        },
        {
          "id": 2,
          "name": "Guthrie Cohen"
        }
      ],
      "greeting": "Hello, Marquita Powell! You have 1 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5f586118f50dbbf54b1212c0",
      "index": 2,
      "guid": "ca642ab9-a0d1-48c4-97cf-81a8cfc138fc",
      "isActive": true,
      "balance": "$3,938.18",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "eyeColor": "brown",
      "name": "Buchanan Long",
      "gender": "male",
      "company": "PEARLESEX",
      "email": "buchananlong@pearlesex.com",
      "phone": "+1 (831) 536-2442",
      "address": "675 Ashland Place, Salix, California, 2361",
      "about": "Dolore ullamco cillum sit ea veniam nostrud exercitation consequat elit consectetur esse laborum officia. Ut nulla esse eu incididunt anim et ex. Quis qui irure voluptate reprehenderit dolor ex dolor est sint laborum exercitation. Minim eu amet commodo officia consequat pariatur commodo. Dolor sit incididunt nulla esse officia cillum proident deserunt. Ad nisi ullamco velit non ea deserunt aliqua ut mollit labore reprehenderit pariatur reprehenderit eiusmod.\r\n",
      "registered": "2016-04-27T12:44:16 -06:-30",
      "latitude": -63.556464,
      "longitude": 133.27659,
      "tags": [
        "Lorem",
        "occaecat",
        "tempor",
        "sit",
        "enim",
        "amet",
        "commodo"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Noel Lambert"
        },
        {
          "id": 1,
          "name": "Harding Britt"
        },
        {
          "id": 2,
          "name": "Tammie Higgins"
        }
      ],
      "greeting": "Hello, Buchanan Long! You have 6 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5f5861185d7543020daaeafc",
      "index": 3,
      "guid": "fb075381-bb4e-4aac-be47-02e27de6f3f8",
      "isActive": true,
      "balance": "$1,203.66",
      "picture": "http://placehold.it/32x32",
      "age": 39,
      "eyeColor": "blue",
      "name": "Nicole Mcintosh",
      "gender": "female",
      "company": "LOTRON",
      "email": "nicolemcintosh@lotron.com",
      "phone": "+1 (934) 476-2367",
      "address": "215 Love Lane, Chicopee, Oklahoma, 2585",
      "about": "Commodo officia anim officia anim minim cillum mollit mollit tempor dolore. Sint dolor exercitation ea occaecat cillum tempor est labore incididunt nisi nulla minim. Ex anim amet incididunt consectetur sint.\r\n",
      "registered": "2020-02-19T10:05:12 -06:-30",
      "latitude": -67.641382,
      "longitude": 52.831892,
      "tags": [
        "cillum",
        "Lorem",
        "aliquip",
        "ut",
        "sunt",
        "enim",
        "eiusmod"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Aisha Hickman"
        },
        {
          "id": 1,
          "name": "Lauren Mcneil"
        },
        {
          "id": 2,
          "name": "Lana Jensen"
        }
      ],
      "greeting": "Hello, Nicole Mcintosh! You have 9 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5f586118964c2d7d198b72dd",
      "index": 4,
      "guid": "a3589b4a-7d1a-499c-8cb0-63bc601ed779",
      "isActive": false,
      "balance": "$3,472.83",
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "eyeColor": "blue",
      "name": "Clarice Mitchell",
      "gender": "female",
      "company": "ANOCHA",
      "email": "claricemitchell@anocha.com",
      "phone": "+1 (869) 556-3404",
      "address": "628 Woodruff Avenue, Alfarata, Guam, 2025",
      "about": "Sint nostrud est cupidatat dolor. Incididunt est cupidatat aute ea consectetur enim eiusmod eiusmod ut cupidatat consequat consequat. Esse adipisicing do adipisicing id labore magna laborum do esse. Adipisicing adipisicing irure magna ut culpa nulla veniam exercitation mollit ipsum eu labore incididunt. Consequat tempor nulla ea aliquip pariatur excepteur dolor ad dolore laborum ex.\r\n",
      "registered": "2014-03-20T02:54:59 -06:-30",
      "latitude": 48.515746,
      "longitude": 65.498531,
      "tags": [
        "excepteur",
        "irure",
        "incididunt",
        "ut",
        "dolore",
        "consequat",
        "officia"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Terrie Beach"
        },
        {
          "id": 1,
          "name": "Clay Snider"
        },
        {
          "id": 2,
          "name": "Evelyn Gallegos"
        }
      ],
      "greeting": "Hello, Clarice Mitchell! You have 1 unread messages.",
      "favoriteFruit": "banana"
    }
  ]
  res.json(productsdata);
});
app.listen(3000);