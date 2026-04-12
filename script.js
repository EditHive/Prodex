function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const toggle = document.querySelector('.theme-toggle');
    if (body.classList.contains('dark-theme')) {
        toggle.textContent = ' Light Mode';
    } else {
        toggle.textContent = ' Dark Mode';
    }
}

let cartItems = [];
let allProducts = [];
let con = null;
let cart = null;

function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchValue = searchInput.value.toLowerCase();
    

    const filteredProducts = allProducts.filter(function(product) {
        const titleLower = product.title.toLowerCase();
        const descLower = product.description.toLowerCase();
        return titleLower.includes(searchValue) || descLower.includes(searchValue);
    });
    
    displayProducts(filteredProducts);
}

function displayProducts(products) {
    if (!con) return;
    con.innerHTML = '';
    

    const cards = products.map(function(res) {
        const card = document.createElement('div');
        card.className = "card";

        const img = document.createElement('img');
        if (res.thumbnail) {
            img.src = res.thumbnail;
        } else {
            img.src = res.image;
        }
        img.alt = res.title;

        const title = document.createElement('h3');
        title.textContent = res.title;

        const heading1 = document.createElement('p');
        heading1.innerText = res.description;

        const price = document.createElement('p');
        price.innerText = "$ " + res.price;

        const butt = document.createElement('button');
        butt.innerText = "Add to Cart";
        
        butt.onclick = function() {
            srijal(res);
        };

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(heading1);
        card.appendChild(price);
        card.appendChild(butt);
        
        return card;
    });
    

    cards.forEach(function(card) {
        con.appendChild(card);
    });
}

function srijal(res) {
    if (!cart) return;
    const emptyMsg = document.getElementById('cart-empty');
    if (emptyMsg) {
        emptyMsg.style.display = 'none';
    }

    const cartitem = document.createElement('div');
    cartitem.className = 'cart-item';

    const info = document.createElement('div');
    info.className = 'cart-item-info';

    const title = document.createElement('p');
    title.innerText = res.title;

    const price = document.createElement('span');
    price.className = 'item-price';
    price.innerText = '$ ' + res.price;

    info.appendChild(title);
    info.appendChild(price);

    const delbtn = document.createElement('button');
    delbtn.innerText = "Remove";
    delbtn.className = 'delete-btn';

    cartitem.appendChild(info);
    cartitem.appendChild(delbtn);
    cart.appendChild(cartitem);

    delbtn.onclick = function() {
        cartitem.remove();
        const remainingItems = cart.querySelectorAll('.cart-item');
        if (remainingItems.length === 0 && emptyMsg) {
            emptyMsg.style.display = 'block';
        }
    };
}


document.addEventListener('DOMContentLoaded', function() {
    con = document.getElementById('container');
    cart = document.getElementById('cart');
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.onkeyup = searchProducts;
    }
    
    fetch('https://dummyjson.com/products')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            allProducts = data.products;
            displayProducts(allProducts);
        })
        .catch(function(error) {
            console.log('Error:', error);
        });
});
