function parimpar(n) {
  if (n%2 == 0) {
      return 'Par!'
  } else {
      return 'Ímpar!'
  }
}

let res = parimpar(22)
console.log(`Esse numero é ${res}`)