
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
        //point de rajout
    },
    {
        id: 9,
        title: 'serviette double point turquoise'
    },
    {
        id: 10,
        title: 'serviette double point vert jaguar'
        //point de rajout
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
