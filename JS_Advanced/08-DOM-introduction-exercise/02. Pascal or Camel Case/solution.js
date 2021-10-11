function solve() {
  let textElement = document.querySelector('#text').value;
  let namingConventionElement = document.querySelector('#naming-convention').value;
  let resultElement = document.querySelector('#result');

  let result = [];
  let splitText = textElement.split(' ')

  if (namingConventionElement === 'Camel Case') {
      result.push(splitText[0].toLowerCase());

      for (let i = 1; i < splitText.length; i++) {
          result.push(splitText[i][0].toUpperCase() + splitText[i].slice(1).toLowerCase());
      }
  } else if (namingConventionElement === 'Pascal Case') {

      for (const splitTextElement of splitText) {
          result.push(splitTextElement[0].toUpperCase() + splitTextElement.slice(1).toLowerCase());
      }
  } else {
      result.push('Error!');
  }
  resultElement.textContent = result.join('');
}