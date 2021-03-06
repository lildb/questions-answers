const model = require('../Models/Questions.js');

module.exports = {
  // GET /qa/questions
  GET_QUESTIONS: function(req, res) {
    model.readQuestions(req.params, req.query, (err, results) => {
      if (err) {
        res.status(400).send('Error getting questions');
      } else {
        res.status(200).json(results);
      }
    });
  },

  // POST /qa/questions
  POST_QUESTION: function(req, res) {
    model.addQuestion(req.body, (err) => {
      if (err) {
        console.log(err);
        res.status(400).send('Error adding question');
      } else {
        res.status(201).send('successfully added question');
      }
    });
  },

  // PUT /qa/questions/:question_id/helpful
  PUT_HELPFUL: function(req, res) {
    model.markHelpful(req.params, (err) => {
      if (err) {
        console.log(err);
        res.status(400).send('Error marking helpful');
      } else {
        res.status(204).send('marked helpful');
      }
    });
  },

  // PUT /qa/questions/:question_id/report
  PUT_REPORT: function(req, res) {
    model.report(req.params, (err) => {
      if (err) {
        console.log(err);
        res.status(400).send('Error reporting');
      } else {
        res.status(204).send('report submitted');
      }
    });
  }
};
