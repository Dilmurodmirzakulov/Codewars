decodeMorse = function(morseCode){
  let text = morseCode.split("   ").map(x => {
      return x.split(' ').map(y => {
      return MORSE_CODE[y]
    })  
  })
  return text.map(x => x.join('')).filter(x => x !== "").join(" ")
}