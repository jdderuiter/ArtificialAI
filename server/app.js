const express = require("express");
const app = express()
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path = require('path');

const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var profilesRouter = require('./routes/profiles');

global.appRoot = path.resolve(__dirname + '/../');

const Profile = require('./models/profile');

const mongoDB = 'mongodb://127.0.0.1/rankingapp';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/', indexRouter);
app.use('/profiles', profilesRouter);

io.on('connection', (socket) => {
    socket.on('getProfiles', async () => {
        const profiles = await Profile.find({}).exec();
        socket.emit('profiles', profiles)
    });


    socket.on('uploadImage', (img) => {
        const file = '/img/'+Date.now()+'.png'
        const path = appRoot + '/public' + file
        const base64Data = img.replace(/^data:([A-Za-z-+/]+);base64,/, '');
        fs.writeFileSync(path, base64Data,  {encoding: 'base64'});
        uploadToDB(file);
    });

    socket.on('deleteProfile', (id) => {
        deleteProfile(id)
    });
});
  
server.listen(3000, () => {
    console.log('listening on *:3000');
});

const deleteProfile = (id) => {
    Profile.findById(id)
    .then((instance) => {
        const path = appRoot + '/public' + instance.image;
        try {
            fs.unlinkSync(path)
            Profile.deleteOne({ _id: id }).exec()
            emitProfiles()
          } catch(err) {
            handleError(err)
          }

    }).catch((err) => {
        handleError(err)
    });
}

const emitProfiles = async () => {
    const profiles = await Profile.find({}).exec();
    io.emit('profiles', profiles)
}


const uploadToDB = (path) => {
    Profile.create({ 
        _id: new mongoose.Types.ObjectId,
        image: path 
    }).then((instance) => {
        emitProfiles();
    }).catch((err) => {
        handleError(err)
    });
}

const handleError = (err) => {
    console.log(err);
    return false;
}