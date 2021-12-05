const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

//POST Route for Base Mode
router.post('/', (req, res) => {
  console.log('Reached Server POST. Req.body:', req.body);
  //alias req.body
  const feedback = req.body

  const queryValues = [
    feedback.feeling, 
    feedback.understanding, 
    feedback.support,
    feedback.comments
  ]
  console.log(queryValues)
  const querySQL = `
    INSERT INTO "feedback" 
      ("feeling", "understanding", "support", "comments")
    VALUES
      ($1, $2, $3, $4)
  `

  pool.query(querySQL, queryValues)
    .then((result) => {
      console.log('table "feedback" successfully modified');
      res.sendStatus(201);
    }).catch((error) => {
      console.log('Unable to reach database', error);
      res.sendStatus(500);
    });
});

//GET Route for Stretch Goal Admin page

module.exports = router;