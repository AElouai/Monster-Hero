import express  from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express.Router();


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', function(req, res) {
    console.log('GET HTML : ');

    res.sendFile(path.join( __dirname, '../src/index.html'));
});


app.post('/api/type', function(req, res) {
    console.log('Api fdfd called with data ---- : ',req.body);

    res.status(202).json({
        name : "Tyrion Lanister",
        age : 39,
        bio : "Arrested for riding a dragon drunk.",
        img : "https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C.jpg"
    })
    // res.send('OK :D');
});

app.post('/data', function(req, res) {
    console.log('GET Ders: ');

    res.send("Hello :D");
});


module.exports = app;