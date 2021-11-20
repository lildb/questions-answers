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
app.get('/qa/questions/:id/:page/:count', questions.getQuestions);

app.post('/qa/questions', questions.addQuestion);

app.put('/qa/questions/:question_id/helpful', questions.markHelpful);

app.put('/qa/questions/:question_id/report', questions.report);

app.get('/qa/questions/:question_id/answers/:page/:count', answers.getAnswers);

app.post('/qa/questions/:question_id/answers', answers.addAnswer);

app.put('/qa/answers/:answer_id/helpful', answers.markHelpful);

app.put('/qa/answers/:answer_id/report', answers.report);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});