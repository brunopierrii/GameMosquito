var altura = 0 
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

// pega o parametro de nivel recebido na url
var nivel = window.location.search
nivel = nivel.replace('?', '')

//define tempo de nivel
if(nivel === 'normal'){
    criaMosquito = 1500
}else if(nivel === 'dificil'){
    criaMosquitoTempo = 1000
}else if(nivel === 'chucknorris'){
    criaMosquitoTempo = 750
}

function ajustaTamanhoJanela()
{   
    
    // pega o tamanho da tela do navegador
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)

}

ajustaTamanhoJanela()

var cronometro = setInterval(function() {
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

// cria a img mosquito, com posições randomicas
function posicaoRandom()
{

    //remove o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        //trabalha em cima da variavel vidas para que possa mudar a imagem por outra
        //imagem assim tendo, podendo atingir um game over
        if(vidas > 3){
            window.location.href = 'fimDeJogo.html'
        }else{
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
        
    }

    // lógica posicionamento de mosquinto aleatória, com eixo x e eixo y
    var posicaoX = Math.floor(Math.random() * largura) - 50
    var posicaoY = Math.floor(Math.random() * altura) - 50

    //eleminando resultados menores que '0'
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // criando elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    //adicionando elemento pra o body
    document.body.appendChild(mosquito)
}

// modifica tamanho(modificando a classe), com base nos resultados da mudança de estado do elemento
function tamanhoAleatorio()
{
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'  
    }
}

// modifica lado(modificando a classe), com base nos resultados da mudança de estado do elemento
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
    