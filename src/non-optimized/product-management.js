import { renderProducts } from './rendering';

let products = [
  {
    id: new Date('1/1/1970').toString(),
    title: 'Anna Karenina',
    price: 12.99,
  },
  {
    id: new Date('1/2/1970').toString(),
    title: 'Candle',
    price: 20.99,
  },
  {
    id: new Date('1/3/1970').toString(),
    title: 'Patek Philippe Watch',
    price: 50000,
  },
  {
    id: new Date('1/4/1970').toString(),
    title: 'Wine Graham Ne Oublie 1882 ',
    price: 4600,
  },
  {
    id: new Date('1/5/1970').toString(),
    title: 'Brunello Cucinelli Winter Jacket',
    price: 2500,
  },
];

export function initProducts() {
  renderProducts(products, deleteProduct);
}

export function deleteProduct(prodId) {
  const updatedProducts = [];
  for (const prod of products) {
    if (prod.id !== prodId) {
      updatedProducts.push(prod);
    }
  }
  products = updatedProducts;
  renderProducts(products, deleteProduct);
}

export function addProduct(event) {
  event.preventDefault();
  const titleEl = document.querySelector('#new-product #title');
  const priceEl = document.querySelector('#new-product #price');

  const title = titleEl.value;
  const price = priceEl.value;

  if (title.trim().length === 0 || price.trim().length === 0 || +price < 0) {
    alert('Please enter some valid input values for title and price.');
    return;
  }

  const newProduct = {
    id: new Date().toString(),
    title: title,
    price: price,
  };

  products.unshift(newProduct);
  renderProducts(products, deleteProduct);
}
