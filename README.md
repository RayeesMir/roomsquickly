# Roomsquickly
   
### What is this repository for? ###

*  Code Challange HotelQuickly.
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
  * Before Building and running app using docker.if you want to load some data in database there are 2 ways You can write commond npm run seedtest or npm run seed in docker file.
  * Change /src/config file set host for databse mongodb://mongo docker container insted of mongodb://localhost
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
      * /api/v1/rooms        
      *   /api/v1/rooms/startAuction/:id          
      *   /api/v1/rooms/auction/all
  ### Bids
      *   /api/v1/bids/auction
      *   /api/v1/bids/room/:roomId
      *   /api/v1/bids/:bidId
For All Of these Endpoint documentation is avaliable inside apidocs folder of app. 
### Who do I talk to? ###

* mail me on mirrayees859@gmail.com
* feel free to raise issue 
