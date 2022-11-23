

function agregarDatos(){

    var id = document.getElementById("id").value    
    var nombre = document.getElementById("nombre").value
    var cantidad = document.getElementById("cantidad").value
    var crearTr = document.createElement("tr")
    var crearTd1 = document.createElement("td")
    var crearTd2 = document.createElement("td")
    var crearTd3 = document.createElement("td")
    document.getElementById("tabla").appendChild(crearTr)
    
    crearTd1.textContent = id
    crearTd2.textContent = nombre
    crearTd3.textContent = cantidad

    crearTr.appendChild(crearTd1)
    crearTr.appendChild(crearTd2)
    crearTr.appendChild(crearTd3)
}


function eliminarDatos(){}
