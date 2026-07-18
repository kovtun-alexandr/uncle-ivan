export class HeroCard {
    constructor(hero) {
        this.hero = hero
        this.cardEl = document.createElement('div')
        this.cardEl.classList.add('hero-card')
        this.render()
    }

    image() {
        const imageEl = document.createElement('img');

        imageEl.src = this.hero.images.md
        imageEl.alt = this.hero.name;

        return imageEl
    }

    title() {
        const nameEl = document.createElement('h2')

        nameEl.classList.add('title', 'glass')
        nameEl.textContent = this.hero.name

        return nameEl
    }

    realName() {
        if (this.hero.biography.fullName) {
            const realNameEl = document.createElement('h3')
            const realNameValueEl = document.createElement('span')

            realNameEl.textContent = 'Real Name: '
            realNameValueEl.textContent = this.hero.biography.fullName

            realNameEl.append(realNameValueEl)

            return realNameEl
        }
    }

    publisher() {
        if (this.hero.biography.publisher) {
            const publisherEl = document.createElement('h3')
            const publisherValueEl = document.createElement('span')

            publisherEl.textContent = 'Publisher: '
            publisherValueEl.textContent = this.hero.biography.publisher

            publisherEl.append(publisherValueEl)

            return publisherEl
        }
    }

    alignment() {
        if (this.hero.biography.alignment) {
            const alignmentEl = document.createElement('h3')
            const alignmentValueEl = document.createElement('span')

            alignmentEl.textContent = 'Alignment: '
            alignmentValueEl.textContent = this.hero.biography.alignment.toUpperCase()

            alignmentEl.append(alignmentValueEl)

            return alignmentEl
        }
    }

    powerstats() {
        const powerstatsWrapEl = document.createDocumentFragment()
        const powerstatsTitleEl = document.createElement('h3')
        const powerstatsListEl = document.createElement('ul')

        powerstatsTitleEl.textContent = 'Powerstats:'

        for (const [stat, value] of Object.entries(this.hero.powerstats)) {
            const statEl = document.createElement('li')

            statEl.textContent = `${stat}: ${value}`

            powerstatsListEl.appendChild(statEl)
        }

        powerstatsWrapEl.append(powerstatsTitleEl, powerstatsListEl)

        return powerstatsWrapEl
    }

    info() {
        const infoEl = document.createElement('div')

        infoEl.classList.add('hero-info', 'glass')

        const infoList = [
            this.realName(),
            this.publisher(),
            this.alignment(),
            this.powerstats()
        ]

        infoList.forEach(element => {
            if (element) {
                infoEl.append(element)
            }
        })

        return infoEl
    }

    render() {
        this.cardEl.dataset.id = this.hero.id;
        this.cardEl.append(
            this.image(),
            this.title(),
            this.info()
        );
    }
}