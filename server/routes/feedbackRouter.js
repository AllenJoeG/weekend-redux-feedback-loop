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

router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "feedback" ORDER BY "id";`;

  pool.query(queryText).then((result) => {
    // console.log(result.rows);
    // Sends back the results in an object
    res.send(result.rows);
  })
  .catch((dbErr) => {
    console.log('Error fetching tasks:', error);
    res.sendStatus(500);
  });

})

module.exports = router;