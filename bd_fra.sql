CREATE DATABASE frases_db;
USE frases_db;
CREATE TABLE FRASES (
id int auto_increment primary key,
texto varchar (250) NOT NULL
);
INSERT INTO FRASES (TEXTO) VALUES
('El éxito es la suma de pequeños esfuerzos repetidos día tras día.');
SELECT * FROM frases;
