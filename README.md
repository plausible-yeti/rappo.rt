[![Floobits Status](https://floobits.com/urbantumbleweed/client-recon.svg)](https://floobits.com/urbantumbleweed/client-recon/redirect)

# client-recon
Sales and account management relationship augmentation engine

# user-stories

As an ______, I want to _____, so that I can ________.

As an account manager, I want a repository of customer info so I have it in one place.
As an account manager, I want a reminder when it's my client's birthday so I can develop the replationship
As an account manager, I want the latest news about
my customer's company, so I am up to date


----------------
 1. User loads dashboard
 2. 
 

Front-end:


Login:
Web token


Database:

3rd PartyAPI:
Server-side calls

Server API Endpoints:

/database
  db.js
    - create schema
      - user
        -name, user, id
      - user cli
      - client
  model.js
    - db query methods
---------------------------------------------------
/server
  -server.js 
    - middleware
    - where server starts/listen
    - omg don't forget body parser json()
    -app.use express static

  -routing
    -authentication?
    -api routes, which reference handlers
      app.use('/api/user/client', handler.clientHandler)
  -handler/controller
    -req,res handling
      -call model.js methods to interact with database
      -helper/api
  -helpers
    -promisify library
  -keys/api methods
    -external api keys and methods
---------------------------------------------------
  /public or client
    -styles
    -assets
    -index.html
      -nav-bar
      -ng-view container
    -app.js
      -routing - authentication
        -refers to app folder app.dashboardcontroller, app.clientcontroller,etc.

    /app
      -services
        -shared state (variable that holds data)
        -shared factories/services
      /dashboard
        -controller
        -html
      /client
        -controller
        -html
      /createnewclient
        -controller
        -html
    
    




