const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const { port, host, db, authApiUrl } = require('./configuration');
const { connectDb } = require('./helpers/db');

const app = express();
const kittySchema = new mongoose.Schema({
    name: String,
});
const Kitten = mongoose.model('Kitten', kittySchema);

app.get('/test', (req, res) => {
    res.send('Our api server is working correctly');
});

app.get('/posts', (req, res) => {
    res.send('New posts');
});

app.get('/testwithcurrentuser', async (req, res) => {
    console.log(`${authApiUrl}/currentUser`);
    

    const { data: user } = await axios.get(
        `${authApiUrl}/currentUser`
    );

    res.json({
        textwithcurrentuser: true,
        currentUserFroAuth: user,
    });
});

app.get('/testapidata', (req, res) => {
    res.json({
        testwithapi: true,
        number: Math.round(Math.random() * 10000000),
    });
});

const startServer = () => {
    app.listen(port, async () => {
        console.log(`Started api service on port ${port}`);
        console.log(`Our host is ${host}`);
        console.log(`Database url ${db}`);

        const silence = new Kitten({ name: 'Silence' });
        silence.save();
        console.log(silence);
    });
};

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer);
