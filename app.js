
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
        // avec une autre div faire le bleu
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
        // idem
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
        // avec une autre div faire le 1/8
    },
    {
        id: 22,
        title: 'serviette airlaid pliage noire',
        category: 'serviettes'
        // idem
    },
    {
        id: 23,
        title: 'serviette kangourou pliée noire',
        category: 'serviettes'
        // avec une autre div faire le kangourou sans pliée
    },
    {
        id: 24,
        title: 'serviette kangourou pliée grise',
        category: 'serviettes'
        // idem
    },
    {
        id: 25,
        title: 'serviette kangourou pliée blanche',
        category: 'serviettes'
        // idem
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
        // div pour bleu sans marine
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
        // div pour naturelle sans kraft
    },
    {
        id: 33,
        title: 'airlaid noir tête à tête',
        category: 'setDeTables'
        // faire div pour sans accent et set de table airlaid noir (sans tete a tete)
    },
    {
        id: 34,
        title: 'airlaid chocolat tête à tête',
        category: 'setDeTables'
        // idem
    },
    {
        id: 35,
        title: 'airlaid ivoire tête à tête',
        category: 'setDeTables'
        // idem
    },
    {
        id: 36,
        title: 'airlaid bordeaux tête à tête',
        category: 'setDeTables'
        // idem
    },
    {
        id: 37,
        title: 'airlaid blanc tête à tête',
        category: 'setDeTables'
        // idem
    },
    {
        id: 38,
        title: 'nappes blanches',
        category: 'setDeTables'
        // div pour nappes tout court
    },
    {
        id: 39,
        title: 'tablier jetable',
        category: 'hygienes'
        // div pour le titre entier
    },
    {
        id: 40,
        title: 'bobine gaufrée',
        category: 'hygienes'
        // div pour sans accent et titre entier
    },
    {
        id: 41,
        title: 'bobine lisse',
        category: 'hygienes'
        // div pour titre entier
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
        // div pour sans accent et titre entier 
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
        // div pour titre entier et au singulier et div rouleau tout court
    },
    {
        id: 46,
        title: 'rouleaux film aluminium',
        category: 'hygienes'
        // div pour au singulier et titre entier
    },
    {
        id: 47,
        title: 'sac poubelles',
        category: 'hygienes'
        // div singulier et pluriel
    },
    {
        id: 48,
        title: 'plonge manuelle vaisselle',
        category: 'hygienes'
        // div pour "plonge vaisselle"
    },
    {
        id: 49,
        title: 'décapant four acide',
        category: 'hygienes'
        // div pour "décapant" et "décapant four"
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

// Blacklist Functions à faire mais il est preferable de passer par des modules node.js ou react pour une veritable securité

const blackList = /\w/