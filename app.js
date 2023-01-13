
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

//loop on each object from products array

// products.forEach(function(item, index) {
//     console.log(item, index);
// })

// Redirect to the good component

// navbarButton.addEventListener('click', function(e){
//     e.preventDefault();
//     window.location.replace("serviettes.html#airlaid");
// })

// Main Template

function findProduct(e) {
    products.forEach(function(item, index) {
        console.log(item, index);
    })
    e.preventDefault();
    window.location.replace("serviettes.html#airlaid");
}

// Start condition (replace "yo" with item and "serviette.html" with "serviette.html" + index)

navbarInput.addEventListener('blur', (e) => {
    let input = e.target.value
    if (input == "yo") {
        document.location.replace("serviettes.html")
    }
})

navbarButton.addEventListener('click', findProduct)
