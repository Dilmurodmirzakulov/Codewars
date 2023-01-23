function validParentheses(parens) {
  let arr = parens.split('')
  let status = 0, final = true;
  arr.forEach(x => {
    if( x == '(' ) status++
    if( x == ')' ) status--
    if(status < 0) final = false
  })
  return status == 0 && final ? true : false
}