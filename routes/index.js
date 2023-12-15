var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.post('/card', function(req,res){
  console.log(req.body.type)
  res.render('card',{
    pokeName: getRandomName(req.body.type),
    type: req.body.type,
    cardClass: getCardClass(req.body.type)
  });
})
module.exports = router;

function getCardClass(type){
  if(type === "bug"){
    return "bug"
  } else if(type === "water"){
    return "water"
  } else if(type === "rock"){
    return "rock"
  }else if(type === "electric"){
    return "electric"
  }else if(type === "fairy"){
    return "fairy"
  } else if(type === "fire") {
    return "fire"
  } else if(type === "dark") {
    return "dark"
  } else if(type === "poison") {
    return "poison"
  } else {
    return ""
  }
}
function getRandomName(type){
  let ind = Math.floor(Math.random()*5);
  // I want to choose a random card within the type.
  // then assign each card a number within the type.
  // then get the name based on the number.
  if(type === "bug"){
    if(ind === 0){
      hp = 60
      move1 = "Leech Life"
      energy2 = 1
      value = "10"
      move2 = "Stun Spore"
      energy3 = 2
      value2 = "20"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png"
      return "Venonat"
    }else if(ind === 1){
      hp = 60
      move1 = "Flock"
      energy2 = 1
      value = ""
      move2 = "Tackle"
      energy3 = 2
      value2 = "20"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/265.png"
      return "Wurmple"
    }else if (ind === 2){
      hp = 50
      move1 = "Nap"
      energy2 = 1
      value = ""
      move2 = "Surprise Attack"
      energy3 = 1
      value2 = "20"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png"
      return "Caterpie"
    } else if(ind === 3){
      hp = 80
      move1 = "Shed Skin"
      energy2 = 1
      value = ""
      move2 = "Bug Bite"
      energy3 = 1
      value2 = "20"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png"
      return "Kakuna"
    } else if(ind === 4){
      hp = 110
      move1 = "Roof Fling"
      energy2 = 2
      value = ""
      move2 = "Guillotine"
      energy3 = 2
      value2 = "50"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png"
      return "Pinsir"
    } else{
      return ""
    }
  } else if(type === "water"){
    if(ind === 0){
      hp = 60
      move1 = "Sludge Shock"
      energy2 = 1
      value = "10"
      move2 = "Gentle Wrap"
      energy3 = 1
      value2 = "10"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png"
      return "Tentacool"
    }else if(ind === 1){
      hp = 80
      move1 = "Recover"
      energy2 = 1
      value = ""
      move2 = "Rain Splash"
      energy3 = 1
      value2 = "10"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/592.png"
      return "Frillish"
    }else if (ind === 2){
      hp = 50
      move1 = "Sweet Scent"
      energy2 = 1
      value = ""
      move2 = "Agility"
      energy3 = 1
      value2 = "10"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/283.png"
      return "Surskit"
    } else if(ind === 3){
      hp = 80
      move1 = "Aqua Shower"
      energy2 = 1
      value = ""
      move2 = "Vise Grip"
      energy3 = 2
      value2 = "30"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png"
      return "Krabby"
    } else if(ind === 4){
      hp = 60
      move1 = "Water Gun"
      energy2 = 1
      value = "10"
      move2 = "Sharp Fin"
      energy3 = 2
      value2 = "20"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/223.png"
      return "Remoraid"
    } else{
      return ""
    }
  } else if(type === "rock"){
    if(ind === 0){
      hp = 110
      move1 = "Nightcap"
      energy2 = 1
      value = ""
      move2 = "Void Tentacles"
      energy3 = 1
      value2 = ""
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/793.png"
      return "Nihilego"
    }else if(ind === 1){
      hp = 70
      move1 = "Defense Curl"
      energy2 = 1
      value = ""
      move2 = "Rock Throw"
      energy3 = 3
      value2 = "40"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png"
      return "Geodude"
    }else if (ind === 2){
      hp = 70
      move1 = "Deck Distiller"
      energy2 = 1
      value = ""
      move2 = "Rock Throw"
      energy3 = 2
      value2 = "50"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/213.png"
      return "Shuckle"
    } else if(ind === 3){
      hp = 80
      move1 = "Double Draw"
      energy2 = 1
      value = ""
      move2 = "Moonblast"
      energy3 = 2
      value2 = "20"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/337.png"
      return "Lunatone"
    } else if(ind === 4){
      hp = 90
      move1 = "Cosmuc Spin"
      energy2 = 1
      value = "10+"
      move2 = "Solar Beam"
      energy3 = 3
      value2 = "60"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/338.png"
      return "Solrock"
    } else{
      return ""
    }
  }else if(type === "electric"){
    if(ind === 0){
      hp = 120
      move1 = "Thunder Shock"
      energy2 = 1
      value = "20"
      move2 = "Drill Peck"
      energy3 = 4
      value2 = "120"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png"
      return "Zapdos"
    }else if(ind === 1){
      hp = 70
      move1 = "Searching Light"
      energy2 = 1
      value = ""
      move2 = "Electro Ball"
      energy3 = 3
      value2 = "30"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/170.png"
      return "Chinchou"
    }else if (ind === 2){
      hp = 60
      move1 = "Thunder Wave"
      energy2 = 1
      value = ""
      move2 = "Tackle"
      energy3 = 2
      value2 = "20"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/179.png"
      return "Mareep"
    } else if(ind === 3){
      hp = 50
      move1 = "Super Thunder Wave"
      energy2 = 1
      value = ""
      move2 = "Tackle"
      energy3 = 2
      value2 = "20"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/309.png"
      return "Electrike"
    } else if(ind === 4){
      hp = 70
      move1 = "Trick Sticker"
      energy2 = 1
      value = "10"
      move2 = "Pachi"
      energy3 = 2
      value2 = "20+"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/417.png"
      return "Pachirisu"
    } else{
      return ""
    }
  }else if(type === "fairy"){
    if(ind === 0){
      hp = 60
      move1 = "Mumble"
      energy2 = 1
      value = "10"
      move2 = "Magical Shot"
      energy3 = 2
      value2 = "20"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/280.png"
      return "Ralts"
    }else if(ind === 1){
      hp = 40
      move1 = "Petal Blizzard"
      energy2 = 1
      value = ""
      move2 = "Razor Leaf"
      energy3 = 1
      value2 = "10"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/669.png"
      return "Flabebe"
    }else if (ind === 2){
      hp = 70
      move1 = "Mimic"
      energy2 = 1
      value = ""
      move2 = "Play Rough"
      energy3 = 2
      value2 = "20+"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/778.png"
      return "Mimikyu"
    } else if(ind === 3){
      hp = 60
      move1 = "Look for Keys"
      energy2 = 1
      value = ""
      move2 = "Fairy Lock"
      energy3 = 2
      value2 = "30"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/707.png"
      return "Klefki"
    } else if(ind === 4){
      hp = 120
      move1 = "Dream Away"
      energy2 = 2
      value = ""
      move2 = "Wonder Shine"
      energy3 = 3
      value2 = "100"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/788.png"
      return "Tapu Fini"
    } else{
      return ""
    }
  } else if(type === "fire") {
    if(ind === 0){
      hp = 60
      move1 = "Gnaw"
      energy2 = 1
      value = "10"
      move2 = "Singe"
      energy3 = 2
      value2 = ""
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png"
      return "Vulpix"
    }else if(ind === 1){
      hp = 60
      move1 = "Returning Flames"
      energy2 = 1
      value = ""
      move2 = "Live Coal"
      energy3 = 1
      value2 = "10"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png"
      return "Ponyta"
    }else if (ind === 2){
      hp = 80
      move1 = "Stampede"
      energy2 = 2
      value = "20"
      move2 = "Flamethrower"
      energy3 = 3
      value2 = "60"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/218.png"
      return "Slugma"
    } else if(ind === 3){
      hp = 40
      move1 = "Peck"
      energy2 = 1
      value = "10"
      move2 = "Fireworks"
      energy3 = 2
      value2 = "30"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png"
      return "Torchic"
    } else if(ind === 4){
      hp = 50
      move1 = "Chop"
      energy2 = 1
      value = "10"
      move2 = "Jump On"
      energy3 = 2
      value2 = "10+"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/390.png"
      return "Chimchar"
    } else{
      return ""
    }
  } else if(type === "dark") {
    if(ind === 0){
      hp = 60
      move1 = "Ambush"
      energy2 = 1
      value = "10+"
      move2 = "Wing Attack"
      energy3 = 3
      value2 = "30"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/198.png"
      return "Murkrow"
    }else if(ind === 1){
      hp = 100
      move1 = "Future Sight"
      energy2 = 1
      value = ""
      move2 = "Doom News"
      energy3 = 2
      value2 = ""
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/359.png"
      return "Absol"
    }else if (ind === 2){
      hp = 60
      move1 = "Scratch"
      energy2 = 1
      value = "10"
      move2 = "Flash Claw"
      energy3 = 2
      value2 = ""
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/215.png"
      return "Sneasel"
    } else if(ind === 3){
      hp = 150
      move1 = "Montain Munch"
      energy2 = 1
      value = ""
      move2 = "Red Banquet"
      energy3 = 4
      value2 = "120"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/799.png"
      return "Guzzlord"
    } else if(ind === 4){
      hp = 110
      move1 = "Flare Bringer"
      energy2 = 1
      value = ""
      move2 = "Megafire of Envy"
      energy3 = 2
      value2 = "50+"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1004.png"
      return "Chi-yu"
    } else{
      return ""
    }
  } else if(type === "poison") {
    if(ind === 0){
      hp = 60
      move1 = "Smog"
      energy2 = 1
      value = ""
      move2 = "Ember"
      energy3 = 2
      value2 = "30"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/757.png"
      return "Salandit"
    }else if(ind === 1){
      hp = 40
      move1 = "Lick"
      energy2 = 1
      value = ""
      move2 = "Smog"
      energy3 = 1
      value2 = ""
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png"
      return "Gastly"
    }else if (ind === 2){
      hp = 50
      move1 = "Bite"
      energy2 = 1
      value = ""
      move2 = "Venoshock"
      energy3 = 2
      value2 = "20+"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png"
      return "Zubat"
    } else if(ind === 3){
      hp = 70
      move1 = "Pound"
      energy2 = 2
      value = "20"
      move2 = "Poison Gas"
      energy3 = 3
      value2 = "30"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/568.png"
      return "Trubbish"
    } else if(ind === 4){
      hp = 60
      move1 = "Shed Skin"
      energy2 = 1
      value = ""
      move2 = "Poison Fang"
      energy3 = 1
      value2 = "10"
      cardImage = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png"
      return "Ekans"
    } else{
      return ""
    }
  } else {
    return ""
  }
}

//i need to use the name i generate to add the rest of the info