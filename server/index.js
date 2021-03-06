require('dotenv').config();
const express = require('express');
const questions = require('./Controllers/Questions.js');
const answers = require('./Controllers/Answers.js');
const answerPhotos = require('./Controllers/AnswerPhotos.js');

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('HELLO WORLD!');
});

//change this to use query params req.query
app.get('/qa/questions/:id/', questions.GET_QUESTIONS);

app.post('/qa/questions', questions.POST_QUESTION);

app.put('/qa/questions/:question_id/helpful', questions.PUT_HELPFUL);

app.put('/qa/questions/:question_id/report', questions.PUT_REPORT);

app.get('/qa/questions/:question_id/answers/', answers.GET_ANSWERS);

app.post('/qa/questions/:question_id/answers', answers.POST_ANSWER);

app.put('/qa/answers/:answer_id/helpful', answers.PUT_HELPFUL);

app.put('/qa/answers/:answer_id/report', answers.PUT_REPORT);


//loader io
app.get(`/${process.env.LOADERIO}/`, (req, res) => {
  res.send(process.env.LOADERIO);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});