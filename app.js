
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
        title: 'serviette double point noire'
    },
    {
        id: 2,
        title: 'serviette double point grise'
    },
    {
        id: 3,
        title: 'serviette double point ivoire'
    },
    {
        id: 4,
        title: 'serviette double point naturelle'
    },
    {
        id: 5,
        title: 'serviette double point blanche'
    },
    {
        id: 6,
        title: 'serviette double point rouge'
    },
    {
        id: 7,
        title: 'serviette double point bordeaux'
    },
    {
        id: 8,
        title: 'serviette double point bleu marine'
        // avec une autre div faire le bleu
    },
    {
        id: 9,
        title: 'serviette double point turquoise'
    },
    {
        id: 10,
        title: 'serviette double point vert jaguar'
    },
    {
        id: 11,
        title: 'serviette double point chocolat'
    },
    {
        id: 12,
        title: 'serviette airlaid noire'
    },
    {
        id: 13,
        title: 'serviette airlaid blanche'
    },
    {
        id: 14,
        title: 'serviette airlaid grise'
    },
    {
        id: 15,
        title: 'serviette airlaid rouge'
    },
    {
        id: 16,
        title: 'serviette airlaid bordeaux'
    },
    {
        id: 17,
        title: 'serviette airlaid bleu marine'
        // idem
    },
    {
        id: 18,
        title: 'serviette airlaid turquoise'
    },
    {
        id: 19,
        title: 'serviette airlaid ivoire'
    },
    {
        id: 20,
        title: 'serviette airlaid chocolat'
    },
    {
        id: 21,
        title: 'serviette airlaid pliage blanche'
        // avec une autre div faire le 1/8
    },
    {
        id: 22,
        title: 'serviette airlaid pliage noire'
        // idem
    },
    {
        id: 23,
        title: 'serviette kangourou pliée noire'
        // avec une autre div faire le kangourou sans pliée
    },
    {
        id: 24,
        title: 'serviette kangourou pliée grise'
        // idem
    },
    {
        id: 25,
        title: 'serviette kangourou pliée blanche'
        // idem
    }
];


// Simple SearchBar Function with Maj case insensitive but still stay sensitive to space between words.
// Without a catch of exception with a log to make if you to understand User Input; (update)

function mainSearchBar(e) {
    let input = e.target.value
    let filter = input.toLowerCase()
    console.log(filter)
    products.forEach(function(product) {
        console.log(product)
        if (filter == product.title) {
            document.location.replace("serviettes.html#" + product.id)
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
    // A empecher le button de submit tant que le format n'est pas bon
    button.style.display = '';
  }
})
