let contenedorPrincipal = document.querySelector('#contenedorPizarra');

function gridSize(size){
    for (let index = 0; index < size; index++) {
        let divPadre = document.createElement('div');
        divPadre.style.cssText = 'margin: 0; display: flex; flex: 1; align-items: stretch;';
        for (let index = 0; index < size; index++) {
            let divHijo = document.createElement('div');
            divHijo.style.cssText = 'border: 1px solid black; margin: 0; background-color: white; flex: 1;';
            divHijo.className = 'cubo';
            divHijo.addEventListener('mouseover', () => {
                divHijo.style.backgroundColor = 'black';
            });
            divPadre.appendChild(divHijo);
        }
        contenedorPrincipal.appendChild(divPadre);
    }
}


let reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    let cubo = document.querySelectorAll('.cubo');
    cubo.forEach(cubo => {
        cubo.style.backgroundColor = "white";
    });
});

let erase = document.querySelector('#erase');
erase.addEventListener('click', () => {
    let cubo = document.querySelectorAll('.cubo');
    cubo.forEach(cubo => {
        cubo.addEventListener('mouseover', () => {
            cubo.style.backgroundColor = 'white';
        });
    })
});

let pen = document.querySelector('#pen');
pen.addEventListener('click', () => {
    let cubo = document.querySelectorAll('.cubo');
    cubo.forEach(cubo => {
        cubo.addEventListener('mouseover', () => {
            cubo.style.backgroundColor = 'black';
        });
    })
});


const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

function getCharacter(index) {
	return hexCharacters[index]
};

function generateNewColor() {
	let hexColorRep = "#"

	for (let index = 0; index < 6; index++){
		const randomPosition = Math.floor ( Math.random() * hexCharacters.length ) 
    	hexColorRep += getCharacter( randomPosition )
	}
	
	return hexColorRep
};

let color = document.querySelector('#color');
color.addEventListener('click', () => {
    let cubo = document.querySelectorAll('.cubo');
    cubo.forEach(cubo => {
        cubo.addEventListener('mouseover', () => {
            cubo.style.backgroundColor = generateNewColor();
        });
    })
});
let accept = document.querySelector('#accept');
let size = document.querySelector('#size');
accept.addEventListener('click', () => {
    if (size.value >= 2 && size.value <= 100) {
        contenedorPrincipal.innerHTML = "";
    gridSize(size.value);
    }
});