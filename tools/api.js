import express  from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import colors from 'colors';
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

const response = [
    {
        name : "Batman",
        age : 32,
        bio : "Batman is the superhero protector of Gotham City, a man dressed like a bat who fights against evil and strikes terror into the hearts of criminals everywhere.",
        img : "https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg"
    }, {
        name : "Tyrion Lanister",
        age : 39,
        bio : "Arrested for riding a dragon drunk.",
        img : "https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C.jpg"
    }, {
        name : "Deadpool",
        age : 200,
        bio : "The rogue experiment leaves Deadpool with accelerated healing powers and a twisted sense of humo",
        img : "https://vignette3.wikia.nocookie.net/marvelmovies/images/6/66/Deadpool_promo.png/revision/latest?cb=20150707202600"
    }, {
        name : "Joker",
        age : 42,
        bio : "The Joker, Clown Prince of Crime, is Batman's arch-nemesis. An agent of chaos known for his malicious plots, wacky gadgets and insidious smile, he has caused Batman more suffering than any other villain he has ever faced. His origin, name, and true motivations remain a mystery.",
        img : "https://images4.alphacoders.com/605/thumb-1920-60578.jpg"
    }, {
        name : "Thanos",
        age : 1745,
        bio : "Thanos is an eternal with the deviant gene, making him unique and extremely powerful, even amongst his own kind. Above all else, Thanos loves and worships Mistress Death, the embodying entity of Death in the Marvel Universe. Few can equal his intelligence, strength, and ambition for power. Thanos has wielded the Cosmic Cube, the Infinity Gauntlet, and even the Heart of the Universe.",
        img : "https://vignette4.wikia.nocookie.net/villains/images/c/c1/Thanosinfinity.jpg/revision/latest?cb=20160119073257"
    }, {
        name : "Scarecrow",
        age : 563,
        bio : "Utilizing a fear-inducing gas known as fear toxin, Jonathan Crane preys upon the people of Gotham City as the villainous Scarecrow.",
        img : "http://vignette1.wikia.nocookie.net/powerlisting/images/f/fd/The_scarecrow.jpg/revision/latest?cb=20120415044519"
    }, {
        name : "Hal Jordan",
        age : 124,
        bio : "With the ability to overcome great fear and harness the power of will, test-pilot Hal Jordan was chosen to be the Green Lantern of Sector 2814 inheriting the ring of the dying alien Green Lantern, Abin Sur. Through sheer will power and determination, Hal has established an impressive record of heroism across the galaxy with the help of his fellow Green Lanterns as well as his peers in the Justice League.",
        img : "https://static.comicvine.com/uploads/scale_small/4/49448/1673567-green_lantern_hal_jordan5b.png"
    }, {
        name : "Wolverine",
        age : 352,
        bio : "A long-lived mutant with the rage of a beast and the soul of a Samurai, James \"Logan\" Howlett's past is filled with blood, war, and betrayal. Possessing an accelerated healing factor, enhanced senses, and bone claws in his hands that, along with his skeleton, are coated in adamantium, Wolverine is the ultimate weapon.",
        img : "http://www.wtfgamersonly.com/wp-content/uploads/2016/10/wolverinex-menapocalpse.jpg"
    }, {
        name : "Supergirl",
        age : 679,
        bio : "Kara Zor-El is Superman's cousin and last survivor of Krypton's Argo City. She has a brash and defiant personality that she developed in response to the destruction of Krypton. Currently, she is operating out of National City alongside the D.E.O.",
        img : "https://www.purefandom.com/wp-content/uploads/2017/04/Supergirl.png"
    }, {
        name : "Iron Man",
        age : 37,
        bio : "Tony Stark was an arrogant son of wealthy, weapon manufacturer Howard Stark. Tony cared only about himself. This changed when he had a change of heart after he was kidnapped by terrorists and gravely injured. Stark was pressured to create a weapon of mass destruction. Instead, he created a suit of power armor to escape. Tony uses his vast resources and intellect to make the world a better place as the Invincible Iron Man. His super hero identity led him to become the founding member of the Avengers.",
        img : "https://vignette2.wikia.nocookie.net/ironman/images/9/96/Iron-Man-AOU-Render.png/revision/latest?cb=20150306195832"
    }, {
        name : "Saitama",
        age : 28,
        bio : "most powerful hero alive. Saitama faces a self-imposed existential crisis, as he is now too powerful to gain any thrill from his deeds.",
        img : "https://s-media-cache-ak0.pinimg.com/originals/3d/cb/ac/3dcbac445e57977db9c548265af1be22.jpg"
    }, {
        name : "Kaneki",
        age : 39,
        bio : "Originally born as a human, but turn to GHOUL , Kaneki earns himself the name One-Eye among the ghoul-community",
        img : "https://images7.alphacoders.com/541/thumb-1920-541200.png"
    }, {
        name : "Madara",
        age : 341,
        bio : "legendary leader of the Uchiha clan. He founded Konohagakure alongside his rival, Hashirama Senju, with the intention of beginning an era of peace. When the two couldn't agree on how to achieve that peace, they fought for control of the village.",
        img : "http://i0.kym-cdn.com/entries/icons/original/000/018/114/madara_uchiha_by_uchihaclanancestor-d5gaufw.png"
    }, {
        name : "Hisoka",
        age : 92,
        bio : "a Hunter and former member of the Phantom Troupe; his physical strength ranked third in the group. He is always in search for strong opponents, and would spare those who have great potential.",
        img : "https://img00.deviantart.net/af38/i/2014/347/3/7/hisoka_8__hxh__by_acetaris-d89cojb.jpg"
    }
]
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


app.post('/api/result', function(req, res) {

    console.log('Response Date---- : '.red,req.body);
    let id = getRandomInt (0 , response.length - 1 );
    console.log(id , response[id]);
    res.status(202).json(response[id])
    // res.send('OK :D');
});

app.post('/api/questions', function(req, res) {
    console.log('Api fdfd called with data ---- : ',req.body);

    res.status(202).json(questions)
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