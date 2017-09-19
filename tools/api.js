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

const questions = [
    {
        question : "What do you fear more?",
        answers : [
            "The heroes who seek to conquer me",
            "The other monsters and their scheming"
        ]
    },
    {
        question : " The best dungeons are the ones that:",
        answers : [
            " Make me stronger and more versatile as heroes die within its walls",
            "Crush my enemies with single-minded purpose"
        ]
    },
    {
        question : "Which of these do you live for?",
        answers : [
            " A life of purpose and meaning",
            "A life of material pleasure"
        ]
    },
    {
        question : " In school, your most notable accomplishments were largely:",
        answers : [
            "Academic or artistic",
            "Athletic or mechanical"
        ]
    },
    {
        question : " Where does magic come from?",
        answers : [
            " Elemental forces of our world",
            "Divine powers from beyond our world"
        ]
    },
    {
        question : "1M $ in cash in exchange for killing Messi",
        answers : [
            "i will kill him slowly",
            "i will crush him"
        ]
    }
];

app.post('/api/type', function(req, res) {
    console.log('Api fdfd called with data ---- : ',req.body);

/*    res.status(202).json({
        name : "Tyrion Lanister",
        age : 39,
        bio : "Arrested for riding a dragon drunk.",
        img : "https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C.jpg"
    })*/

    res.status(202).json({
        name : "Batman",
        age : 32,
        bio : "Batman is the superhero protector of Gotham City, a man dressed like a bat who fights against evil and strikes terror into the hearts of criminals everywhere.",
        img : "https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg"
    })
    // res.send('OK :D');
});

app.post('/api/question/:id', function(req, res) {
    console.log('Api fdfd called with data ---- : ',req.body);

    if(questions[req.params.id] != undefined){
        res.status(202).json(questions[req.params.id])
    }else{
        res.status(202).json(questions[0])
    }
    // res.send('OK :D');
});


app.post('/data', function(req, res) {
    console.log('GET Ders: ');

    res.send("Hello :D");
});


module.exports = app;