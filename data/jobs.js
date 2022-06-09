const jobs = [
  {
    id: '1',
   name: 'Gladiator', 
  type: 'tank', 
  armor: 'fending', 
  minlevel: 1, 
  requiresexpansion: false,
  },
  {
    id: '2',
    name: 'Marauder', 
  type: 'tank', 
  armor: 'fending', 
  minlevel: 1, 
  requiresexpansion: false
},
  { id: '3', name: 'Dark Knight', type: 'tank', armor: 'fending', minlevel: 30, requiresexpansion: true},
  { id: '4', name: 'Gunbreaker', type: 'tank', armor: 'fending', minlevel: 60, requiresexpansion: true},
  {'Lancer', 'melee dps', 'maiming', 1, requiresexpansion: false},
  {'Pugilist', 'melee dps', 'striking', 1, requiresexpansion: false},
  {'Rogue', 'melee dps', 'scouting', 1, requiresexpansion: false},
  {'Archer', 'ranged dps', 'aiming', 1, requiresexpansion: false},
  {'Thaumaturge', 'casting dps', 'casting', 1, requiresexpansion: false},
  {'Arcanist', 'casting dps', 'casting', 1, requiresexpansion: false},
  {'Conjurer', 'healer', 'healing', 1, requiresexpansion: false},
  {'Machinist', 'ranged dps', 'aiming', 30, requiresexpansion: true},
  {'Astrologian', 'healer', 'healing', 30, requiresexpansion: true},
  {'Samurai', 'melee dps', 'striking', 50, requiresexpansion: true},
  {'Red Mage', 'casting dps', 'casting', 50, requiresexpansion: true},
  {'Dancer', 'ranged dps', 'aiming', 60, requiresexpansion: true},
  {'Reaper', 'melee dps', 'maiming', 70, requiresexpansion: true},
  {'Sage', 'healer', 'healing', 70, requiresexpansion: true}
];

module.exports = { jobs };
