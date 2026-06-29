function tabuada() {
  var num = document.getElementById('txtn')
  var tab = document.getElementById('seltab')
  if (num.value.length == 0) {
    window.alert('Por favor, digite um número!')
  } else {
    var n = Number(num.value)
    tab.innerHTML = ''
    for (let c = 1; c <= 10; c++) {
      // For sempre terá uma variável "c"
      var item = document.createElement('option')
      // Criou caixa de opções no HTML
      item.text = (`${n} x ${c} = ${n*c}`)
      item.value = `tab${c}` // Mais util em outras linguagens
      tab.appendChild(item) // Para a Tabuada ser gerada
      
    }
  }
  
}