# Prodex

Prodex is a simple product store web app built with plain HTML, CSS, and JavaScript. It fetches product data from the [DummyJSON API](https://dummyjson.com/products) and displays them as cards. Users can add products to a cart and remove them.

## What it does

- Fetches real product data (image, title, description, price) from an external API and renders them as cards on the page.
- Users can click **"Add to Cart"** on any product to add it to the cart section at the top.
- Each cart item has a **delete** button to remove it.
- A **dark/light mode toggle** switches the entire page theme with smooth transitions.

## How it works

The app is two files:

- **`index.html`** — Contains the page structure and all the CSS styling.
- **`script.js`** — Handles fetching products from the API, dynamically creating the product cards, managing the cart (add/remove), and toggling the theme.

No frameworks or build tools are used. Just open `index.html` in a browser to run it.
