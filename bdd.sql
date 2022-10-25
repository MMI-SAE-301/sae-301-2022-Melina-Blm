--
-- code pour la création des tables
--
-- La table user sera ajouté directement sur supabase
CREATE TABLE 'MONTRE' (
"id_montre" int NOT NULL,
"bracelet" varchar,
"ecran" varchar,
"boitier" varchar,
PRIMARY KEY (id_montre),
FOREIGN KEY (id_materiel) REFERENCES MATERIEL ("id_materiel"),
);

CREATE TABLE 'MATERIEL' (
"id_materiel" int NOT NULL,
"libelle_materiel" varchar,
PRIMARY KEY (id_materiel)

);







--
-- code pour la création des vues
--




--
-- code pour la création des policies
--