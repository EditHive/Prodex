function toggleTheme() {
    document.body.classList.toggle('dark-theme')
    const toggle = document.querySelector('.theme-toggle')
    if (document.body.classList.contains('dark-theme')) {
        toggle.textContent = '☀️ Light Mode'
    } else {
        toggle.textContent = '🌙 Dark Mode'
    }
}

let con = document.getElementById('container')
let cart = document.getElementById('cart')
let cartItems = []

fetch('https://dummyjson.com/products')
    .then(response => {
        console.log('Response:', response)
        return response.json()
    })
    .then(data => {
        console.log('Products:', data.products)
        data.products.forEach((res) => {

            let card = document.createElement('div')
            const img = document.createElement('img')
            img.src = res.thumbnail || res.image
            img.alt = res.title
            const title = document.createElement('h3')
            title.textContent = res.title
            let heading1 = document.createElement('p')
            heading1.innerText = res.description
            let price = document.createElement('p')
            price.innerText = "$ " + res.price
            let butt = document.createElement('button')
            butt.innerText = "Add to Cart"
            butt.addEventListener('click', () => {
                srijal(res)
            })

            card.appendChild(img)
            card.appendChild(title)
            card.appendChild(heading1)
            card.appendChild(price)
            card.appendChild(butt)
            card.classList.add("card")
            con.appendChild(card)

        })
    }).catch((error) => {
        console.error('Error:', error)
    })

let srijal = (res) => {
    const emptyMsg = document.getElementById('cart-empty')
    if (emptyMsg) emptyMsg.style.display = 'none'

    const cartitem = document.createElement('div')
    cartitem.classList.add('cart-item')

    const info = document.createElement('div')
    info.classList.add('cart-item-info')

    const title = document.createElement('p')
    title.innerText = res.title

    const price = document.createElement('span')
    price.classList.add('item-price')
    price.innerText = '$ ' + res.price

    info.appendChild(title)
    info.appendChild(price)

    const delbtn = document.createElement('button')
    delbtn.innerText = "Remove"
    delbtn.classList.add('delete-btn')

    cartitem.appendChild(info)
    cartitem.appendChild(delbtn)
    cart.appendChild(cartitem)

    delbtn.addEventListener('click', () => {
        cartitem.remove()
        const remaining = cart.querySelectorAll('.cart-item')
        if (remaining.length === 0 && emptyMsg) {
            emptyMsg.style.display = 'block'
        }
    })
}
