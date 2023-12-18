const express = require("express");
const app = express();
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "supportsphere",
});

app.use(express.json());
app.use(cors());

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  jwt.verify(
    token.replace("Bearer ", ""),
    "272leidi.love.sils430",
    (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Token inválido" });
      }

      req.userId = decoded.userId;
      next();
    }
  );
};

app.get("/user-info", verifyToken, (req, res) => {
  const userId = req.userId;

  db.query(
    "SELECT name, email FROM users WHERE id = ?",
    [userId],
    (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }

      const user = result[0];
      res.json({
        name: user.name,
        email: user.email,
      });
    }
  );
});

app.get("/check-email/:email", (req, res) => {
  const email = req.params.email;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.send(result.length === 0 ? "available" : "unavailable");
  });
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }

      if (result.length === 0) {
        db.query(
          "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
          [name, email, hashedPassword],
          (err) => {
            if (err) {
              return res.status(500).send(err);
            }

            res.send("Usuário cadastrado com sucesso!");
          }
        );
      }
    }
  );
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) {
        return res.status(500).send("Erro no servidor");
      }

      if (result.length === 1) {
        const user = result[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
          const token = jwt.sign({ userId: user.id }, "272leidi.love.sils430", {
            expiresIn: "1h",
          });

          res.json({
            message: "Autenticação bem-sucedida",
            token,
          });
        } else {
          res.send("Autenticação falhou");
        }
      } else {
        res.send("Autenticação falhou");
      }
    }
  );
});

const port = 2724;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
