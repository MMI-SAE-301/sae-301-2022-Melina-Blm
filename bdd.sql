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

CREATE VIEW allMontre as
SELECT *
FROM "MONTRE"

CREATE VIEW allMateriel as
SELECT *
FROM "MATERIEL"

CREATE View allBracelet as 
SELECT "MONTRES".*
FROM "materiel", "montre"
WHERE "materiel".id_materiel ="montre".id_materiel
AND "materiel".libelle_materiel=''
--




--
-- code pour la création des policies
--
-- Au total 4 policies, 3 POUR MONTRE (INSERT,SELECT,UPDATE) ET 1 POUR MATERIEL (SELECT)
--POLICY UPDATE 
(uid() = id_user)
(uid() IN ( SELECT "MONTRE_1".id_user
   FROM "MONTRE" "MONTRE_1"))
