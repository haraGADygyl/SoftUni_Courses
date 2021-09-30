function solve() {

  let text = document.getElementById('input').value;
  let sentences = text.split('.');
  sentences.pop();
  let result = '';

  for (let i = 0; i < sentences.length; i += 3) {

    result += `<p>${sentences[i]}.`;

    if (sentences[i + 1] != undefined) {
      result += sentences[i + 1] + '.';
    }

    if (sentences[i + 2] != undefined) {
      result += sentences[i + 2] + '.';
    }

    result += '</p>'
  }

  document.getElementById('output').innerHTML = result;
}