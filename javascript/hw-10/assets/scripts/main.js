import { resize } from './baloon.js'
import { trailElements, createTrail, bgColor } from './trail.js'
import { tabs } from './tabs.js'

// =============== BALOON ====================

window.addEventListener('keydown', resize)

// =============== TRAIL ====================

createTrail(trailElements, 15)

document.addEventListener('click', bgColor)

// =============== TABS ====================

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