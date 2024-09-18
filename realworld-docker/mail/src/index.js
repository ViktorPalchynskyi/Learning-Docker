const express = require('express');
const axios = require('axios');
const { port, authApiUrl, apiUrl } = require('./configuration');

const app = express();

app.get('/test', (req, res) => {
    res.send('Our mail server is working correctly');
});

app.get('/testconnectionwithapiservice', async (req, res) => {
    const { data: test } = await axios.get(`${apiUrl}/testapidata`);

    res.json({
        testapidata: test.testwithapi,
        fromMailService: true,
        num: test.number,
    });
});

app.get('/testconnectionwithauthservice', async (req, res) => {
    console.log(`${authApiUrl}/currentUser`);

    const { data: user } = await axios.get(
        `${authApiUrl}/currentUser`
    );

    res.json({
        textwithcurrentuser: true,
        fromMailService: true,
        currentUserFroAuth: user,
    });
});

app.listen(port, async () => {
    console.log(`Started mail service on port ${port}`);
});