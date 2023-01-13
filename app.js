
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
const card = document.querySelector('#cardN');
const header = document.querySelector('.card-title');
const navbarInput = document.getElementById('inputSearch');

let products = [
    {
        id: 1,
        title : 'Serviette Double Point Noire'
    },
    {
        id: 2,
        title: 'Serviette Double Point Grise'
    }
];

navbarButton.addEventListener("click", () => {
    window.location.href = card;
});

