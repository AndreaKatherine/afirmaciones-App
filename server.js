require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const db = require("./src/db"); // Importamos la conexión
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

// Servir archivos estáticos del frontend
// Servir archivos estáticos de 'public' para HTML, JS

app.use(express.static(path.join(__dirname, "public")));
// Servir archivos estáticos de 'src/styles' para CSS
// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Nueva ruta para obtener una frase aleatoria
app.get("/frase-aleatoria", (req, res) => {
  db.query(
    "SELECT texto FROM FRASES ORDER BY RAND() LIMIT 1",
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results[0]); // Devolvemos solo un objeto con la frase
    }
  );
});

// Iniciar el servidor en el puerto asignado por Render jsjsjsjsjsjsjhdhf
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
