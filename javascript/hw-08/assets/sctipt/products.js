export class Products {
    constructor(products, productsContainer, filterButtons) {
        this.products = products
        this.filteredProducts = products
        this.productsContainer = productsContainer
        this.filterButtons = filterButtons
        this.productsList = document.createElement('div')
        this.render()
        this.bindEvents()
    }

    bindEvents() {
        this.filterButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                this.filterButtons.forEach((btn) => btn.classList.remove('active'))
                button.classList.add('active')
                this.filterByCategory(event.target.dataset.category)
            })
        })

        this.productsList.addEventListener('mouseover', (event) => {
            const card = event.target.closest('.product-card')

            if (!card) return

            card.title = `Ціна: ${card.dataset.price} UAH`
        })
    }

    filterByCategory(category) {
        if (category === "all") {
            this.filteredProducts = this.products
        } else {
            this.filteredProducts = this.products.filter((product) => product.category === category)
        }
        this.render()
    }

    render() {
        this.productsList.innerHTML = ''
        this.productsList.classList.add('products-list')

        this.filteredProducts.forEach((product) => {
            const productCard = document.createElement('div')
            productCard.classList.add('product-card')

            productCard.dataset.category = product.category
            productCard.dataset.price = product.price

            const productImage = document.createElement('img')
            productImage.src = product.img
            productImage.alt = `${product.brand} ${product.model}`

            const productTitle = document.createElement('h3')
            productTitle.textContent = `${product.brand} ${product.model}`

            productCard.append(productImage, productTitle)
            this.productsList.appendChild(productCard)
        });

        this.productsContainer.appendChild(this.productsList)
    }
}