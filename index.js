const { Pool } = require("pg");
const express = require("express");

const app = express();

const jsonParser = express.json();

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'password',
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

app.get("/api/categories/", function (req, res) {
  pool.connect((err, client, release) => {
    if (err) {
      return res
        .status(500)
        .send({ message: "Error acquiring client", stack: err.stack });
    }
    client.query(
      "SELECT category_id, category_name FROM public.categories",
      (err, result) => {
        release();
        if (err) {
          return res
            .status(500)
            .send({ message: "Error executing query", stack: err.stack });
        }
        res.send(result.rows);
      }
    );
  });
});

app.post("/api/categories/", jsonParser, function (req, res) {
  //Ваш код
});

app.delete("/api/categories/:id", function (req, res, next) {
  //Ваш код
});

app.put("/api/categories/:id", jsonParser, function (req, res) {
  //Ваш код
});

app.listen(3000);
