const btn = document.querySelector('.toggle-theme');
if (!btn)
    throw new Error('Theme toggle button not found');
export const themeBtn = btn;
export function toggleTheme() {
    const iconEl = themeBtn.querySelector('img');
    if (!iconEl)
        return;
    const isDark = document.body.classList.toggle('dark-theme');
    iconEl.src = isDark
        ? './images/dark_icon.svg'
        : './images/light_icon.svg';
}
