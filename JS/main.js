function avisoSobreLaPagina() {
    let profesor = prompt("Ingrese el nombre del Profesor/ar")
    alert("Hola; esta pagina esta en construccion Profe " + profesor);
};
avisoSobreLaPagina()
const productos = [{
        nombre: "neumatica",
        precio: 1200
    },
    {
        nombre: "fija",
        precio: 500
    },
    {
        nombre: "regulable",
        precio: 800
    },
    {
        nombre: "competicion",
        precio: 1500
    },
    {
        nombre: "amortiguadores",
        precio: 200
    },
];
let compra = []


let seleccion = prompt("Bienvenido. ¿Estas interesado en alguno de los productos?( Responde si o no)")

while (seleccion != "si" && seleccion != "no") {
    alert("por favor ingresa si o no")
    seleccion = prompt("¿Desea comprar algo?(si o no)")

};
if (seleccion == "si") {
    alert("Estos son nuestros productos")
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todosLosProductos.join(" - "))
} else if (seleccion == "no") {
    alert("Gracias por tu visita, Hasta pronto.")
}
while (seleccion != "no") {
    let producto = prompt("¿Que deseas comprar?")
    let precio = 0

    if (producto == "neumatica" || "fija" || "regulable" || "competicion" || "amortiguadores") {
        switch (producto) {
            case "neumatica":
                precio = 1200;
                break;
            case "fija":
                precio = 1200;
                break;
            case "regulable":
                precio = 800;
                break;
            case "competicion":
                precio = 1500;
                break;
            case "amortiguadores":
                precio = 200;
                break;
            default:
                break;
        }
        let cantidad = parseInt(prompt("¿Cuantas unidades quiere llevar?"))
        compra.push({
            producto,
            cantidad,
            precio
        })
        console.log(compra)
    } else {
        alert("no tenemos ese producto")
    }
  seleccion = prompt("¿Desea añadir algo mas?")  
  while(seleccion === "no"){
    alert("gracias por la compra");

    compra.forEach((compraFinal) => {
      console.log(
        `"producto:" ${compraFinal.producto}, "cantidad:" ${
          compraFinal.cantidad
        }, "total a pagar por producto:" ${compraFinal.cantidad * compraFinal.precio}`
      );
    });

    break;
  }
}