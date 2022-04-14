


// muestro desde JS 

 let bebidas = ["CERVEZA", "VODKA", "VINO", "GIN", "WHISKY"] 
 for (const el of bebidas) {
    let li = document.createElement("li");
    li.innerHTML = el;
    document.querySelector("#ejemplo").append(li);
}  

 document.querySelector("#ejemplo").innerHTML = `<h1>Nuestra tienda tiene las Siguientes Bebidas: ${bebidas}</h1>`  



// agrego una class

 const  cambio = document.querySelector("#titulo");
          cambio.classList.add("nnuevaclass");



