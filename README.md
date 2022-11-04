# Haitian In tech People Budget

Haitian diaspora People Budget to get a high level view of budgets in Haiti.
# Tech stack

React, Express, Nodejs
# How to run in development

- Install dependencies

    - ```bash
        npm install # server dependencies
        cd view && npm install && cd - # client dependencies
        ```

- Run the frontend
    - ```bash
        npm run client
      ```
    - Open http://localhost:3000 to view it in the browser.
<br />
<br />
- Then in a second terminal, run the backend
    - ```bash
        npm run server
        ```
    - API Documentation: http://localhost:3001/api-docs
<br />
<br />
- Or you can run the full app from one terminal
    - ```bash
        npm start
        ```

# How to run in production

## Frontend

- Build the frontend
    - ```bash
        npm run build
        ```
- Serve the compiled files (`./view/build`) using any static server (Vercel, Heroku, Netlify, etc.)

**Note:** The client does not currently connect to the API, so you can serve from any static server without worrying about environment variables for the backend.

## Backend

We've included configuration files for Fly.io. You can use it to deploy the backend to production.
    - `Dockerfile` for building the image
    - `fly.toml` for deploying the app to Fly.io

Please, find instructions here: https://fly.io/docs/languages-and-frameworks/dockerfile/