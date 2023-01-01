const uuid = require('uuid');

var dogs = [];

const getDogs = (req, res) => {
    res.status(200).send(dogs);
};

const insertDogs = (req, res) => {
    const { name, race, age } = req.body;

    dogs.push({
        id: uuid.v4(),
        name,
        race,
        age
    });

    res.status(201).send({ message: '🐶 Registered!'});
};

const updateDogs = (req, res) => {
    const { id } = req.params;
    const { name, race, age } = req.body;

    const updateDog = dogs.find(updateDog => updateDog.id === id);

    if (!updateDog) {
        res.status(404).send({ message: '🐶 Not Identified!'});
    }

    updateDog.name = name;
    updateDog.race = race;
    updateDog.age = age;

    res.status(200).send({ message: '🐶 Updated!'});
};

const deleteDogs = (req, res) => {
    const { id } = req.params;

    const deleteDog = dogs.findIndex(deleteDog => deleteDog.id === id);

    if (deleteDog === -1) {
        res.status(404).send({ message: '🐶 Not Identified!'});
    }

    dogs.splice(deleteDog, 1);

    res.status(200).send({ message: '🐶 Deleted!'});
};

module.exports = {
    getDogs, insertDogs, 
    updateDogs, deleteDogs
};
