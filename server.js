require("dotenv").config(); // 🔹 Cargar variables de entorno
const express = require("express");
const cors = require("cors");
const path = require("path");

const db = require("./src/db"); // Importamos la conexión

const app = express();
app.use(cors());
app.use(express.json());

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

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
//----------------------------------------------------

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
//----------------------------------------------
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
