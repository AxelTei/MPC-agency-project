
// Buttons Go-to-the-Top Functions
let myButton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

function topFunction() 
{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

myButton.addEventListener("click", topFunction);

// SearchBar Functions

const navbarButton = document.getElementById('searchProduct');
const navbarInput = document.getElementById('inputSearch');

let products = [
    {},
    {
        id: 1,
        title: 'serviette double point noire',
        category: 'serviettes'
    },
    {
        id: 2,
        title: 'serviette double point grise',
        category: 'serviettes'
    },
    {
        id: 3,
        title: 'serviette double point ivoire',
        category: 'serviettes'
    },
    {
        id: 4,
        title: 'serviette double point naturelle',
        category: 'serviettes'
    },
    {
        id: 5,
        title: 'serviette double point blanche',
        category: 'serviettes'
    },
    {
        id: 6,
        title: 'serviette double point rouge',
        category: 'serviettes'
    },
    {
        id: 7,
        title: 'serviette double point bordeaux',
        category: 'serviettes'
    },
    {
        id: 8,
        title: 'serviette double point bleu marine',
        category: 'serviettes'
    },
    {
        id: 117,
        title: 'serviette double point bleu',
        category: 'serviettes'
    },
    {
        id: 9,
        title: 'serviette double point turquoise',
        category: 'serviettes'
    },
    {
        id: 10,
        title: 'serviette double point vert jaguar',
        category: 'serviettes'
    },
    {
        id: 11,
        title: 'serviette double point chocolat',
        category: 'serviettes'
    },
    {
        id: 12,
        title: 'serviette airlaid noire',
        category: 'serviettes'
    },
    {
        id: 13,
        title: 'serviette airlaid blanche',
        category: 'serviettes'
    },
    {
        id: 14,
        title: 'serviette airlaid grise',
        category: 'serviettes'
    },
    {
        id: 15,
        title: 'serviette airlaid rouge',
        category: 'serviettes'
    },
    {
        id: 16,
        title: 'serviette airlaid bordeaux',
        category: 'serviettes'
    },
    {
        id: 17,
        title: 'serviette airlaid bleu marine',
        category: 'serviettes'
    },
    {
        id: 118,
        title: 'serviette airlaid bleu',
        category: 'serviettes'
    },
    {
        id: 18,
        title: 'serviette airlaid turquoise',
        category: 'serviettes'
    },
    {
        id: 19,
        title: 'serviette airlaid ivoire',
        category: 'serviettes'
    },
    {
        id: 20,
        title: 'serviette airlaid chocolat',
        category: 'serviettes'
    },
    {
        id: 21,
        title: 'serviette airlaid pliage blanche',
        category: 'serviettes'
    },
    {
        id: 119,
        title: 'serviette airlaid pliage 1/8 blanche',
        category: 'serviettes'
    },
    {
        id: 22,
        title: 'serviette airlaid pliage noire',
        category: 'serviettes'
    },
    {
        id: 120,
        title: 'serviette airlaid pliage 1/8 noire',
        category: 'serviettes'
    },
    {
        id: 23,
        title: 'serviette kangourou pliée noire',
        category: 'serviettes'
    },
    {
        id: 121,
        title: 'serviette kangourou noire',
        category: 'serviettes'
    },
    {
        id: 24,
        title: 'serviette kangourou pliée grise',
        category: 'serviettes'
    },
    {
        id: 122,
        title: 'serviette kangourou grise',
        category: 'serviettes'
    },
    {
        id: 25,
        title: 'serviette kangourou pliée blanche',
        category: 'serviettes'
    },
    {
        id: 123,
        title: 'serviette kangourou blanche',
        category: 'serviettes'
    },
    {
        id: 26,
        title: 'set de table noir',
        category: 'setDeTables'
    },
    {
        id: 27,
        title: 'set de table bleu marine',
        category: 'setDeTables'
    },
    {
        id: 124,
        title: 'set de table bleu',
        category: 'setDeTables'
    },
    {
        id: 28,
        title: 'set de table chocolat',
        category: 'setDeTables'
    },
    {
        id: 29,
        title: 'set de table bordeaux',
        category: 'setDeTables'
    },
    {
        id: 30,
        title: 'set de table rouge',
        category: 'setDeTables'
    },
    {
        id: 31,
        title: 'set de table vert',
        category: 'setDeTables'
    },
    {
        id: 32,
        title: 'set de table kraft',
        category: 'setDeTables'
    },
    {
        id: 125,
        title: 'set de table naturelle',
        category: 'setDeTables'
    },
    {
        id: 33,
        title: 'airlaid noir tête à tête',
        category: 'setDeTables'
    },
    {
        id: 126,
        title: 'airlaid noir tete a tete',
        category: 'setDeTables'
    },
    {
        id: 127,
        title: 'set de table airlaid noir',
        category: 'setDeTables'
    },
    {
        id: 34,
        title: 'airlaid chocolat tête à tête',
        category: 'setDeTables'
    },
    {
        id: 128,
        title: 'airlaid chocolat tete a tete',
        category: 'setDeTables'
    },
    {
        id: 129,
        title: 'set de table airlaid chocolat',
        category: 'setDeTables'
    },
    {
        id: 35,
        title: 'airlaid ivoire tête à tête',
        category: 'setDeTables'
    },
    {
        id: 130,
        title: 'airlaid ivoire tete a tete',
        category: 'setDeTables'
    },
    {
        id: 131,
        title: 'set de table airlaid ivoire',
        category: 'setDeTables'
    },
    {
        id: 36,
        title: 'airlaid bordeaux tête à tête',
        category: 'setDeTables'
    },
    {
        id: 132,
        title: 'airlaid bordeaux tete a tete',
        category: 'setDeTables'
    },
    {
        id: 133,
        title: 'set de table airlaid bordeaux',
        category: 'setDeTables'
    },
    {
        id: 37,
        title: 'airlaid blanc tête à tête',
        category: 'setDeTables'
    },
    {
        id: 134,
        title: 'airlaid blanc tete a tete',
        category: 'setDeTables'
    },
    {
        id: 135,
        title: 'set de table airlaid blanc',
        category: 'setDeTables'
    },
    {
        id: 38,
        title: 'nappes blanches',
        category: 'setDeTables'
    },
    {
        id: 136,
        title: 'nappes',
        category: 'setDeTables'
    },
    {
        id: 39,
        title: 'tablier jetable',
        category: 'hygienes'
    },
    {
        id: 137,
        title: 'tablier jetable pebd blanc',
        category: 'hygienes'
    },
    {
        id: 40,
        title: 'bobine gaufrée',
        category: 'hygienes'
    },
    {
        id: 138,
        title: 'bobine gaufree',
        category: 'hygienes'
    },
    {
        id: 139,
        title: 'bobine gaufrée 450frt',
        category: 'hygienes'
    },
    {
        id: 41,
        title: 'bobine lisse',
        category: 'hygienes'
    },
    {
        id: 140,
        title: 'bobine lisse 450frt',
        category: 'hygienes'
    },
    {
        id: 42,
        title: 'pailles de fer',
        category: 'hygienes'
    },
    {
        id: 43,
        title: 'éponge',
        category: 'hygienes'
    },
    {
        id: 141,
        title: 'eponge',
        category: 'hygienes'
    },
    {
        id: 142,
        title: 'éponge abrasif vert',
        category: 'hygienes'
    },
    {
        id: 44,
        title: 'frange espagnol',
        category: 'hygienes'
    },
    {
        id: 45,
        title: 'rouleaux film alimentaire',
        category: 'hygienes'
    },
    {
        id: 143,
        title: 'rouleau',
        category: 'hygienes'
    },
    {
        id: 144,
        title: 'rouleaux',
        category: 'hygienes'
    },
    {
        id: 145,
        title: 'rouleaux film alimentaire professionnels',
        category: 'hygienes'
    },
    {
        id: 46,
        title: 'rouleaux film aluminium',
        category: 'hygienes'
    },
    {
        id: 146,
        title: 'rouleaux film aluminium professionnels',
        category: 'hygienes'
    },
    {
        id: 47,
        title: 'sac poubelles',
        category: 'hygienes'
    },
    {
        id: 147,
        title: 'sac poubelle',
        category: 'hygienes'
    },
    {
        id: 148,
        title: 'sacs poubelles',
        category: 'hygienes'
    },
    {
        id: 48,
        title: 'plonge manuelle vaisselle',
        category: 'hygienes'
    },
    {
        id: 149,
        title: 'plonge vaisselle',
        category: 'hygienes'
    },
    {
        id: 49,
        title: 'décapant four acide',
        category: 'hygienes'
    },
    {
        id: 150,
        title: 'décapant',
        category: 'hygienes'
    },
    {
        id: 151,
        title: 'décapant four',
        category: 'hygienes'
    },
    {
        id: 50,
        title: 'dyacil',
        category: 'hygienes'
        // div pour "détergent" et "désinfectant cuisine" et titre entier sans parenthese
    },
    {
        id: 51,
        title: 'chlormouss',
        category: 'hygienes'
        // div pour "blanchisseur cuisine"
    },
    {
        id: 52,
        title: 'duosol',
        category: 'hygienes'
        // div pour titre entier
    },
    {
        id: 53,
        title: 'déboucheur traitement des canalisations',
        category: 'hygienes'
        // div pour "déboucheur" et "deboucheur"
    },
    {
        id: 54,
        title: 'alcool ménager',
        category: 'hygienes'
        // div pour titre entier
    },
    {
        id: 55,
        title: 'pro tartre détartrant machine',
        category: 'hygienes'
        // div pour détartrant machine
    },
    {
        id: 56,
        title: 'assouplissant',
        category: 'hygienes'
    },
    {
        id: 57,
        title: 'javel',
        category: 'hygienes'
    },
    {
        id: 58,
        title: 'legno',
        category: 'hygienes'
        // div pour titre entier
    },
    {
        id: 59,
        title: 'liquide lavage machine automatique',
        category: 'hygienes'
        // div pour "liquide lavage"
    },
    {
        id: 60,
        title: 'spray nettoyant inox',
        category: 'hygienes'
        // div pour "spray nettoyant"
    },
    {
        id: 61,
        title: 'spray nettoyant four',
        category: 'hygienes'
    },
    {
        id: 62,
        title: 'spray dégraissant',
        category: 'hygienes'
        // div pour "spray degraissant" et "spray détergent"
    },
    {
        id: 63,
        title: 'nettoyant plancha',
        category: 'hygienes'
    },
    {
        id: 64,
        title: 'pastille chlore',
        category: 'hygienes'
        // div pour "chlore"
    },
    {
        id: 65,
        title: 'gants nitrile',
        category: 'hygienes'
        // div pour "gants"
    },
    {
        id: 66,
        title: 'gants latex',
        category: 'hygienes'
    },
    {
        id: 67,
        title: 'vinaigre alcool blanc',
        category: 'hygienes'
    },
    {
        id: 68,
        title: 'dégraissant multi-surfaces',
        category: 'hygienes'
        // div pour "dégraissant" et "degraissant"
    },
    {
        id: 69,
        title: 'sel pour adoucisseur',
        category: 'hygienes'
    },
    {
        id: 70,
        title: 'pastille lave-vaisselle',
        category: 'hygienes'
    },
    {
        id: 71,
        title: 'liquide rinçage machine',
        category: 'hygienes'
        // div pour titre entier
    },
    {
        id: 72,
        title: 'raclette avec manche aluminium',
        category: 'hygienes'
        // div pour raclette
    },
    {
        id: 73,
        title: 'maxi jumbo',
        category: 'hygienes'
    },
    {
        id: 74,
        title: 'mini jumbo',
        category: 'hygienes'
    },
    {
        id: 75,
        title: 'essuie main',
        category: 'hygienes'
        // div pour titre entier
    },
    {
        id: 76,
        title: 'papier hygiènique',
        category: 'hygienes'
        // div pour sans accent
    },
    {
        id: 77,
        title: 'rouleaux papier hygiènique',
        category: 'hygienes'
        // div "pq" et sans accent
    },
    {
        id: 78,
        title: 'rouleaux papier hygiènique maxi',
        category: 'hygienes'
        // div sans accent
    },
    {
        id: 79,
        title: 'rouleaux torck',
        category: 'hygienes'
    },
    {
        id: 80,
        title: 'spray sanitaire multi-surface',
        category: 'hygienes'
        // div pour "spray sanitaire"
    },
    {
        id: 81,
        title: 'gel wc',
        category: 'hygienes'
    },
    {
        id: 82,
        title: 'savon',
        category: 'hygienes'
        // div pour titre entier
    },
    {
        id: 83,
        title: 'écran urinoir',
        category: 'hygienes'
        // div sans accent
    },
    {
        id: 84,
        title: 'lavette microfibre',
        category: 'hygienes'
        // div pour "lavette"
    },
    {
        id: 85,
        title: 'lavette ajourée',
        category: 'hygienes'
    },
    {
        id: 86,
        title: 'petit sacs poubelles',
        category: 'hygienes'
        // div singulier
    },
    {
        id: 87,
        title: 'nettoyant vitre',
        category: 'hygienes'
    },
    {
        id: 88,
        title: 'spray vitre',
        category: 'hygienes'
    },
    {
        id: 89,
        title: 'balai français',
        category: 'hygienes'
    },
    {
        id: 90,
        title: 'éponge magique',
        category: 'hygienes'
        // div pluriel et sans accent
    },
    {
        id: 91,
        title: 'lave verres',
        category: 'hygienes'
    },
    {
        id: 92,
        title: 'lingettes rince-doigts',
        category: 'hygienes'
        // div pour "rince-doigts"
    },
    {
        id: 93,
        title: 'gobelet à café carton',
        category: 'aEmporter'
        // div "gobelet à café"
    },
    {
        id: 94,
        title: 'gobelets',
        category: 'aEmporter'
        // div au singulier
    },
    {
        id: 95,
        title: 'pot à sauce',
        category: 'aEmporter'
    },
    {
        id: 96,
        title: 'couvercle',
        category: 'aEmporter'
    },
    {
        id: 97,
        title: 'kits couverts',
        category: 'aEmporter'
    },
    {
        id: 98,
        title: 'pot dessert',
        category: 'aEmporter'
        // div "pot de dessert"
    },
    {
        id: 99,
        title: 'pot à salade',
        category: 'aEmporter'
        // div titre entier
    },
    {
        id: 100,
        title: 'couvercle pot à salade',
        category: 'aEmporter'
    },
    {
        id: 101,
        title: 'assiette pulpe de canne',
        category: 'aEmporter'
    },
    {
        id: 102,
        title: 'boite américaine',
        category: 'aEmporter'
        // div pluriel et "boîtes américaines" et sans accent
    },
    {
        id: 103,
        title: 'gobelets à frites',
        category: 'aEmporter'
    },
    {
        id: 104,
        title: 'plateaux 5 compartiments',
        category: 'aEmporter'
        // div "plateaux"
    },
    {
        id: 105,
        title: 'couvercle plateaux 5 compartiments',
        category: 'aEmporter'
        // div "couvercle plateaux"
    },
    {
        id: 106,
        title: 'sac kraft classique',
        category: 'aEmporter'
    },
    {
        id: 107,
        title: 'sac kraft traiteur',
        category: 'aEmporter'
    },
    {
        id: 108,
        title: 'sac à pains',
        category: 'aEmporter'
    },
    {
        id: 109,
        title: 'boite fond et couvercle',
        category: 'aEmporter'
        // div "boîte fond et couvercle"
    },
    {
        id: 110,
        title: 'serviette snack blanche',
        category: 'aEmporter'
        //div "serviette snack"
    },
    {
        id: 111,
        title: 'fontaine scintillante sparkler',
        category: 'divers'
        // div pour "sparkler" et " fontaine scintillante"
    },
    {
        id: 112,
        title: 'rouleaux caisse enregistreuse',
        category: 'divers'
    },
    {
        id: 113,
        title: 'rouleaux tpe',
        category: 'divers'
    },
    {
        id: 114,
        title: 'pailles biodégradables',
        category: 'divers'
        // div "pailles"
    },
    {
        id: 115,
        title: 'pailles cocktails',
        category: 'divers'
        // div titre entier
    },
    {
        id: 116,
        title: 'bloc prise de commande',
        category: 'divers'
        // div "tripli" et "dupli"
    }
];


// Simple SearchBar Function with Maj case insensitive but still stay sensitive to space between words.
// Without a catch of exception with a log to make if you to understand User Input; (update)

function mainSearchBar(e) {
    let input = e.target.value
    let filter = input.toLowerCase()
    products.forEach(function(product) {
        console.log(product)
        if (filter == product.title) {
            document.location.replace(product.category + ".html#" + product.id)
        } else {
            return false;
        }
    })
}

navbarInput.addEventListener('blur', mainSearchBar)

// Contact Functions

let email = document.getElementById('email')
let form = document.querySelector('form')
let error = document.getElementById('error')
let button = document.getElementById('submit')

const regexEmail = /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/

button.style.display = 'none';

email.addEventListener('input', (event) => {
  if (!regexEmail.test(event.target.value)) {
    error.innerText = 'Le format de l\'email est incorrect'
  } else {
    error.innerText = ''
    // Empeche le button de submit tant que le format n'est pas bon
    button.style.display = '';
  }
})

// Card Product - Link Button Functions



// Blacklist Functions à faire mais il est preferable de passer par des modules node.js ou react pour une veritable securité

const blackList = /\w/