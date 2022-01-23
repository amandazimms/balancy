const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/today', (req, res) => {
  // console.log('----> in entry router today GET, req.body:', req.body);
  // console.log('----> in entry router today GET, req.query:', req.query);
  // console.log('----> in entry router today GET, req.params:', req.params);

  //req.query.user_id is user id
  const queryString = `SELECT * FROM "entry" WHERE "date"=CURRENT_DATE`;

  pool.query(queryString)
    .then((results)=>{
      if (results.rows.length === 0){
        console.log('there was no entry  - creating one');
        //if there is no entry today, post one
          const queryString = `INSERT INTO "entry" ("date", "user_id")
            VALUES (NOW(), $1) RETURNING id`;
            values = [req.body.user_id];

          pool.query(queryString, values)
          .then((results)=>{
            res.send(results.rows[0]);
            //since we asked for RETURNING id, rows [0].id will be the id for the entry we just made

          }).catch((err) => {
            console.log('POST entry failed: ', err);
            res.sendStatus(500);

          });

      } else {
        console.log('heres the existing entry');
        //else, send the entry for today that already exists
          //results.rows should only have 1 entry as only one is allowed, hence sending rows[0]
        res.send(results.rows[0]);
      }

    }).catch((err) => {
      console.log('GET todays entry failed: ', err);
      res.sendStatus(500);

    });
});


router.post('/', (req, res) => {
  // console.log('----> in entry router POST, req.body:', req.body);
  // console.log('----> in entry router POST, req.query:', req.query);
  // console.log('----> in entry router POST, req.params:', req.params);
});

router.put('/', (req, res) => {

});

module.exports = router;
