
//Google Sheet connect code
var scriptURL = "https://script.google.com/macros/s/AKfycbxi6B-vq4A8fHaPumsFENCJuBlcbdUwkvLR5g85H4wav1mS9Br6EHOhpCJ1HwRqxvZw/exec";
var form = document.forms['google-sheet'];
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
.catch(error => console.error('Error!', error.message))
});
