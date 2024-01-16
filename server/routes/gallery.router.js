const express = require('express');
const pool = require("../modules/pool.js")
const router = express.Router();

// PUT /gallery/like/:id

router.put('/like/:id', (req, res) => {

  // code here
  let idToGet = req.params.id
  const queryText = `UPDATE "gallery"
   SET "likes" = "likes" + 1 
   WHERE "id" = $1;
   `
  const queryParam = [idToGet]
  pool.query(queryText, queryParam)
    .then((result) => {
      res.sendStatus(204)
    })
    .catch((error) => {
      console.log("Woops, error making query: ", queryText)
      console.error(error)
      res.sendStatus(500)
    })
})


// GET /gallery
router.get('/', (req, res) => {
  // code here
  console.log("In GET request");
  let queryText = 'SELECT * from "gallery"';

  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
});


module.exports = router;
