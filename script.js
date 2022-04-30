let jogador = 'x'
let vencedor = false;

let quadrados = document.querySelectorAll('.quadrado')
quadrados.forEach(quadrado => {
    quadrado.addEventListener('click', () => {
        return marcarQuadrado(quadrado.id)
    })
})

let reiniciar = document.getElementById('reiniciar')
reiniciar.addEventListener('click', () => window.location.reload())

function marcarQuadrado(id) {
    let quadrado = document.getElementById(id)
    // SE O QUADRADO FOR DIFERENTE DE '-' QUER DIZER QUE ELE JÁ FOI MARCADO. POR ISSO EU RETORNO NADA, PARA QUE NÃO SUBSTITUA A JOGADA DE NIGUÉM
    if (quadrado.innerHTML != '-') {
        return
    }

    quadrado.innerHTML = jogador
    quadrado.style.color = 'black'
    
     // ESSA CONDIÇÃO SÓ SERÁ FALSA QUANDO JÁ TIVER UM VENCEDOR
    if(!vencedor){
        checarVencedor()
    }
    
    if (jogador == 'x') {
        jogador = 'y'
        document.getElementById('vez').innerHTML = `Vez de: ${jogador}`
    } else {
        jogador = 'x'
        document.getElementById('vez').innerHTML = `Vez de: ${jogador}`
    }
    
}

function checarVencedor() {
    // TRANSVERSAL ESQUERDA
    if (
        quadrados[4].innerHTML == quadrados[0].innerHTML &&
        quadrados[4].innerHTML == quadrados[8].innerHTML &&
        quadrados[4].innerHTML != '-'
    ) {
        document.getElementById(5).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById(1).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById(9).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById('vencedor').innerHTML = `Vencedor: ${jogador}`
    }

    // TRANVERSAL DIREITA
    if (
        quadrados[4].innerHTML == quadrados[6].innerHTML &&
        quadrados[4].innerHTML == quadrados[2].innerHTML &&
        quadrados[4].innerHTML != '-'
    ) {
        document.getElementById(5).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById(7).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById(3).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById('vencedor').innerHTML = `Vencedor: ${jogador}`
    }

    // CENTRO HORIZONTAL
    if (
        quadrados[4].innerHTML == quadrados[1].innerHTML &&
        quadrados[4].innerHTML == quadrados[7].innerHTML &&
        quadrados[4].innerHTML != '-'
    ) {
        document.getElementById(5).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById(2).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById(8).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById('vencedor').innerHTML = `Vencedor: ${jogador}`
    }

    // CENTRO VERTICAL
    if (
        quadrados[4].innerHTML == quadrados[3].innerHTML &&
        quadrados[4].innerHTML == quadrados[5].innerHTML &&
        quadrados[4].innerHTML != '-'
    ) {
        document.getElementById(5).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById(4).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById(6).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById('vencedor').innerHTML = `Vencedor: ${jogador}`
    }

    // ESQUERDA HORIZONTAL
    if (
        quadrados[0].innerHTML == quadrados[3].innerHTML &&
        quadrados[0].innerHTML == quadrados[6].innerHTML &&
        quadrados[0].innerHTML != '-'
    ) {
        document.getElementById(1).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById(4).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById(7).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById('vencedor').innerHTML = `Vencedor: ${jogador}`
    }

    // ESQUERDA VERTICAL
    if (
        quadrados[0].innerHTML == quadrados[1].innerHTML &&
        quadrados[0].innerHTML == quadrados[2].innerHTML &&
        quadrados[0].innerHTML != '-'
    ) {
        document.getElementById(1).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById(2).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById(3).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById('vencedor').innerHTML = `Vencedor: ${jogador}`
    }

    // DIREITA HORIZONTAL
    if (
        quadrados[8].innerHTML == quadrados[5].innerHTML &&
        quadrados[8].innerHTML == quadrados[2].innerHTML &&
        quadrados[8].innerHTML != '-'
    ) {
        document.getElementById(9).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById(6).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById(3).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById('vencedor').innerHTML = `Vencedor: ${jogador}`
    }

    // DIREITA VERTICAL
    if (
        quadrados[8].innerHTML == quadrados[7].innerHTML &&
        quadrados[8].innerHTML == quadrados[6].innerHTML &&
        quadrados[8].innerHTML != '-'
    ) {
        document.getElementById(9).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById(8).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById(7).style.backgroundColor = 'rgb(12, 255, 4)'
        document.getElementById('vencedor').innerHTML = `Vencedor: ${jogador}`
    }

    // ISSO IMPEDIRÁ QUE ESSA FUNÇÃO SEJA INVOCADO CASO JÁ TENHA UM VENCEDOR
    if(document.getElementById('vencedor').innerHTML != "Vencedor:"){
        vencedor = true
    }
    
}
