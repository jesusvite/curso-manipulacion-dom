const formulario = document.getElementById('formulario');
const calculo1 =document.getElementById('calculo1');
const calculo2 = document.getElementById('calculo2');
const boton = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

// formulario.addEventListener('submit', clickBton);
boton.addEventListener('click', clickBton);
function clickBton(event) {
    // event.preventDefault();
    const suma = Number (calculo1.value) + Number (calculo2.value);
    resultado.innerText = "Tu resultado es el siguiente: " + suma;
}
