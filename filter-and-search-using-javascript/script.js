let products = {
  data: [
    {
      productName: 'Regular White T-Shirt',
      category: 'Top-wear',
      price: '30',
      image: './image/White T-Shirt.jpg',
    },
    {
      productName: 'Beige Long Skirt',
      category: 'Bottom-wear',
      price: '49',
      image: './image/long-skirt.jpg',
    },
    {
      productName: 'Sporty SmartWatch',
      category: 'Watch',
      price: '99',
      image: './image/SmartWatch.jpg',
    },
    {
      productName: 'Basic Knitted Top',
      category: 'Top-wear',
      price: '29',
      image: './image/knitted-top.jpg',
    },
    {
      productName: 'Black Leather Jacket',
      category: 'Jacket',
      price: '129',
      image: './image/Black Leather Jacket.jpg',
    },
    {
      productName: 'Stylish Pink Trousers',
      category: 'Bottom-wear',
      price: '89',
      image: './image/Stylish Pink Trousers.jpg',
    },
    {
      productName: "Brown Men's Jacket",
      category: 'Jacket',
      price: '189',
      image: "./image/Brown Men's Jacket.jpg",
    },
    {
      productName: 'Comfy Gray Pants',
      category: 'Bottom-wear',
      price: '49',
      image: './image/Comfy Gray Pants.jpg',
    },
  ],
};

for (let i of products.data) {
  // Create Card
  let card = document.createElement('div');
  //Card should have category
  card.classList.add('card', i.category, 'hidden');
	console.log(card)
  //image div
  let imgContainer = document.createElement('div');
  imgContainer.classList.add('image-container');
  //img tag
  let image = document.createElement('img');
  image.setAttribute('src', i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  // container
  let container = document.createElement('div');
  container.classList.add('container');
  // product name
  let name = document.createElement('h5');
  name.classList.add('product-name');
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement('h6');
  price.innerText = '$' + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById('products').appendChild(card);
}

//parameter passed from button (Parameter same as category)

function filterProduct(value) {
  //Button class code
  const buttons = document.querySelectorAll('.button-value');
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });

  //select all cards
  let elements = document.querySelectorAll('.card');
  //loop through all cards

  elements.forEach((element) => {
    // display all cards on 'all' button click
    if (value == 'all') {
      element.classList.remove('hidden');
    } else {
      // Check if element has category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove('hidden');
      } else {
        // hidden other elements
        element.classList.add('hidden');
      }
    }
  });
}

//Search button click
document.querySelector('#search').addEventListener('click', () => {
  // initializations
  let searchInputs = document.getElementById('search-input').value;
  let elements = document.querySelectorAll('.product-name');
  let cards = document.querySelectorAll('.card');


  // loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInputs.toUpperCase())) {
      // display matching card
      cards[index].classList.remove('hidden');
    } else {
      // hide others
      cards[index].classList.add('hidden');
    }
  });
});

//Initially display all products

window.onload = () => {
  filterProduct('all');
};
