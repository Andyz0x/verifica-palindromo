function verificar() {

    const palavra = document.getElementById('nome__teste').value;
    var ignoraEspaco = palavra.replace(/\s/g, '');
    if (ignoraEspaco === '') {
        alert('O campo não pode estar vázio!');
    // } else if (isNaN(ignoraEspaco) == false) {
    //     alert('Não pode conter números!');
    } else {
        const reverso = ignoraEspaco.split('').reverse().join('');
        if (ignoraEspaco === reverso) {
            alert(`"${ignoraEspaco}" de trás para frente fica "${reverso}", sendo assim é um Palíndromo.`);
        } else {
            alert(`"${ignoraEspaco}" de trás para frente fica "${reverso}", sendo assim, não é um Palíndromo.`);
        }

    }
}
