function crearNodo(tag, texto){
    var etiqueta= document.createElement(tag);
    var contenido= document.createTextNode(texto);
    etiqueta.appendChild(contenido);

    return etiqueta;
}

function añadirEtiqueta(tag) {
    var etiqueta = document.createElement(tag);
    return etiqueta
}

function tagList(texto) {
    var texto= crearNodo("li", texto);
    return texto;
}
function agregarComponente(componente, nodo) {
    componente.appendChild(nodo);
}

function agregarTelefono() {
    var telefono= document.getElementById("telefono").value;
    if (telefono=="") {
        alert("No se pueden guardar datos vacios");
    }else{
        telefono= tagList(telefono);
        agregarComponente(document.getElementById("listaTelefonos"), telefono);

    }
}
function agregarRed() {
    var redSocial= document.getElementById("redSocial").value;
    if (redSocial=="") {
        alert("No se pueden guardar datos vacios");
    }else{
        redSocial= tagList(redSocial);
        agregarComponente(document.getElementById("listaRedesS"), redSocial);
    }
}
function agregarCorreo() {
    var Email= document.getElementById("correoE").value;
    if (Email=="") {
        alert("No se pueden guardar datos vacios");
    }else{
        Email= tagList(Email);
        agregarComponente(document.getElementById("listaCorreos"), Email);
    }
}
function agregarProducto(){
    var tableTr= añadirEtiqueta("tr");
    var idProduct= document.getElementById("productId").value;
    var productName= document.getElementById("ProductName").value;
    var unidades= document.getElementById("unidadesPr").value;
    var precioP= document.getElementById("ValorPr").value;
    var subTotal= (unidades*precioP);


    if (idProduct=="" || productName=="" || unidades=="" || precioP=="") {
        alert("Llene todos los campos");
    }else{
        td1= crearNodo("td", idProduct);
        td2= crearNodo("td", productName);
        td3= crearNodo("td", unidades);
        td4= crearNodo("td", precioP);
        td5= crearNodo("td", subTotal);

        agregarComponente(tableTr, td1);
        agregarComponente(tableTr, td2);
        agregarComponente(tableTr, td3);
        agregarComponente(tableTr, td4);
        agregarComponente(tableTr, td5);
        agregarComponente(document.getElementById("ProductsTable"), tableTr);
    }
}
function agregarCategoria() {
    var tableTr= añadirEtiqueta("tr");
    var IDcatego= document.getElementById("CategoryID").value;
    var nombreCategoria= document.getElementById("CategoryName").value;

    if (IDcatego=="" || nombreCategoria=="") {
        alert("No puede dejar campos Vacios");
    }else{
        td1= crearNodo("td", IDcatego);
        td2= crearNodo("td", nombreCategoria);
        agregarComponente(tableTr, td1);
        agregarComponente(tableTr, td2);
        agregarComponente(document.getElementById("CategoryTable"), tableTr);
    }
}
function agregarCompra(){
    var tableTr= añadirEtiqueta("tr");
    var compraID= document.getElementById("idCompra").value;
    var productoID= document.getElementById("idProducto").value;
    var fechaCompra= document.getElementById("fecha").value;
    var nombreProducto= document.getElementById("productName").value;
    var unidadesProd= document.getElementById("unidades").value;
    var categoriaProd= document.getElementById("categorias").value;
    var ValorTotal= document.getElementById("precioCompra").value;
    var valorUnidad= document.getElementById("PrecioUnidad").value;
    var proveedorName= document.getElementById("nombreProveedor").value;
    var proveedorContact= document.getElementById("contactoProveedor").value;

    if (compraID=="" || productoID=="" || fechaCompra=="" || nombreProducto=="" || unidadesProd=="" || categoriaProd=="" || ValorTotal=="" || valorUnidad=="" || proveedorName=="" || proveedorContact=="") {
        alert("DEBE LLENAR TODOS LOS CAMPOS")
    }else{
        td1= crearNodo("td", compraID);
        td2= crearNodo("td", productoID);
        td3= crearNodo("td", fechaCompra);
        td4= crearNodo("td", nombreProducto);
        td5= crearNodo("td", unidadesProd);
        td6= crearNodo("td", categoriaProd);
        td7= crearNodo("td", ValorTotal);
        td8= crearNodo("td", valorUnidad);
        td9= crearNodo("td", proveedorName);
        td10= crearNodo("td", proveedorContact);

        agregarComponente(tableTr, td1);
        agregarComponente(tableTr, td2);
        agregarComponente(tableTr, td3);
        agregarComponente(tableTr, td4);
        agregarComponente(tableTr, td5);
        agregarComponente(tableTr, td6);
        agregarComponente(tableTr, td7);
        agregarComponente(tableTr, td8);
        agregarComponente(tableTr, td9);
        agregarComponente(tableTr, td10);
        agregarComponente(document.getElementById("gestionCompras"), tableTr);
    }
}