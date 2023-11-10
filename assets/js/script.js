let cantidad = document.querySelector("#cantidad");
let precio = document.querySelector("#precio");
let total = document.querySelector("#total");
let resta = document.querySelector("#resta");
let suma = document.querySelector("#suma");

suma.onclick = function(){
    cantidad.innerHTML++;
    total.innerHTML =(cantidad.innerHTML *precio.innerHTML).toLocaleString();


}

resta.onclick = function(){
    cantidad.innerHTML--;
    total.innerHTML =(cantidad.innerHTML *precio.innerHTML).toLocaleString();
}
