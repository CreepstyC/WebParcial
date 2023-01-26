document.getElementById("gusto-input").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        agregarFila();
    }
});

function agregarFila() {
    var gusto = document.getElementById("gusto-input").value;
    var tabla = document.getElementById("tabla-gustos").getElementsByTagName('tbody')[0];
    var fila = tabla.insertRow(0);
    var celda1 = fila.insertCell(0);
    var celda2 = fila.insertCell(1);
    
    celda1.innerHTML = '<td><input type="text" value="' + gusto + '"disabled=true></td>';
    celda2.innerHTML = '<button type="button" onclick="editarFila(this)">Editar</button>';
    document.getElementById("gusto-input").value = "";
}

function editarFila(boton) {
    let fila = boton.parentNode.parentNode;
    fila.getElementsByTagName("input")[0].disabled = false;
    let menu_cambios = document.getElementById("menu-cambios").style;
    var celda2 = boton.parentNode;
    if (boton.innerHTML === "Editar") {
        boton.style.display = "none";
        celda2.innerHTML = '<label for="edicion-label">En edición</label>';
        menu_cambios.display = "block";
    }
}