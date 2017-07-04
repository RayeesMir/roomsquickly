define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/bids/room/:roomId",
    "title": "Get All Bid For a Room With no Duplicates",
    "name": "getBidByRoomId",
    "group": "Bids",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Bid id .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>is the id of the Room.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "partnerId",
            "description": "<p>is the Id of the Partner Who Posted Bid to Room.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>is Bid Amount for the Room.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Updated time of Bid for the Rooom.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created time of Bid for the Rooom.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n  \"status\": \"success\",\n  \"code\": 200,\n  \"message\": {\n      \"bids\": [\n          {\n              \"bid\": {\n                  \"_id\": \"595bf7c229a6632c37abd0a7\",\n                  \"updatedAt\": \"2017-07-04T20:17:06.859Z\",\n                  \"createdAt\": \"2017-07-04T20:17:06.859Z\",\n                  \"partnerId\": \"59510550bbd96816cb522289\",\n                  \"roomId\": \"595baf90e6da0d61d541a45c\",\n                  \"amount\": 11076,\n                  \"__v\": 0\n              },\n              \"partnerId\": \"59510550bbd96816cb522289\"\n          }\n      ]\n  }\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/bids/routes/index.js",
    "groupTitle": "Bids"
  },
  {
    "type": "get",
    "url": "/api/v1/bids/:bidId",
    "title": "Get Bid Details Whether Bid Is a winner",
    "name": "getBidDetails",
    "group": "Bids",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Bid id .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>is the id of the Room.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "partnerId",
            "description": "<p>is the Id of the Partner Who Posted Bid to Room.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>is Bid Amount for the Room.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Updated time of Bid for the Rooom.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created time of Bid for the Rooom.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n  \"status\": \"success\",\n  \"code\": 200,\n  \"message\": {\n      \"bid\": {\n          \"_id\": \"595bf7c229a6632c37abd0a7\",\n          \"updatedAt\": \"2017-07-04T20:17:06.859Z\",\n          \"createdAt\": \"2017-07-04T20:17:06.859Z\",\n          \"partnerId\": {\n              \"_id\": \"59510550bbd96816cb522289\",\n              \"updatedAt\": \"2017-07-01T13:57:09.685Z\",\n              \"createdAt\": \"2017-07-01T13:57:09.685Z\",\n              \"__v\": 0,\n              \"api_endpoint\": \"http://bell.biz\",\n              \"email\": \"rodrigo_zulauf@gmail.com\",\n              \"name\": \"Sally\"\n          },\n          \"roomId\": \"595baf90e6da0d61d541a45c\",\n          \"amount\": 11076,\n          \"__v\": 0\n      }\n  }\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/bids/routes/index.js",
    "groupTitle": "Bids"
  },
  {
    "type": "post",
    "url": "/api/v1/bids/auction/",
    "title": "Post Bid For a Room",
    "name": "postBid",
    "group": "Bids",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partnerId",
            "description": "<p>Id of the Partner who is posting Bid for Room.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>Id of the Room for which room bid is being posted.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>Bidding Amount.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Bid id .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roomId",
            "description": "<p>is the id of the Room.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "partnerId",
            "description": "<p>is the Id of the Partner Who Posted Bid to Room.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>is Bid Amount for the Room.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Updated time of Bid for the Rooom.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created time of Bid for the Rooom.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n    \"updatedAt\": \"2017-07-04T20:17:06.859Z\",\n    \"createdAt\": \"2017-07-04T20:17:06.859Z\",\n    \"partnerId\": \"59510550bbd96816cb522289\",\n    \"roomId\": \"595baf90e6da0d61d541a45c\",\n    \"amount\": 11076,\n    \"_id\": \"595bf7c229a6632c37abd0a7\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Not Found\n    {\n \t\"status\": \"failure\",\n \t\"code\": 302,\n \t\"message\": {\n     \t\"error\": \"Room is Not Auctionable\"\n \t\t}\n\t     }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\t\tHTTP/1.1 400 Not Found\n   {\n \t\"status\": \"failure\",\n \t\"code\": 300,\n \t\"message\": {\n     \t\"error\": \"Bid Amount Is less than minimal Bid Amount\"\n \t\t}\n\t  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/bids/routes/index.js",
    "groupTitle": "Bids"
  },
  {
    "type": "get",
    "url": "/rooms/",
    "title": "Returns Auctionable Rooms",
    "name": "GetRooms",
    "group": "Rooms",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>room id of the Room.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "room_number",
            "description": "<p>Room Number of the Room.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotel_name",
            "description": "<p>hotel Name to which room belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "winner",
            "description": "<p>BidId which is winner for this room.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "minimal_bid",
            "description": "<p>Minimal Bid Amount for the Room.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "expiry",
            "description": "<p>Expiry time of Auction for the Rooom.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Updated time of Auction for the Rooom.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created time of Auction for the Rooom.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image of Auctionable Rooom.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"595baf90e6da0d61d541a45c\",\n  \"updatedAt\": \"2017-07-04T15:09:04.611Z\",\n  \"createdAt\": \"2017-07-04T15:09:04.611Z\",\n  \"minimal_bid\": 6754,\n  \"expiry\": \"2018-05-14T19:52:32.117Z\",\n  \"winner\": null,\n  \"image\": \"http://lorempixel.com/640/480\",\n  \"room_number\": \"22\",\n  \"hotel_name\": \"West Inc\"\t\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/rooms/routes/index.js",
    "groupTitle": "Rooms"
  },
  {
    "type": "get",
    "url": "/api/v1/rooms/startAuction/all",
    "title": "Starts Auction For all Room",
    "name": "auctionAllRooms",
    "group": "Rooms",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>room id of the Room.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "room_number",
            "description": "<p>Room Number of the Eoom.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotel_name",
            "description": "<p>hotel Name to which room belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "winner",
            "description": "<p>BidId which is winner for this room.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "minimal_bid",
            "description": "<p>Minimal Bid Amount for the Room.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "expiry",
            "description": "<p>Expiry time of Auction for the Rooom.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image of Auctionable Rooom.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    [{\n      \"_id\": \"595baf90e6da0d61d541a45c\",\n      \"updatedAt\": \"2017-07-04T15:09:04.611Z\",\n      \"createdAt\": \"2017-07-04T15:09:04.611Z\",\n      \"minimal_bid\": 6754,\n      \"expiry\": \"2018-05-14T19:52:32.117Z\",\n      \"winner\": null,\n      \"image\": \"http://lorempixel.com/640/480\",\n      \"room_number\": \"22\",\n      \"hotel_name\": \"West Inc\"\t\n    },\n    {\n \"_id\": \"595baf90e6da0d61d541a45e\",\n\t\"updatedAt\": \"2017-07-04T15:09:04.611Z\",\n\t\"createdAt\": \"2017-07-04T15:09:04.611Z\",\n\t\"minimal_bid\": 8687,\n\t\"expiry\": \"2018-02-13T02:32:40.817Z\",\n\t\"winner\": null,\n\t\"image\": \"http://lorempixel.com/640/480\",\n\t\"room_number\": \"0\",\n\t\"hotel_name\": \"Labadie - Hartmann\"\n\t\t}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/rooms/routes/index.js",
    "groupTitle": "Rooms"
  },
  {
    "type": "get",
    "url": "/api/v1/rooms/startAuction/:id",
    "title": "Starts Auction For a Room",
    "name": "auctionSingleRoom",
    "group": "Rooms",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>room id of the Room.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "room_number",
            "description": "<p>Room Number of the Room.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hotel_name",
            "description": "<p>hotel Name to which room belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "winner",
            "description": "<p>BidId which is winner for this room.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "minimal_bid",
            "description": "<p>Minimal Bid Amount for the Room.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "expiry",
            "description": "<p>Expiry time of Auction for the Rooom.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Updated time of Auction for the Rooom.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created time of Auction for the Rooom.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image of Auctionable Rooom.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"595baf90e6da0d61d541a45c\",\n  \"updatedAt\": \"2017-07-04T15:09:04.611Z\",\n  \"createdAt\": \"2017-07-04T15:09:04.611Z\",\n  \"minimal_bid\": 6754,\n  \"expiry\": \"2018-05-14T19:52:32.117Z\",\n  \"winner\": null,\n  \"image\": \"http://lorempixel.com/640/480\",\n  \"room_number\": \"22\",\n  \"hotel_name\": \"West Inc\"\t\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/rooms/routes/index.js",
    "groupTitle": "Rooms"
  }
] });
