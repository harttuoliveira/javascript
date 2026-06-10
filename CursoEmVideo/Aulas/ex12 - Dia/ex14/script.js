function  carregar(params) {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours() //
  //var hora = 2
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 5) {
    // BOA MADRUGADA!
    img.src = 'fotomadruga.jpg'
    document.body.style.background = 'var(--madruga)' // mudar a cor do fundo da página dinâmicamente
  } else if (hora >= 5 && hora < 12) {
    // BOM DIA!
    img.src = 'fotomanha.jpg'
    document.body.style.background = 'var(--manha)'
  } else if (hora >= 12 && hora <= 18) {
    // BOA TARDE!
    img.src = 'fototarde.jpg' 
    document.body.style.background = 'var(--tarde)'
  } else if (hora >= 19 && hora <= 23) {
    // BOA NOITE!
    img.src = 'fotonoite.jpg'
    document.body.style.background = 'var(--noite)'
  }
}

