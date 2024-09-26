const getProducts = () => {
  return fetch('https://fakestoreapi.com/products').then(res => res.json());
};

const createCardClone = (template, { image, price, title, description }) => {
  const clone = template.cloneNode(true);
  clone.querySelector('.card-image').src = image;
  clone.querySelector('.card-title').textContent = title;
  clone.querySelector('.card-description').textContent = description;
  clone.querySelector('.card-price').textContent = price + '€';
  return clone;
};

document.addEventListener('DOMContentLoaded', async () => {
  const template = document.getElementById('card-template').content;
  const container = document.getElementById('card-container');

  try {
    const products = await getProducts();
    products.forEach(product => {
      const clone = createCardClone(template, product);
      container.appendChild(clone);
    });
  } catch (error) {
    window.location.href = '/fallback.html';
  }
});
