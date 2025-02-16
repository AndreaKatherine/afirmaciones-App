# PruebaApp - Aplicación de Frases Motivacionales

## Descripción

PruebaApp es una aplicación que genera frases motivacionales aleatorias. La aplicación está dividida en dos partes: el frontend, donde el usuario puede hacer clic para obtener una nueva frase, y el backend, que se encarga de manejar la conexión con la base de datos y proporcionar las frases.

## Estructura del Proyecto

```plaintext
PRUEBAAPP/
├── backend/                # Lógica del backend
│   ├── node_modules/        # Dependencias del backend
│   ├── .env                 # Variables de entorno
│   ├── db.js                # Conexión con la base de datos MySQL
│   ├── package-lock.json    # Bloqueo de versiones de dependencias del backend
│   ├── package.json         # Configuración del backend (scripts y dependencias)
│   ├── server.js            # Lógica del servidor Express
├── frontend/               # Lógica del frontend
│   ├── aplicacion.js        # Lógica de la aplicación en el frontend
│   ├── index.html           # Página HTML que muestra las frases
│   ├── styles.css           # Estilos CSS para el frontend
├── README.md               # Documentación del proyecto

-----------------------------------------------------------------------------------------------------------------
SHOW TABLES;
+---------------------+
| Tables_in_frases_db |

SELECT * FROM frases;
+----+---------------------------------------------------------------------+
| id | texto                                                               |
+----+---------------------------------------------------------------------+
|  1 | Nunca es tarde para empezar                                         |
|  2 | El éxito es la suma de pequeños esfuerzos repetidos día tras día.   |
|  3 | Cada pequeño paso que doy me acerca a mis sueños                    |
|  4 | Soy el arquitecto de mi destino y hoy construyo un futuro brillante |
+----+---------------------------------------------------------------------+
```
