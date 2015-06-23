# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

 Team.create(name:"Batman",points:0,keys:20)
 Team.create(name:"Linterna Verde",points:0,keys:20)
 Team.create(name:"Flash",points:0,keys:20)
 Team.create(name:"Capitan America",points:0,keys:20)

 GameType.create(name: 'ABC', color: 'FF5555')
 GameType.create(name: 'BCD', color: '555555')
 GameType.create(name: 'EFG', color: 'AA55FF')
 GameType.create(name: 'HIJ', color: 'FFAA55')

 Game.create(name:"Juego 1.1", description: "skhbkhjsad", image:'', video:'', game_type_id: 1, disabled:false)
 Game.create(name:"Juego 1.2", description: "sands,m", image:'', video:'', game_type_id: 1, disabled:false)
 Game.create(name:"Juego 1.3", description: "SDda", image:'', video:'', game_type_id: 1, disabled:false)
 Game.create(name:"Juego 1.4", description: "SDSDds", image:'', video:'', game_type_id: 1, disabled:false)

 Game.create(name:"Juego 2.1", description: "adffd", image:'', video:'', game_type_id: 2, disabled:false)
 Game.create(name:"Juego 2.2", description: "dfs,m", image:'', video:'', game_type_id: 2, disabled:false)
 Game.create(name:"Juego 2.3", description: "sda", image:'', video:'', game_type_id: 2, disabled:false)
 Game.create(name:"Juego 2.4", description: "SsadsDSDds", image:'', video:'', game_type_id: 2, disabled:false)

 Game.create(name:"Juego 3.1", description: "SadsdsavdF", image:'', video:'', game_type_id: 3, disabled:false)
 Game.create(name:"Juego 3.2", description: "asdSA,m", image:'', video:'', game_type_id: 3, disabled:false)
 Game.create(name:"Juego 3.3", description: "Sd", image:'', video:'', game_type_id: 3, disabled:false)
 Game.create(name:"Juego 3.4", description: "ADFFErEW", image:'', video:'', game_type_id: 3, disabled:false)

 Game.create(name:"Juego 4.1", description: "sadss", image:'', video:'', game_type_id: 4, disabled:false)
 Game.create(name:"Juego 4.2", description: "SAdssDSA,m", image:'', video:'', game_type_id: 4, disabled:false)
 Game.create(name:"Juego 4.3", description: "SadsdsavdFrwr", image:'', video:'', game_type_id: 4, disabled:false)
 Game.create(name:"Juego 4.4", description: "sabgrfDSA", image:'', video:'', game_type_id: 4, disabled:false)

 Dice.create(last_value: 0, range:4)
