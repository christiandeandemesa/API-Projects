const JokeController = require('../controllers/jokes.controllers');

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findJokeById);
    app.post('/api/jokes/new', JokeController.createNewJoke);
    app.put('/api/jokes/update/:id', JokeController.updateExistingJoke);
    app.delete('/api/jokes/delete/:id', JokeController.deleteExistingJoke);
}

// "_id": "6187467da54adb4f8dfbb58e"