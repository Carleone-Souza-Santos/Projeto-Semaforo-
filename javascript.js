const $luzesDoCirculo = document.querySelectorAll('.luzes-circulo');
let contadorDeLuz = 0;

const mostrarLuz = () =>{
    $luzesDoCirculo[contadorDeLuz].className = 'luzes-circulo';
    contadorDeLuz++;

    if(contadorDeLuz > 2) contadorDeLuz = 0;

    const luzAtual = $luzesDoCirculo[contadorDeLuz];
    luzAtual.classList.add(luzAtual.getAttribute('color'))
}
setInterval(mostrarLuz,1900)


