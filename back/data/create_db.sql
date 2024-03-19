DROP TABLE IF EXISTS "actions";
-- vérifie que la table existe sinon on la crée
CREATE TABLE "actions" (
    "id" serial,
    "name" TEXT NOT NULL
);

INSERT INTO "actions" (name) VALUES ('Dessiner une representation simple de l''application');
INSERT INTO "actions" (name) VALUES ('Réfléchir à sa conception');
INSERT INTO "actions" (name) VALUES ('Initialiser le Back en Node.js');
INSERT INTO "actions" (name) VALUES ('Initialiser le Front en REACT avec Vite');
INSERT INTO "actions" (name) VALUES ('Commencer par le back, et récupérer une liste déjà pré-faites, en utilisant sequelize');
INSERT INTO "actions" (name) VALUES ('Faire un simple ajout d''une action sur un post');
INSERT INTO "actions" (name) VALUES ('Tester la route avec ThunderClient');
INSERT INTO "actions" (name) VALUES ('Si ok, créer les éléments du Front : header, bouton add, page-d''ajout, contenant des tâches');
INSERT INTO "actions" (name) VALUES ('Tester');
INSERT INTO "actions" (name) VALUES ('Continuer le CRUD - Back => Front');
INSERT INTO "actions" (name) VALUES ('Si ok passer à V2.0');
