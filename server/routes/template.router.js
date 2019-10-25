const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


/**
 * Start of GET Routes
 */

//add user id (auth) for all gets to only get those users
router.get('/', (req, res) => {

    const sqlText = `SELECT * FROM "plantinfo" WHERE "user_id" = $1;`;

        // `INSERT INTO "plantinfo" ("common_name") VALUES ('swamp milkweed');`;

    const value = req.user.id;
    pool.query(sqlText, [value])
        .then((response) => {
            res.send(response.rows);
            console.log('router GET for plant info', response.rows);
        })
        .catch((error) => {
            console.log('error in GET plants', error)
            res.sendStatus(500)
        })
});

router.get('/:id', (req, res) => {
   let plantId = req.params.id;

   let queryText = `SELECT * FROM "plantinfo" WHERE "id"= $1;`;

   pool.query(queryText, [plantId])
   .then((result) =>{
       res.send(result.rows[0]);
// above line is what changes the GET from the database from an array to an object
// this affects the CurrentPlant render return 
   }).catch((error) => {
       Console.log(error);
       res.sendStatus(500);
   })
});



// router.get('/images/:id', (req, res) => {
//     console.log('req.query.id', req.params.id);
//     // const sqlText = `SELECT * from "plantinfo"
//     // JOIN "images" on "plantinfo"."id" = "images"."plantinfo_id"
//     // WHERE "plantinfo"."id" = $1
//     // ORDER BY "plantinfo"."id";`;
//     value = [req.params.id];

//     pool.query(sqlText, value)
//         .then((response) => {
//             console.log('router GET plant photos', response.rows)
//             res.send(response.rows);
//         })
//         .catch((error) => {
//             console.log('error router GET plant photos', error)
//             res.sendStatus(500)
//         })
// });
/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log('in ROUTER POST', req.body);
    const newPlant = req.body;
    const queryValues = [
        req.user.id,
        newPlant.common_name,
        newPlant.scientific_name,
        newPlant.date,
        newPlant.location,
        newPlant.stem,
        newPlant.leaves
    ]

    const sqlText = `INSERT INTO "plantinfo" ("user_id", "common_name", "scientific_name", "date", "location", "stem", "leaves") VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    pool.query(sqlText, queryValues)
    .then(() => {res.sendStatus(201);
    console.log('in router POST', response)
}).catch (( error ) => {
    console.log( 'error in POST')
    res.sendStatus(500);
})
});


// DELETE PLANT

router.delete('/:id', (req, res) => {
    console.log('router DELETE', req.params.id);
    const sqlText = `DELETE FROM "plantinfo" WHERE id=$1;`;
    pool.query(sqlText, [req.params.id])
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error deleting from DB', error);
            res.sendStatus(500)
        })
});

// EDIT PLANT

router.put('/edit', (req, res) => {
    console.log(' in /edit, req.body is:', req.body);

    const sqlText = `UPDATE "plantinfo"
    SET "common_name" = $1, "scientific_name" = $2, "date" = $3, "location" = $4, "stem" = $5, "leaves" = $6 WHERE "id" = $7;`;
    const values = [req.body.common_name, req.body.scientific_name, req.body.date, req.body.location, req.body.stem, req.body.leaves,
    req.body.id]
    pool.query(sqlText, values)
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            res.sendStatus(500);
        })
});

module.exports = router;