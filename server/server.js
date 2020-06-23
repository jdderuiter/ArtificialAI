const express    = require('express');
const path       = require('path');
const port       = 8000;
const app        = express();

/**
 * WebSocket Configuration
 */
const io = require('socket.io')(8001, {
    handlePreflightRequest: (req, res) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": req.headers.origin,
            "Access-Control-Allow-Credentials": true,
        };
        res.writeHead(200, headers);
        res.end();
    },
    path: '/',
    serveClient: true,
    origins: '*:*',
    cookie: true,
    pingInterval: 1000,
    pingTimeout: 1000,
    upgradeTimeout: 1000,   
    allowUpgrades: true,
    cookie: 'AAI_stream',
    cookiePath:'/',
    cookieHttpOnly:true 
});

io.on('connection',function(socket){
    socket.on('stream',function(data){
        socket.broadcast.emit('stream',data);
    });

    socket.on('setQuestion', (question) => {
        socket.emit('question', question)
    });

    socket.on('setAnswer', (answer) => {
        socket.emit('question', answer)
    });
});

io.of('/stream').clients((error, clients) => {
  if (error) throw error;
    console.log(clients);
});

app.listen(port, () => console.log(`\x1b[40m`,`\x1b[32m`,
`
    [+] Server         : http://localhost:8000
    [+] Socket         : ws://localhost:8000
    [~] Running Server...
`,`\x1b[0m`));