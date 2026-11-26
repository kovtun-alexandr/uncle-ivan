const btn = document.querySelector<HTMLButtonElement>('.toggle-theme')

if (!btn) throw new Error('Theme toggle button not found')

export const themeBtn = btn

export function toggleTheme(): void {
    const iconEl = themeBtn.querySelector<HTMLImageElement>('img')

    if (!iconEl) return

    const isDark = document.body.classList.toggle('dark-theme')

    iconEl.src = isDark
        ? './images/dark_icon.svg'
        : './images/light_icon.svg'
}