const emojiEl = document.querySelector('.emoji')

emojiEl.style.fontSize = '30px'

export function resize(e) {
    let size = parseInt(emojiEl.style.fontSize)

    if (e.key === 'ArrowUp') {
        size += 10
        emojiEl.style.fontSize = size + 'px'
    }

    if (e.key === 'ArrowDown') {
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