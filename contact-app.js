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