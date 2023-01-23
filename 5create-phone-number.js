function createPhoneNumber(numbers){
  let string = ''
  numbers.forEach(x => string = string + x)
  return string = '(' + string.slice(0,3) + ') ' + string.slice(3, 6) + '-' + string.slice(6)
}

function createPhoneNumber(numbers){
  numbers.join('').replace(/(...)(...)(.*)/, '($1) ($2)-($3)')
} 