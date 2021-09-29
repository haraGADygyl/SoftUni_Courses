function search() {

   let towns = Array.from(document.querySelectorAll('ul li'));
   let text = document.getElementById('searchText').value;
   let countMatches = 0;


   towns.forEach((el) => {

      if (el.textContent.includes(text)) {

         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
         countMatches++;

      } else {
         el.style.fontWeight = 'normal';
         el.style.textDecoration = '';
      }
   })

   document.getElementById('result').textContent = `${countMatches} matches found`;

}
