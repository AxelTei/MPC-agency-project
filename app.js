
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
const cards = document.querySelector('.card');
const header = document.querySelector('.card-title');
const navbarInput = document.getElementById('inputSearch');

let products = [
    {},
    {
        id: 1,
        title: 'Serviette Double Point Noire'
    },
    {
        id: 2,
        title: 'Serviette Double Point Grise'
    },
    {
        id: 3,
        title: 'Serviette Double Point Ivoire'
    }
];


// Main Template

// function findProduct(e) {
//     products.forEach(function(item, index) {
//         console.log(item, index);
//     })
//     e.preventDefault();
//     window.location.replace("serviettes.html#airlaid");
// }

// Start condition (replace "yo" with item and "serviette.html" with "serviette.html" + index)

// function compareInput(e) {
//     let input = e.target.value
//     if (input == "yo") {
//         document.location.replace("serviettes.html")
//     }
// }

function mainSearchBar(e) {
    let input = e.target.value
    products.forEach(function(product) {
        console.log(product)
        if (input == product.title) {
            document.location.replace("serviettes.html#" + product.id)
        } else {
            alert('ça ne  fonctionne pas')
        }
    })
}

// Il manque le filtre pour rendre la search case insensitive
// Et une fonction copie dans addEventListener du button
navbarInput.addEventListener('blur', mainSearchBar)

// navbarInput.addEventListener('blur', compareInput)
// navbarButton.addEventListener('click', findProduct)
