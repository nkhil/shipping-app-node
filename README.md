# Shipping App

## Setup

1. Clone this repo 

```bash
git clone https://github.com/nkhil/shipping-app-node.git
cd shiping-app-node
```

2. Start the server

```bash
npm run start
```

3. Use the app

The app should now be running on `http://localhost:8080/` and you should be able to open it using any modern browser.

## Status

I was able to complete the steps 1, 2 and 3.

The following features have been implemented:

## Features

**POST /auth route**

This route takes a POST request and authenticates the username / password against existing users. If the user's valid, the server signs a Json Web Token (JWT) and sets it to a cookie on the client side. I'm following this approach as the instructions specified I couldn't modify any of the files in the `static` folder. 

An alternate approach here could have been to store the JWT token in the client's local storage, and execute some JS on the client side that checks for the token in local storage and adds it to the headers as part of every request.

**GET /show route**

The GET /show route serves up the current orders (in the orders.json file) in the requested format.


**The following route is not yet complete as I ran out of time:**

- POST /upload
- POST /search

## .gitignore

I've ignored all the pertinent .json files (orders, customers, users etc) as they contained sensitive information that I did not want to commit to source control. 

