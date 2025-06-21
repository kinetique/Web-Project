const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8888;

app.use(cors());

const characters = {
    viktoria: {
        id: "viktoria",
        name: "Viktoria Fletcher",
        description: "A scientist who has dedicated her life to studying the multiverse. Finally, at the age of 27, she managed to travel to another universe, but to stay there she had to pretend to be an academy teacher named Arabella Beecham. She is cold, intelligent, and puts science above emotional attachment."
    },
    prescott: {
        id: "prescott",
        name: "Prescott Mircea",
        description: "The principal of the Alzbeta Mircea Academy, at the age of 33, was turned into a vampire, about 200 years ago. A person who lived through history, teaches it and leads a vampire class. He believes that cruelty for good is better than being soft and patient. He is cold, strict and mysterious, that attracts attention to him."
    },
    marshall: {
        id: "marshall",
        name: "Marshall Cobham",
        description: "A 15-year-old student at Alzbeta Mircea Academy, he studies in Prescott’s class because he was born a human vampire. A quiet, reserved young man, he tries very hard to gain Prescott’s approval, he has a hard time communicating with people, but he has a few friends."
    }
};

app.get('/characters/:id', (req, res) => {
    const id = req.params.id.toLowerCase();
    const character = characters[id];
    if (character) {
        res.json(character);
    } else {
        res.status(404).json({ error: "Character not found" });
    }
});

app.listen(PORT, () => {
    console.log(`Mock server is running on http://localhost:${PORT}`);
});
