const phoneticAlphabet = {
  A: 'Alfa', B: 'Bravo', C: 'Charlie', D: 'Delta', E: 'Echo',
  F: 'Foxtrot', G: 'Golf', H: 'Hotel', I: 'India', J: 'Juliett',
  K: 'Kilo', L: 'Lima', M: 'Mike', N: 'November', O: 'Oscar',
  P: 'Papa', Q: 'Quebec', R: 'Romeo', S: 'Sierra', T: 'Tango',
  U: 'Uniform', V: 'Victor', W: 'Whiskey', X: 'X-ray', Y: 'Yankee', Z: 'Zulu'
};


function translateToPhonetic() {
  const input = document.getElementById('inputText').value.toUpperCase();
  let result = '';

  for (let char of input) {
      if (phoneticAlphabet[char]) {
          result += phoneticAlphabet[char] + ' / ';
      }
      else if (char === ' ') {
          result += '\n';
      } else {
          result += char + '*/ ';
      }
  }

  document.getElementById('output').innerText = result.trim();
}

function resetFields() {
  document.getElementById('inputText').value  = '';
  document.getElementById('output').innerHTML = '<label for="inputText"><i class="pointer">Toca par empezar a escribir</i></label>';


  const textarea = document.getElementById('inputText');
  textarea.style.width = '306px'; // Establece el ancho deseado
  textarea.style.height = '35px'; // Establece la altura deseada
}


function autoResize(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

function checkEnter(event) {
  if (event.key === 'Enter') {
      event.preventDefault();
      translateToPhonetic();
  }
}