
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
        title: 'serviette double point noire'
    },
    {
        id: 2,
        title: 'serviette double point grise'
    },
    {
        id: 3,
        title: 'serviette double point ivoire'
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
    let filter = input.toLowerCase()
    console.log(filter)
    products.forEach(function(product) {
        console.log(product)
        if (filter == product.title) {
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
