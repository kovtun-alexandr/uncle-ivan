export const themeBtm = document.querySelector('.toggle-theme')

export function toggleTheme() {
    const bodyEl = document.querySelector('body')
    const iconEl = themeBtm.querySelector('img')

    const isDark = bodyEl.classList.toggle('dark-theme')

    iconEl.src = isDark
        ? './assets/images/dark_icon.svg'
        : './assets/images/light_icon.svg'
}