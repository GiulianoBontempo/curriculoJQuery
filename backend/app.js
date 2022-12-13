const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const sqlite3 = require('sqlite3').verbose();

const DBPATH = 'data/curriculo.db';

const hostname = '127.0.0.1';
const port = 1234;
const app = express();

app.use(express.static("./"));
app.use(express.json());

app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});

// Endpoints de educacao

app.get('/educacao', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM educacao';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.post('/insereEducacao', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    sql = "INSERT INTO educacao (nome, descricao) VALUES ('" + req.body.nome + "', '" + req.body.descricao + "')";
    console.log(sql);
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
    });
    res.redirect("../index.html");
    db.close(); // Fecha o banco
    res.end();
});

app.get('/removeEducacao', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    sql = "DELETE FROM educacao WHERE id='" + req.query.id + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
        res.redirect("../index.html")
        res.end();
    });
    db.close(); // Fecha o banco
});

app.post('/atualizaEducacao', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    sql = "UPDATE educacao SET nome='" + req.body.nome + "', descricao='" + req.body.descricao + "' WHERE id='" + req.body.id + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
        res.redirect("../index.html")
        res.end();
    });
    db.close(); // Fecha o banco
});

// Endpoints de experiencias

app.get('/experiencias', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM experiencias';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.post('/insereExperiencia', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    sql = "INSERT INTO experiencias (nome, descricao) VALUES ('" + req.body.nome + "', '" + req.body.descricao + "')";
    console.log(sql);
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
    });
    res.redirect("../index.html");
    db.close(); // Fecha o banco
    res.end();
});

app.get('/removeExperiencia', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    sql = "DELETE FROM experiencias WHERE id='" + req.query.id + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
        res.redirect("../index.html")
        res.end();
    });
    db.close(); // Fecha o banco
});

app.post('/atualizaExperiencias', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    sql = "UPDATE experiencias SET nome='" + req.body.nome + "', descricao='" + req.body.descricao + "' WHERE id='" + req.body.id + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
        res.redirect("../index.html")
        res.end();
    });
    db.close(); // Fecha o banco
});