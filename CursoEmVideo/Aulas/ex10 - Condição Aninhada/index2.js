//var agora = new Date()
//var hora = agora.getHours()
var hora = 19

console.log(`Agora são ${hora}:00 horas.`)

if (hora >= 0 && hora < 5) {
    console.log('Boa Madrugada! Hora de Dormir!')
} else if (hora >= 5 && hora < 12) {
    console.log('Bom Dia!')
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa Tarde!')
} else if (hora > 18 && hora <= 23) {
    console.log('Boa Noite!')
} else {
    console.log('Horário inválido!')
}
