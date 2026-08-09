export const trailElements = []
const colors = [
    "#14B8A6",
    "#22C55E",
    "#FACC15",
    "#EF4444",
    "#3B82F6",
    "#6B7280"
]

const randomNum = () => Math.floor(Math.random() * colors.length)

export function createTrail(trails, amount) {
    for (let i = 0; i < amount; i++) {
        const div = document.createElement("div")

        div.className = "trail"
        div.style.backgroundColor = colors[randomNum()]

        document.body.append(div)

        trails.push(div)
    }
}

export function bgColor() {
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
