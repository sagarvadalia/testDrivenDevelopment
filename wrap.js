function wrap(line, maxLen) {
  let arr = line.split(' ');
  let counter = 0;
  let stringToReturn = ''
  for(let i = 0; i < arr.length; i ++){
    counter += arr[i].length
    if(counter > maxLen){
      stringToReturn += '\n '
      counter = 0;
    }
    stringToReturn += arr[i]
    stringToReturn += ' '
  }
  return stringToReturn.trim();
}
module.exports = wrap;
