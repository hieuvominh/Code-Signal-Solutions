function reverseInParentheses(inputString) {
  while (inputString.indexOf(")") !== -1) {
      let s = inputString.indexOf(")", 0);
      let a = inputString.lastIndexOf('(', s);
      let b = inputString.slice(a + 1, s).split("").reverse().join("");
      inputString = inputString.slice(0, a) + b + inputString.slice(s + 1); 

  }
  return inputString;
}