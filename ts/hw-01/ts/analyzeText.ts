export const formEl = document.querySelector<HTMLFormElement>('.analyze-form')
const lettersEl = document.querySelector<HTMLDivElement>('.letter-density')
export const showMoreBtn = document.createElement('button')

showMoreBtn.classList.add('show-more')
showMoreBtn.textContent = 'See more'

const textEl = document.querySelector<HTMLTextAreaElement>('#text')

if (textEl?.value === '' && lettersEl) {
    lettersEl.append(renderEmpty())
}

type LetterEntry = [string, number]
type LettersFrequency = Record<string, number>

export function analyzeText(e: MouseEvent): void {
    e.preventDefault()

    if (!textEl || !formEl || !lettersEl) return

    const text = textEl.value

    const textForCharacters = excludeSpaces(formEl, text)

    characterLimitChecked(formEl, textForCharacters)

    const wordsCount = countWords(text)
    const sentencesCount = countSentences(text)

    renderCountById('word-count', wordsCount)
    renderCountById('sentence-count', sentencesCount)
    renderReadingTime(wordsCount)
    updateLettersDisplay(lettersEl, text)
}

function renderCountById(id: string, count: number): void {
    const el = document.querySelector<HTMLElement>(`#${id}`)

    if (el) el.textContent = count.toString().padStart(2, '0')
}

function characterLimitChecked(
    container: HTMLFormElement,
    text: string
): void {
    const checked = (container.elements.namedItem('character-limit') as HTMLInputElement).checked
    const blockEl = container.children[0] as HTMLElement

    if (checked) {
        const characterLimit = getLimitValue()

        if (text.length > characterLimit) {
            blockEl.classList.add('error')

            let errorEl = blockEl.querySelector('p')

            if (!errorEl) {
                errorEl = document.createElement('p')

                blockEl.append(errorEl)
            }

            errorEl.textContent = `Limit reached! Your text exceeds ${characterLimit} characters.`
        } else {
            removeError(blockEl)
        }
    } else {
        const inputElement = document.querySelector<HTMLInputElement>('#character-count')

        if (inputElement) {
            inputElement.setAttribute("hidden", "")
        }

        removeError(blockEl)
    }
}

function renderLettersDensity(
    container: HTMLElement,
    text: string
): void {
    const letters = getLettersFrequency(text)
    const sortedLetters = sortLettersByFrequency(letters);
    const lettersList = renderLettersList(container, sortedLetters, text)

    if (lettersList.children.length > 4) {
        showMoreBtn.style.display = 'flex'
    } else {
        showMoreBtn.style.display = "none";
        showMoreBtn.textContent = 'See more'
        showMoreBtn.classList.remove('active')
    }

    container.append(lettersList, showMoreBtn)
}

function countWords(text: string): number {
    const words = text.match(/\p{L}+/gu) || []
    return words.length
}

function countSentences(text: string): number {
    const sentences = text.match(/\p{L}+[.!?]+/gu) || []
    return sentences.length
}

function getLettersFrequency(text: string): LettersFrequency {
    return [...text.toUpperCase()]
        .filter(char => /\p{L}/u.test(char))
        .reduce<LettersFrequency>((acc, char) => {
            acc[char] = (acc[char] || 0) + 1
            return acc
        }, {})
}

function renderReadingTime(wordsCount: number): void {
    const readingTimeEl = document.querySelector<HTMLElement>('.time')
    const readingTime = calculateReadingTime(wordsCount)

    if (!readingTimeEl) return

    if (!wordsCount) {
        readingTimeEl.textContent = '0 minutes'
    } else if (readingTime < 1) {
        readingTimeEl.textContent = '< 1 minute'
    } else {
        const minutes = Math.ceil(readingTime)
        readingTimeEl.textContent = minutes === 1
            ? '1 minute'
            : `${minutes} minutes`
    }
}

function excludeSpaces(
    container: HTMLFormElement,
    text: string
): string {
    const checked = (container.elements.namedItem('exclude-spaces') as HTMLInputElement).checked
    const labelEl = document.querySelector('.result-item')?.lastElementChild

    if (checked) text = text.replace(/\s/g, '')

    if (labelEl) {
        labelEl.textContent = checked
            ? 'Total Characters (no space)'
            : 'Total Characters'
    }

    renderCountById('total-characters', text.length)

    return text
}

function getLimitValue(): number {
    const inputElement = document.querySelector<HTMLInputElement>('#character-count')

    if (inputElement) {
        inputElement.removeAttribute("hidden")

        return Number(inputElement.value)
    }

    return 0
}

function calculateReadingTime(wordsCount: number): number {
    return wordsCount / 200
}

function sortLettersByFrequency(object: LettersFrequency): LetterEntry[] {
    return Object.entries(object).sort((a, b) => b[1] - a[1]);
}

function renderLettersList(
    container: HTMLElement,
    object: LetterEntry[],
    text: string
): HTMLElement {
    let lettersListEl = container.querySelector<HTMLUListElement>('.letter-list')

    if (!lettersListEl) {
        lettersListEl = document.createElement('ul')

        lettersListEl.classList.add('letter-list')

        container.append(lettersListEl)
    }

    lettersListEl.innerHTML = ''

    const totalLetters = (text.match(/\p{L}/gu) || []).length

    for (const [letter, count] of object) {
        const letterEl = document.createElement('li')
        const letterElSpan = document.createElement('span')
        const countingEl = document.createElement('span')
        const percentage = totalLetters > 0 ? (count / totalLetters) * 100 : 0

        letterElSpan.textContent = letter
        countingEl.textContent = `${count} (${percentage.toFixed(2)}%)`

        letterEl.append(letterElSpan, renderProgress(percentage), countingEl)
        lettersListEl.append(letterEl)
    }

    return lettersListEl
}

function updateLettersDisplay(
    container: HTMLElement,
    text: string
): void {
    const emptyEl = container.querySelector<HTMLElement>('.empty');
    if (text === '') {
        if (!emptyEl) {
            container.append(renderEmpty());
        }

        const lettersListEl = container.querySelector<HTMLElement>('.letter-list');

        if (lettersListEl) {
            lettersListEl.remove();
        }
    } else {
        emptyEl?.remove()
        renderLettersDensity(container, text)
    }
}

function renderEmpty(): HTMLElement {
    const blockEl = document.createElement('div')

    blockEl.classList.add('empty')
    blockEl.textContent = 'No characters found. Start typing to see letter density.'

    return blockEl
}

function renderProgress(value: number): HTMLElement {
    const progressEl = document.createElement('div')
    const valueEl = document.createElement('div')

    progressEl.classList.add('progress')
    valueEl.classList.add('value')
    valueEl.style.width = `${value}%`

    progressEl.appendChild(valueEl)

    return progressEl
}

export function expandList(): void {
    const lettersList = document.querySelector<HTMLElement>('.letter-list')

    if (!lettersList) return

    lettersList.classList.toggle('show-all')

    if (lettersList.classList.contains('show-all')) {
        showMoreBtn.textContent = 'See less'
        showMoreBtn.classList.add('active')
    } else {
        showMoreBtn.textContent = 'See more'
        showMoreBtn.classList.remove('active')
    }
}

function removeError(parentEl: HTMLElement): void {
    parentEl.classList.remove('error')

    const errorEl = parentEl.querySelector('p')

    if (errorEl) {
        errorEl.remove()
    }
}