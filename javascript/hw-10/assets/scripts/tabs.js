const paretEl = document.querySelector('.tabs')
export const tabs = document.querySelectorAll('.tab')
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

export function asTabs(nodeList) {
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