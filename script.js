const phoneticAlphabet = {
  A: 'Alfa', Á: 'Alfa', B: 'Bravo', C: 'Charlie', D: 'Delta', E: 'Echo', É: 'Echo',
  F: 'Foxtrot', G: 'Golf', H: 'Hotel', I: 'India', Í: 'India', J: 'Juliett', K: 'Kilo',
  L: 'Lima', M: 'Mike', N: 'November', O: 'Oscar', Ó: 'Oscar', P: 'Papa', Q: 'Quebec',
  R: 'Romeo', S: 'Sierra', T: 'Tango', U: 'Uniform', Ú: 'Uniform', Ü: 'Uniform', V: 'Victor',
  W: 'Whiskey', X: 'X-ray', Y: 'Yankee', Z: 'Zulu'
};

const reset = document.getElementById('reset');
const resultado = document.getElementById('resultado');
const salida = document.getElementById('output');''
const cookies = document.getElementById('cookie-notice');''
const buttonCookies = document.getElementById('accept-cookies');''
const body = document.getElementById('body');''

function translateToPhonetic() {
  const input = document.getElementById('inputText').value.toUpperCase();
  let result = '';
  reset.style.display = 'block';
  resultado.style.display = 'inline';
  if (input === '') {
    result = 'Toca reiniciar y escribe algo';
  } else {
    for (let char of input) {
      if (phoneticAlphabet[char]) {
        result += phoneticAlphabet[char] + ' / ';
      } else if (char === ' ') {
          result += '\n - ';
      } else {
        result += char + '*/ ';
      }
    }
  }
  document.getElementById('output').innerText = result.trim();
};

function resetFields() {
  document.getElementById('inputText').value  = '';
  document.getElementById('output').innerHTML = '<label for="inputText"><i class="pointer">Clic aquí para empezar.</i></label>';
  reset.style.display = 'none';
  resultado.style.display = 'none';
  salida.style.fontSize = '16px';

  const textarea = document.getElementById('inputText');
  textarea.style.width = '306px'; // Establece el ancho deseado
  textarea.style.height = '35px'; // Establece la altura deseada
  salida.style.backgroundColor = '';
};


function autoResize(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
};

function checkEnter(event) {
  if (event.key === 'Enter') {
      event.preventDefault();
      translateToPhonetic();
      reset.style.display = 'block';
      resultado.style.display = 'inline';
  }
};

resultado.addEventListener('click', function() {
  salida.style.backgroundColor = 'rgba(189, 187, 187, 0.774)';
  salida.style.fontSize = '24px';
});

buttonCookies.addEventListener('click', function() {
  cookies.style.display = 'none';
  body.style.marginTop = '0';
});
