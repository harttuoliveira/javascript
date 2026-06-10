function verificar() {
    var data = new Date() // Cria um objeto de data para obter o ano atual
    var ano = data.getFullYear() // Obtém o ano atual
    var fano = document.getElementById('txtano') // Seleciona o elemento de entrada de ano
    var res = document.querySelector('div#res') // Seleciona o elemento de resultado
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') // Seleciona os elementos de rádio para o sexo
        var idade = ano - Number(fano.value) // Calcula a idade subtraindo o ano de nascimento do ano atual
        var gênero = ''
        var img = document.createElement('img') // Cria um elemento de imagem
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) { 
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca-m.png')
            } else if (idade >= 11 && idade <= 19) {
                // Adolescente
                img.setAttribute('src', 'adoles-m.png')
            } else if (idade >= 20 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca-f.png')
            } else if (idade >= 11 && idade <= 19) {
                // Adolescente
                img.setAttribute('src', 'adoles-f.png')
            } else if (idade >= 20 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) // Adiciona a imagem ao resultado
    }
}