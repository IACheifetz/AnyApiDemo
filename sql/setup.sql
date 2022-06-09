-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists xiv_jobs;

CREATE table xiv_jobs (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    armor VARCHAR NOT NULL,
    minlevel INT NOT NULL,
    requiresexpansion BOOLEAN
);

INSERT INTO xiv_jobs (name, type, armor, minlevel, requiresexpansion) VALUES
('Gladiator', 'tank', 'fending', 1, false),
('Marauder', 'tank', 'fending', 1, false),
('Dark Knight', 'tank', 'fending', 30, true),
('Gunbreaker', 'tank', 'fending', 60, true),
('Lancer', 'melee dps', 'maiming', 1, false),
('Pugilist', 'melee dps', 'striking', 1, false),
('Rogue', 'melee dps', 'scouting', 1, false),
('Archer', 'ranged dps', 'aiming', 1, false),
('Thaumaturge', 'casting dps', 'casting', 1, false),
('Arcanist', 'casting dps', 'casting', 1, false),
('Conjurer', 'healer', 'healing', 1, false),
('Machinist', 'ranged dps', 'aiming', 30, true),
('Astrologian', 'healer', 'healing', 30, true),
('Samurai', 'melee dps', 'striking', 50, true),
('Red Mage', 'casting dps', 'casting', 50, true),
('Dancer', 'ranged dps', 'aiming', 60, true),
('Reaper', 'melee dps', 'maiming', 70, true),
('Sage', 'healer', 'healing', 70, true);