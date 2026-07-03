export function createCategoryButtons(categories, container) {
    categories.forEach((category, index) => {
        const button = document.createElement('button')

        if (index === 0) {
            button.classList.add('active')
        }

        button.classList.add('category-button')
        button.dataset.category = category

        switch (category) {
            case "ultrabooks":
                button.textContent = "Ультрабуки"
                break
            case "gaming":
                button.textContent = "Ігрові"
                break
            case "office":
                button.textContent = "Офісні"
                break
            default:
                button.textContent = "Всі"
                break
        }
        container.appendChild(button)
    })
}