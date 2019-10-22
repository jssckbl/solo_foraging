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

// router.get('/:id', (req, res) => {
//     console.log('req.query.id', req.params.id);
//     console.log('req.body.id', req.body)
//     const sqlText = `SELECT * from "plantinfo"
//     JOIN "images" on "plantinfo"."id" = "images"."plantinfo_id"
//     WHERE "plantinfo"."id" = $1
//     ORDER BY "plantinfo"."id";`;
//     value = [req.params.id];

//     pool.query(sqlText, value)
//         .then((response) => {
//             console.log('router GET id plant info', response.rows)
//             res.send(response.rows);
//         })
//         .catch((error) => {
//             console.log('error GET plant info', error)
//             res.sendStatus(500)
//         })
// });



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


 // NEED TO ADD MORE TO THE POST
// router.post('/', (req, res) => {
//     const newPlant = req.body;
//     const queryValues = [
//         req.user.id,
//         newPlant.common_name,
//         newPlant.date,
//         newPlant.location,
//         newPlant.stem,
//         newPlant.leaves
//     ]

    // const client = await pool.connect();
    // console.log(req.body);
    // try {


        // } = req.body;

        // await client.query('BEGIN')
        // add user id column so post is associated with that specific user 

        // const sqlText = `INSERT INTO "plantinfo" ("user_id", "common_name", "date", "location", "stem", "leaves") VALUES ($1, $2, $3, $4, $5, $6);`;



        // RETURNING id;`, [req.user.id, common_name, date, location, stem, leaves]);
        // const plantId = plantsInsertResults.rows[0].id;
        // console.log('This is the', plantId)
        // await Promise.all(images.map(image => {

        //     if
        //         (image !== '') {
        //         const insertLineItemText = `INSERT INTO "images" ("plantinfo_id", "url", "main_image") 
        //     VALUES ($1, $2, $3)`;
        //         const insertLineItemValues = [plantinfoId, image, true];
        //         return client.query(insertLineItemText, insertLineItemValues);
        //     }
        // }));
        // await client.query('COMMIT')
        // res.sendStatus(201);
//     } catch (error) {
//         await client.query('ROLLBACK')
//         console.log('Error POST /plants/add', error);
//         res.sendStatus(500);
//     } finally {
//         client.release()
//     }
// });


router.post('/', (req, res) => {
    console.log('in ROUTER POST', req.body);
    const newPlant = req.body;
    const queryValues = [
        req.user.id,
        newPlant.common_name,
        newPlant.date,
        newPlant.location,
        newPlant.stem,
        newPlant.leaves
    ]

    const sqlText = `INSERT INTO "plantinfo" ("user_id", "common_name", "date", "location", "stem", "leaves") VALUES ($1, $2, $3, $4, $5, $6);`;
    pool.query(sqlText, queryValues)
    .then(() => {res.sendStatus(201);
    console.log('in router POST', response)
}).catch (( error ) => {
    console.log( 'error in POST')
    res.sendStatus(500);
})
});


//Delete
router.delete('/:id', (req, res) => {
    console.log('router DELETE', req.params.id);
    const sqlText1 = `DELETE FROM "images" WHERE plantinfo_id=$1;`;
    const sqlText2 = `DELETE FROM "plantinfo" WHERE id=$1;`;

    value = [req.params.id];
    pool.query(sqlText1, value)
    pool.query(sqlText2, value)
        .then((response) => {
            res.sendStatus
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500)
        })
});

//Edit
router.put('/edit', (req, res) => {
    console.log(' in /edit, req.body is:', req.body);

    const sqlText = `UPDATE "plantinfo" SET "common_name" = $1, "date" = $2, "location" = $3, "stem" = $4, "leaves" = $5, "image" = $6
    WHERE "id" = $7;`;
    const values = [req.body.common_name, req.body.date, req.body.location, req.body.stem, req.body.leaves,
    req.body.image]
    pool.query(sqlText, values)
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            res.sendStatus(500);
        })
});



module.exports = router;