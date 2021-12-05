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
    ];
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
});

//DELETE Route for Stretch Goal Admin page
router.delete('/:id', (req, res) => {
  console.log('in /feedback/:id DELETE route', req.params);
  const idDelete = req.params.id;
  const sqlValues = [idDelete];
  const sqlText = `
    DELETE FROM "feedback"
      WHERE "id"=$1;
  `;
  //Query the DB with above instructions
  pool.query(sqlText, sqlValues)
  .then((dbResult) => {
    console.log('Delete confirmed:', req.params.id)
    res.sendStatus(200);
  }).catch((dbErr) => {
    console.error('issue hitting DB', dbErr);
    res.sendStatus(500);
  });
});

//PUT Route for Stretch Goal Admin page, flags a row for review
router.put('/:id', (req, res) => {
  const idUpdate = req.params.id;
  const sqlValues = [idUpdate]
  const sqlText = `
    UPDATE "feedback"
      SET "flagged" = true
      WHERE "id"=$1;
  `;
  pool.query(sqlText, sqlValues)
    .then((dbResult) => {
      res.sendStatus(200);
    })
    .catch((dbErr) => {
      console.error(dbErr);
      res.sendStatus(500);
    })
});

module.exports = router;