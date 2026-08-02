// =============== BALOON ====================

const emojiEl = document.querySelector('.emoji')

emojiEl.style.fontSize = '30px'

window.addEventListener('keydown', resize)

function resize(e) {
    let size = parseInt(emojiEl.style.fontSize)

    if (event.key === 'ArrowUp') {
        size += 10
        emojiEl.style.fontSize = size + 'px'
    }

    if (event.key === 'ArrowDown') {
        size -= 10
        emojiEl.style.fontSize = size + 'px'
    }

    if (size > 130 || size < 30) {
        boom()
    }
}

function boom() {
    emojiEl.textContent = '💥'
    window.removeEventListener('keydown', resize)
}

// =============== TRAIL ====================

const trailElements = []
const amount = 15
const colors = [
    "#14B8A6",
    "#22C55E",
    "#FACC15",
    "#EF4444",
    "#3B82F6",
    "#6B7280"
]

const randomNum = () => Math.floor(Math.random() * colors.length)

function createTrail(trails, amount) {
    for (let i = 0; i < amount; i++) {
        const div = document.createElement("div")

        div.className = "trail"
        div.style.backgroundColor = colors[randomNum()]

        document.body.append(div)

        trails.push(div)
    }
}

function bgColor() {
    const color = randomNum()
    trailElements.forEach(dot =>
        dot.style.backgroundColor = colors[color]
    )
}

let current = 0

document.addEventListener("mousemove", (event) => {
    const dot = trailElements[current]

    dot.style.left = event.clientX + "px"
    dot.style.top = event.clientY + "px"

    current = (current + 1) % trailElements.length
})

// createTrail(trailElements, amount)

document.addEventListener('click', bgColor)

// =============== TABS ====================

const paretEl = document.querySelector('.tabs')
const tabs = document.querySelectorAll('.tab')
const buttonsBlockEl = document.createElement('div')

buttonsBlockEl.classList.add('tabs-btn')
paretEl.prepend(buttonsBlockEl)

function createButton(data, className) {
    const button = document.createElement('button')
    if (className) {
        button.classList.add(className)
    }
    button.classList.add('btn')
    button.textContent = data.toUpperCase()
    button.dataset.tabname = data.toLowerCase()

    return button
}

function asTabs(nodeList) {
    nodeList.forEach((tab, index) => {
        if (index === 0) {
            const button = createButton(tab.dataset.tabname, 'active')
            buttonsBlockEl.append(button)
        } else {
            const button = createButton(tab.dataset.tabname)
            buttonsBlockEl.append(button)
        }
    })
}

asTabs(tabs)

const buttons = document.querySelectorAll('.btn')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const tabName = button.dataset.tabname;

        buttons.forEach(btn => btn.classList.remove('active'))

        button.classList.add('active')

        tabs.forEach(tab => {
            tab.classList.remove('active')
            if (tab.dataset.tabname === tabName) {
                tab.classList.add('active')
            }
            return tab
        })
    })
})