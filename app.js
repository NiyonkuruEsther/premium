const mysql = require("mysql");
const express = require("express");

// create the db

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql",
});
// connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Mysql Connected...");
});

const app = express();

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

app.get("/create-table", (req, res) => {
  const sql =
    "CREATE TABLE users (id int AUTO_INCREMENT PRIMARY KEY, costs int,brand VARCHAR(255), power int)";

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(res);
    res.send("Table created successfully");
  });
});

// insert post 1

app.get("/addpost1", (req, res) => {
  let post = [
    { costs: 100, brand: "VOlksWagen", power: 200 },
    { costs: 50, brand: "Brabus", power: 60 },
    { costs: 30, brand: "Toyota", power: 40 },
    { costs: 20, brand: "Corona", power: 12 },
  ];
  let sql = "INSERT INTO users SET ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post one added...");
  });
});

app.listen(3002, () => {
  console.log("Server started on port 3000");
});

app.listen("3000", () => {
  console.log("server started on the port 3000");
});
