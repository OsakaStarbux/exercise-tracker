# hello-express

A server that serves a webpage, its resources, and some data


## Your Project

On the front-end,

- Edit `views/index.html` to change the content of the webpage
- `public/client.js` is the javacript that runs when you load the webpage
- `public/style.css` is the styles for `views/index.html`
- Drag in `assets`, like images or music, to add them to your project

On the back-end,

- your app starts at `server.js`
- add frameworks and packages in `package.json`
- safely store app secrets in `.env` (nobody can see this but you and people you invite)

## Exercise Tracker REST API
A microservice project, part of Free Code Camp's curriculum
# User Stories
- I can create a user by posting form data username to /api/exercise/new-user and returned will be an object with username and _id.
- I can get an array of all users by getting api/exercise/users with the same info as when creating a user.
- I can add an exercise to any user by posting form data userId(_id), description, duration, and optionally date to /api/exercise/add. If no date supplied it will use current date. Returned will be the user object with also with the exercise fields added.
- I can retrieve a full exercise log of any user by getting /api/exercise/log with a parameter of userId(_id). Return will be the user object with added array log and count (total exercise count).
- I can retrieve part of the log of any user by also passing along optional parameters of from & to or limit. (Date format yyyy-mm-dd, limit = int)

GET users's exercise log: GET /api/exercise/log?{userId}[&from][&to][&limit]