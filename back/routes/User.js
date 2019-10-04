const express = require('express');
const router = express.Router();

const mysql = require('mysql'); 





var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "0408",
    database: "db"
    });

con.connect(function(err) {
    if (err) throw err;
    console.log("Mysql yhdistetty");
    });


     
// GET(hae) kaikki kayttajat tietokannasta db
router.get('/', (req, res, next) => {
    let sql = "SELECT * from registration;";
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.status(200).json({
            message: 'Kayttajat haettiin',
            list: result
        });
   });
});

// GET (hae) yksi kayttaja id:n perusteella
router.get('/:id', (req, res, next) => {
    var id = req.params.id;
    let sql = 'SELECT * from registration WHERE id =' + id;
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.status(200).json({
            message: 'Kayttaja haettiin',
            user: result
        });
   });
});

// POST (lisaa) yhden kayttajan tiedot JSON avulla tietokantaan
router.post('/', (req, res, next) => {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        };
    let sql = 'INSERT INTO registration(first, last, age) VALUES("'+user.firstName+'","'+user.lastName+'",'+user.age+');';
        con.query(sql, (err, result) => {
         if(err) throw err;
         console.log(result);
         res.status(201).json({
            message: 'Kayttaja luotiin',
            object: user    
        });
    });
});

// DELETE (poista) yksi kauttaja id:n perusteella
router.delete('/:id', (req, res, next) => {
    var id = req.params.id;
    let sql = 'DELETE from registration WHERE id =' + id;
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.status(201).json({
            message: 'Kayttaja poistettiin'
        });
    });
});

// PUT (paivita) yhden kauttajan tiedot JSON avulla tietokantaan
router.put('/:id', (req, res, next) => {
    var id = req.params.id;
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        };
    let sql = 'UPDATE registration SET first = "'+user.firstName+'", last = "'+user.lastName+'", age ='+user.age+' WHERE id ='+id+';';
        con.query(sql, (err, result) => {
         if(err) throw err;
         console.log(result);
         res.status(201).json({
            message: 'Kayttaja paivitettiin',
            object: user    
        });
    });
});


module.exports = router;
