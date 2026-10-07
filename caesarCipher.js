function caesarCipher(string, shiftFactor) {
  return string
    .split("")
    .map(char => {
      if (char >= "A" && char <= "Z") {
        return String.fromCharCode(
          ((char.charCodeAt(0) - 65 + shiftFactor) % 26 + 26) % 26 + 65
        );
      }

      if (char >= "a" && char <= "z") {
        return String.fromCharCode(
          ((char.charCodeAt(0) - 97 + shiftFactor) % 26 + 26) % 26 + 97
        );
      }

      return char;
    })
    .join("");
}



export{caesarCipher}