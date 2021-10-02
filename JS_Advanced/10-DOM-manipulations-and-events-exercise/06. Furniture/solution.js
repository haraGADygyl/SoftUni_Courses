function solve() {

  let table = document.querySelector('table.table tbody');

  let [input, output] = Array.from(document.querySelectorAll('textarea'));
  let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate(event) {
    let data = JSON.parse(input.value);

    for (item of data) {
      let row = document.createElement('tr');

      let imgCell = document.createElement('td');
      let nameCell = document.createElement('td');
      let priceCell = document.createElement('td');
      let decFactorCell = document.createElement('td');
      let checkCell = document.createElement('td');

      let img = document.createElement('img');
      img.src = item.img;
      imgCell.appendChild(img);

      let nameP = document.createElement('p');
      nameP.textContent = item.name;
      nameCell.appendChild(nameP);

      let priceP = document.createElement('p');
      priceP.textContent = item.price;
      priceCell.appendChild(priceP);

      let decP = document.createElement('p');
      decP.textContent = item.decFactor;
      decFactorCell.appendChild(decP);

      let check = document.createElement('input');
      check.type = 'checkbox';
      checkCell.appendChild(check);

      row.appendChild(imgCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(decFactorCell);
      row.appendChild(checkCell);

      table.appendChild(row);
    }
  }

  function buy(event) {
    let furniture = Array
      .from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(b => b.parentElement.parentElement)
      .map(r => ({
        name: r.children[1].textContent,
        price: Number(r.children[2].textContent),
        decFactor: Number(r.children[3].textContent)
      }));

    let names = [];
    let total = 0;
    let decFactor = 0;

    for (let item of furniture) {
      names.push(item.name);
      total += item.price;
      decFactor += item.decFactor;
    }

    let result = `Bought furniture: ${names.join(', ')}
Total price: ${total.toFixed(2)}
Average decoration factor: ${decFactor / furniture.length}`;

    output.value = result;
  }
}