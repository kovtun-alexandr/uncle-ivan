export class HeroDetail {
    constructor(hero, heroDetailEl, button) {
        this.hero = hero
        this.heroDetailEl = heroDetailEl
        this.button = button
        this.bindEvents()
        this.render()
    }

    bindEvents() {
        this.button.addEventListener('click', () => {
            window.location.href = `index.html`
        })
    }

    title() {
        const titleEl = document.createElement('h1')
        titleEl.classList.add('hero-name', 'title')
        titleEl.textContent = this.hero.name

        return titleEl
    }

    image() {
        const imageWrapEl = document.createElement('div')
        imageWrapEl.classList.add('hero-view')

        const heroImageEl = document.createElement('img')
        heroImageEl.src = this.hero.images.md
        heroImageEl.alt = this.hero.name

        imageWrapEl.appendChild(heroImageEl)

        return imageWrapEl
    }

    height() {
        if (this.hero.appearance.height[1] !== '-') {
            const heightEl = document.createElement('h2')
            heightEl.textContent = 'Height: '

            const heightValueEl = document.createElement('span')
            heightValueEl.textContent = this.hero.appearance.height[1]

            heightEl.appendChild(heightValueEl)

            return heightEl
        }
    }

    weight() {
        if (this.hero.appearance.weight[1] !== '-') {
            const weightEl = document.createElement('h2')
            weightEl.textContent = 'Weight: '

            const weightValueEl = document.createElement('span')
            weightValueEl.textContent = this.hero.appearance.weight[1]

            weightEl.appendChild(weightValueEl)

            return weightEl
        }
    }

    race() {
        if (this.hero.appearance.race !== '-' && this.hero.appearance.race) {
            const raceEl = document.createElement('h2')
            raceEl.textContent = 'Race: '

            const raceValueEl = document.createElement('span')
            raceValueEl.textContent = this.hero.appearance.race

            raceEl.appendChild(raceValueEl)

            return raceEl
        }
    }

    placeOfBirth() {
        if (this.hero.biography.placeOfBirth !== '-') {
            const placeOfBirthEl = document.createElement("h2")
            placeOfBirthEl.textContent = "Place of Birth: "

            const placeOfBirthValueEl = document.createElement("span")
            placeOfBirthValueEl.textContent = this.hero.biography.placeOfBirth

            placeOfBirthEl.appendChild(placeOfBirthValueEl)

            return placeOfBirthEl
        }
    }

    firstAppearance() {
        if (this.hero.biography.firstAppearance !== '-') {
            const firstAppearanceEl = document.createElement('h2');
            firstAppearanceEl.textContent = 'First Appearance: '

            const firstAppearanceValueEl = document.createElement('span')
            firstAppearanceValueEl.textContent = this.hero.biography.firstAppearance

            firstAppearanceEl.appendChild(firstAppearanceValueEl)

            return firstAppearanceEl
        }
    }

    occupation() {
        if (this.hero.work.occupation !== '-') {
            const occupationEl = document.createElement('h2')
            occupationEl.textContent = 'Occupation: '

            const occupationValueEl = document.createElement('span')
            occupationValueEl.textContent = this.hero.work.occupation

            occupationEl.appendChild(occupationValueEl)

            return occupationEl
        }
    }

    groupAffiliation() {
        if (this.hero.connections.groupAffiliation !== '-') {
            const groupAffiliationEl = document.createElement('h2')
            groupAffiliationEl.textContent = 'Group Affiliation: '

            const groupAffiliationValueEl = document.createElement('span')
            groupAffiliationValueEl.textContent = this.hero.connections.groupAffiliation

            groupAffiliationEl.appendChild(groupAffiliationValueEl)

            return groupAffiliationEl
        }
    }

    description() {
        const descriptionEl = document.createElement('div')
        descriptionEl.classList.add('hero-info')

        const elements = [
            this.height(),
            this.weight(),
            this.race(),
            this.placeOfBirth(),
            this.firstAppearance(),
            this.occupation(),
            this.groupAffiliation(),
            this.button
        ]

        elements.forEach(element => {
            if (element) {
                descriptionEl.append(element)
            }
        })

        return descriptionEl
    }

    render() {
        this.heroDetailEl.append(
            this.title(),
            this.image(),
            this.description()
        )
    }
}