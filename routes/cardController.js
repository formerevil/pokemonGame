
module.exports.viewAll = function(req, res, next){
    const cards =[ {
        pokeName: 'Budew',
        hp: '40',
        move1: 'Poison Enzyme',
        type: 'poison'
        //https://assets.pokemon.com/assets/cms2/img/cards/web/DP7/DP7_EN_33.png
    },
    {
        pokeName: 'Remoraid',
        hp: '50',
        move1: 'Water Gun',
        type: 'water'
    },
    {
        pokeName: 'Zubat',
        hp: '50',
        move1: 'Supersonic',
        type: 'poison'
        //https://assets.pokemon.com/assets/cms2/img/cards/web/DP2/DP2_EN_108.png
    }, {
        pokeName: 'Trubbish',
        hp: '70',
        move1: 'Stomp Off',
        type: 'poison'
            //https://assets.pokemon.com/assets/cms2/img/cards/web/SM2/SM2_EN_50.png
    },
    {
        pokeName: 'Venonat',
        hp: '50',
        move1: 'Stun Spore',
        type: 'bug'
        //https://assets.pokemon.com/assets/cms2/img/cards/web/DP3/DP3_EN_116.png
    }, {
        pokeName: 'Wurmple',
        hp: '50',
        move1: 'Flock',
        type: 'bug'
            //https://assets.pokemon.com/assets/cms2/img/cards/web/XY6/XY6_EN_3.png
    }];
    res.render('index', {cards});
}

