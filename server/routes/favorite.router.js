const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  console.log(req.body);
  const queryText = `SELECT * FROM "favorites";`;

  pool.query(queryText).then(result => {
    res.send(result.rows);  
  }).catch(error => {
    console.log(error);
    res.sendStatus(500);
  });
});

// add a new favorite 
router.post('/', (req, res) => {
  console.log(req.body);
  const queryText = `INSERT INTO "favorites" ("url") VALUES ($1);`;
  const queryParams = [req.body.url];

  pool.query(queryText, queryParams).then(result => {
    console.log(result);
    res.sendStatus(200);  
  }).catch(error => {
    console.log(error);
    res.sendStatus(500);
  });
});

getCategoryId = (category) => {
  switch (category) {
    default:
      return 0;
    case 'funny':
      return 1;
    case 'cohort':
      return 2;
    case 'cartoon':
      return 3;
    case 'nsfw':
      return 4;
    case 'meme':
      return 5;
  }
}

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const category_id = getCategoryId(req.body.category);
  const queryText = `UPDATE "favorites" SET "category_id" = $1 WHERE "id" = $2;`;
  const queryParams = [category_id, req.params.favId];

  pool.query(queryText, queryParams).then(result => {
    console.log(result);
    res.sendStatus(200);  
  }).catch(error => {
    console.log(error);
    res.sendStatus(500);
  });  
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;