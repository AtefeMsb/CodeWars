// https://www.codewars.com/kata/rot13-1/train/javascript

/**
 * 
 * @param {integer} code 
 * @param {integer} aCode 
 * @param {integer} zCode 
 * @return {integer} | new character 
 */
function getChar(code, aCode, zCode) {
  let newCode = code + 13;
  if (newCode > zCode) {
    let diff = newCode - zCode;
    newCode = aCode + diff - 1;
  }
  return String.fromCharCode(newCode);
}

function rot13(message) {

  let newMessage = '';
  let aCode = "a".charCodeAt(0);
  let zCode = "z".charCodeAt(0);
  let aCapsCode = "A".charCodeAt(0);
  let zCapsCode = "Z".charCodeAt(0);

  for (let i = 0; i < message.length; i++) {
    let code = message.charCodeAt(i);

    if (code >= aCode && code <= zCode) {
      newMessage += getChar(code, aCode, zCode);
    } else if (code >= aCapsCode && code <= zCapsCode) {
      newMessage += getChar(code, aCapsCode, zCapsCode);
    } else { // other than alphabet
      newMessage += message.charAt(i);
    }
  }

  return newMessage;
}


console.log(rot13("GRFG*Z"));