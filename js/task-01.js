const getInfo = () => {

      const categories = document.querySelectorAll('#categories ul');
      const allItems = document.querySelectorAll('.item');

            console.log('Number of categories:', categories.length);

      allItems.forEach(item => {
            const categoriesName = item.querySelector('h2');
            const categoriesCount = item.querySelectorAll('ul li');
            console.log('Category:', categoriesName.textContent);
            console.log('Elements:', categoriesCount.length);
});
}

getInfo();