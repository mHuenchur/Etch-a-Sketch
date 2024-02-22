let contenedorPrincipal = document.querySelector('#contenedorPizarra');
let orden = 12;
for (let index = 0; index < orden; index++) {
    let divPadre = document.createElement('div');
    divPadre.style.cssText = 'margin: 0; display: flex; flex: 1; align-items: stretch;';
    for (let index = 0; index < orden; index++) {
        let divHijo = document.createElement('div');
        divHijo.style.cssText = 'border: 1px solid black; margin: 0; background-color: white; flex: 1;';
        divPadre.appendChild(divHijo);
    }
    contenedorPrincipal.appendChild(divPadre);
}