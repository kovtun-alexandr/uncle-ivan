import { HeroCard } from "./HeroCard.js"

export class HeroList {
    constructor(heroes, loadMoreBtn) {
        this.heroes = heroes
        this.loadMoreBtn = loadMoreBtn
        this.container = document.createElement('div')
        this.container.classList.add('hero-container')
        this.heroList = document.createElement('div')
        this.heroList.classList.add('hero-list')
        this.heroCount = 12
        this.currentIndex = 0
        this.addList(this.currentIndex, this.heroCount)
        this.bindEvents()
        this.render()
    }

    bindEvents() {
        this.loadMoreBtn.addEventListener('click', () => {
            this.addList(this.currentIndex, this.heroCount)
        })

        this.heroList.addEventListener('click', (event) => {
            const card = event.target.closest('.hero-card')

            if (!card) return

            const { id } = card.dataset

            window.location.href = `hero.html?id=${id}`
        })
    }

    hideLoadMoreBtn() {
        this.loadMoreBtn.style.display = 'none'
    }

    addList(index, count) {
        if (index + count >= this.heroes.length) {
            this.hideLoadMoreBtn()
        }

        this.currentIndex += this.heroCount

        this.heroes.slice(index, index + count).forEach((hero) => {
            const card = new HeroCard(hero)
            this.heroList.appendChild(card.cardEl)
        })
    }

    update(heroes) {
        this.heroes = heroes
        this.currentIndex = 0

        this.heroList.innerHTML = ''

        this.addList(0, this.heroCount)

        this.loadMoreBtn.style.display =
            heroes.length > this.heroCount ? 'block' : 'none'
    }

    render() {
        this.container.append(
            this.heroList,
            this.loadMoreBtn
        )
    }
}