
const seccionCartas = document.querySelector(".healthcare__card-section")

let productos = []
productos.push(
  {
    title: "Cepillo de bambú",
    info: "Paquete de 2 unidades hecho 100% de materiales ecológicos.",
    image: "./assets/img/products/toothbrush.jpg",
  },
  {
    title: "Crema para manos",
    info: "Crema para manos Crema hidratante con eucalipto ayuda al cuidado de la piel.",
    image: "./assets/img/products/hand-cream.jpeg",
  },
  {
    title: "Serum hidratante",
    info: "Sérum hecho a base de extractos naturales y ácido hialurónico.",
    image: "./assets/img/products/serum.jpg",
  },
  {
    title: "Kit de viaje",
    info: "Incluye peine y cepillo de bambú, jabón orgánico de eucalipto y shampoo tamaño de viaje.",
    image: "./assets/img/products/organic-kit.jpg",
  },
  {
    title: "Set de jabones",
    info: "Paquete de 2 unidades jabón de carbón activado con coco.",
    image: "./assets/img/products/organic-soap.jpg",
  },
  {
    title: "kit de skincare",
    info: "Incluye 2 rodillos y una gua sha.",
    image: "./assets/img/products/guasha-kit.jpg",
  },
)

function renderProducts (arr) {
  for (product of arr) {
    const htmlTargeta = 
    `<div class="healtcare__product-card">
      <div class="product-card__icon-container">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#3F3F46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="product-card__product-image">
        <img src="${product.image}" alt=${product.title}>
      </div>    
      <div class="product-card__info-container">
        <h3 class="product-card__title">${product.title}</h3>
        <p class="product-card__info-content">${product.info}</p>
      </div>
    </div>`
  
    seccionCartas.innerHTML += htmlTargeta
  }   
}

renderProducts(productos)
