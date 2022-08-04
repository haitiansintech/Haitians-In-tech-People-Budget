const server = require('./app/app');

const port = process.env.PORT | 3001;

server.listen(port, (message) =>
    console.log(`App listening on port:${port}`)
);