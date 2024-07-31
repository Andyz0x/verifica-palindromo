function verificar() {
    let numeros = [];

    for (i = 0; i < 3; i++) {
        numeros.push(document.getElementById(`numero__${i + 1}`).value);
        // console.log(numeros[i]);
        // console.log(numeros.length);

    }
    numeros.sort(ordenador);
    alert(`Os numeros ordenados? ${numeros}`);

}

function ordenador(a, b) {
    return (a - b);
}


