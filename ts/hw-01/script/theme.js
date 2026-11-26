"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.themeBtn = void 0;
exports.toggleTheme = toggleTheme;
const btn = document.querySelector('.toggle-theme');
if (!btn)
    throw new Error('Theme toggle button not found');
exports.themeBtn = btn;
function toggleTheme() {
    const iconEl = exports.themeBtn.querySelector('img');
    if (!iconEl)
        return;
    const isDark = document.body.classList.toggle('dark-theme');
    iconEl.src = isDark
        ? './images/dark_icon.svg'
        : './images/light_icon.svg';
}
