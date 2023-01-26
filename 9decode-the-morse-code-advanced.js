var decodeBits = function(bits){
  bits = bits.replace(/^0+/, '')
  bits = bits.replace(/0+$/, '')
  let arr = bits.match(/0+|1+/g)
  let unit = Math.min(...arr.map(o => o.length));
  let threeUnit = unit * 3
  let sevenUnit = unit * 7
  let charSpace = new RegExp(`0{${unit}}`, 'g')
  let letterSpace = new RegExp(`0{${threeUnit}}`, 'g')
  let wordSpace = new RegExp(`0{${sevenUnit}}`, 'g')
  let dot = new RegExp(`1{${unit}}`, 'g')
  let dash = new RegExp(`1{${threeUnit}}`, 'g')
  return bits.replace(wordSpace, '   ').replace(dash, '-').replace(letterSpace, ' ').replace(dot, '.').replace(charSpace, '');
}

var decodeMorse = function(morseCode){
  return morseCode.split('   ').map(y => y.split(' ')).map(x => {
    let text = ''
    for(let y of x) text = text + MORSE_CODE[y]
    return text
  }).join(' ')
}