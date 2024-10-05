const rojoSlider = document.getElementById('rojo');
const verdeSlider = document.getElementById('verde');
const azulSlider = document.getElementById('azul');
const valorRojo = document.getElementById('valor-rojo');
const valorVerde = document.getElementById('valor-verde');
const valorAzul = document.getElementById('valor-azul');

function actualizarColor() {
    const rojo = rojoSlider.value;
    const verde = verdeSlider.value;
    const azul = azulSlider.value;

    valorRojo.textContent = rojo;
    valorVerde.textContent = verde;
    valorAzul.textContent = azul;

    document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

rojoSlider.addEventListener('input', actualizarColor);
verdeSlider.addEventListener('input', actualizarColor);
azulSlider.addEventListener('input', actualizarColor);

actualizarColor();
