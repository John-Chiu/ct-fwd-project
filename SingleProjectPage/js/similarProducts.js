import products from "../../js/products.js";


const similarProductsListJSON = {
  '1': [2, 3, 4],
  '2': [1, 3, 4],
  '3': [1, 2, 4],
  '4': [1, 2, 3],
  '5': [14, 11, 10],
  '6': [14, 11, 13],
  '7': [9,5,8],
  '8': [9,5,10],
  '9': [14,5,10],
  '10': [14,11,13],
  '11': [5,6,13],
  '12': [7,8,9],
  '13': [14,11,6],
  '14': [10,11,13],
};


document.addEventListener('DOMContentLoaded', () => {
  console.log('similarProducts script loaded');
  const cardGroup = document.getElementsByClassName('card-group')[0];

  // get current product id 
  const productId = document.getElementsByClassName('addToCartBtn')[0].dataset.id;
  // get similarProductsList
  const similarProductsIdList = similarProductsListJSON[productId];
  // for each similarProduct, generate card and add to DOM
  const similarProductsList = similarProductsIdList.map(id => {
    return products.find(p => p.id == id);
  });
  const productCards = similarProductsList.map(product => generateProductCard(product));

  productCards.forEach(card => {
    cardGroup.appendChild(card);
  });
});

function generateProductCard(product) {
  // Create card element
  const card = document.createElement('div');
  card.className = 'card';

  // Create anchor element
  const anchor = document.createElement('a');
  anchor.href = product.filePath;

  // Create image element
  const img = document.createElement('img');
  img.src = product.imagePath;
  img.alt = product.chineseName;
  img.className = 'card-image';

  // Create content div
  const content = document.createElement('div');
  content.className = 'card-content';

  // Create title element
  const title = document.createElement('h3');
  title.className = 'card-title';
  title.textContent = product.chineseName;

  // Create text element
  const text = document.createElement('p');
  text.className = 'card-text';
  text.textContent = product.desc;

  // Create price element
  const price = document.createElement('h3');
  price.className = 'card-price';
  price.textContent = `$ ${product.price}`;

  // Append elements to content
  content.appendChild(title);
  content.appendChild(text);
  content.appendChild(price);

  // Append image and content to anchor
  anchor.appendChild(img);
  anchor.appendChild(content);

  // Append anchor to card
  card.appendChild(anchor);

  return card;
}
