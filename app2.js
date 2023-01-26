const myKeysValues = window.location.search;

const urlParams = new URLSearchParams(myKeysValues);

const param1 = urlParams.get('nombre');

const param2 = urlParams.get('correo');


document.getElementById('cabecera').innerHTML = param1;
document.getElementById('email').innerHTML = 'correo ' + param2;