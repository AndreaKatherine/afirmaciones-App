document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("generate");
  const output = document.getElementById("output");

  const backUrl = "https://afirmaciones-app-1.onrender.com";

  button.addEventListener("click", () => {
    fetch(`${backUrl}/frase-aleatoria`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }
        return response.json();
      })
      .then((data) => {
        output.textContent = data.texto; // Muestra la frase en el div
      })
      .catch((error) => {
        console.error("Error al obtener la frase:", error);
        output.textContent =
          "No se pudo obtener la frase. Intenta de nuevo más tarde.";
      });
  });
});
