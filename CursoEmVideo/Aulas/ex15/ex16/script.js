function contar() {
  var ini = document.getElementById('ini')
  var fim = document.getElementById('fim')
  var pas = document.getElementById('pas')
  var res = document.querySelector('div#res')

  if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
    res.innerHTML = 'Impossívell contar!'
  } else {
    res.innerHTML = 'Contando: <br>'
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pas.value)
    if (p <= 0) {
      window.alert('Passo inválido! Considerando PASSO 1')
      p = 1
    }
      if (i < f) {
        // O let = var e o "c" como varivel diferente é essencial
        for (let c = i; c <= f; c += p) { 
          // Para emojis em JS acrescente \u{e aqui o código}
          res.innerHTML += ` ${c} \u{1F449}` 
          
        }
      } else if (i > f) {
        // Contagem regressiva
        for (let c = i; c >= f; c -= p) { 
          res.innerHTML += ` ${c} \u{1F449}` 
        }
        
      }
      res.innerHTML += `\u{1F3F4}`
    
  }
}