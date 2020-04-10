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

const mockConclusions = [
    [
        'De gekste man van het feest',
        'Grootste kans om putjesschepper te worden'
    ],
    [
        '80% kans dat hij/zij een moord zal plegen',
    ],
    [
        'Beste dansmoves',
        'Heeft geen diploma'
    ],
    [
        'Knapste persoon van het feest',
    ],
    [
        'Zal minimaal 4 kinderen krijgen',
        'Wil het liefst niet werken'
    ],
    [
        'Ziet er uit alsof hij/zij zwanger is',
        'Blablabla'
    ],
    [
        'Blablabla',
        'blablabla.'
    ],
]

const uploadToDB = (path , conc = mockConclusions[0]) => {
    Profile.create({ 
        _id: new mongoose.Types.ObjectId,
        image: path ,
        conclusions: conc
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

module.exports.mockData = async function () {
    console.log('------------IMPORTING MOCK DATA & STARTING SERVER------------');
    const directoryPath = appRoot + '/public/img';
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        //listing all files using forEach
        let i = 1;
        files.forEach(function (file) {
            Profile.find({image: '/img/'+file}).exec()
            .then((res) => {
                if (res.length > 0) {
                    console.log("Profile for image: "+ file + " already exists. skipping")
                } else {
                    uploadToDB('/img/' +file, mockConclusions[i])
                    i++
                    console.log("Uploaded random user for file: " + file);
                }
                
            })    
        });
    });


    
  };