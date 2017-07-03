# Roomsquickly
   
### What is this repository for? ###

* Code Challange From HotelQuickly.
* Version 1.0   

### Requirements ###

 * Node LTS version(6.11.0) 
 * MongoDB 3.4.4
 * Docker(Optional)
 
### How do I get set up? ###
  ### Without Docker 
    * Clone Repo.
    * Run `npm install` 
    * Run `npm run testseed` if you wanna test app this is to load test data.(optiona
    * Run `npm run seed` Provide number of partners and rooms with want to crteate in db.
    * Default values are 5 and 10 for numberofpartners and numberof rooms respectively.
    * Run `npm run test` if you wanna test app. if so execute npm run testseed first. 
    * Run `npm start` server will start on port 3000 command and you are ready to go.
    
## With Docker    
  * Execute `sudo docker-compose up`
   it will build and start on port 3000. if u wannat add test or seed commands you can add them in DockerFile

### Language/Platform Used ### 
      *  Node.js
      *  Express.js
      *  MongDB
      *  Docker
   Didn't use Redis but can be used for Caching.   
 ### EndPoints
  ### Rooms
      *  /api/v1/rooms
          * Method GET
          * Return All Auctionable Rooms Ordered by Time Remainig For Bidding.
      *   /api/v1/startAuction/:id
          * Method GET
          * If you want start Auction for single room,This route can be used from dashboard. Room will be auctionable on for 10 minutes.
      *   /api/v1/auction/all
          * Method GET
          * If you want start Auction for All rooms,This will make all rooms auctionable in database.All Rooms will be auctionable on for 10 minutes.
  ### Bids
      *   /api/v1/bids/auction
    Method POST
        * This Endpoint is used top post a bid for room that.
        * Data to be posted is like this 
          `{
            "partnerId":"partnerId",
            "roomId":"roomId",
            "amount":"amount"
          }`
      *   /api/v1/bids/room/:roomId
        * Methods GET
      *   /api/v1/bids/:bidId
        * METHOD GET 
### Who do I talk to? ###

* mail me on mirrayees859@gmail.com
* feel free to raise issue
