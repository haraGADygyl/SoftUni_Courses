function solve() {

  let text = document.getElementById('text').value;
  let namingConv = document.getElementById('naming-convention').value;
  let resultContainer = document.getElementById('result');

  let splitted = text.split(' ');

  let result = [];

  if (namingConv == 'Pascal Case') {

    for (let i = 0; i < splitted.length; i++) {

      result.push(splitted[i][0].toUpperCase() +
        splitted[i].slice(1, splitted[i].length).toLowerCase());
    }

  } else if (namingConv == 'Camel Case') {

    result.push(splitted[0].toLowerCase())

    for (let i = 1; i < splitted.length; i++) {

      result.push(splitted[i][0].toUpperCase() +
        splitted[i].slice(1, splitted[i].length).toLowerCase());
    }
  } else {
    resultContainer.innerText = 'Error!';
    return;
  }

  resultContainer.innerText = result.join('');
}