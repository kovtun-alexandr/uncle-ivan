export const formEl = document.querySelector('.analyze-form')
const lettersEl = document.querySelector('.letter-density')
export const showMoreBtn = document.createElement('button')

showMoreBtn.classList.add('show-more')
showMoreBtn.textContent = 'See more'

if (formEl.elements.text.value === '') {
    lettersEl.append(renderEmpty())
}

export function analyzeText(e) {
    e.preventDefault()

    const textInput = formEl.elements.text
    let text = textInput.value
    const textareaEl = document.getElementById('text')

    const countLimit = characterLimitChecked(
        formEl.elements['character-limit'].checked,
        text,
        textareaEl
    )

    if (countLimit) {
        text = text.slice(0, countLimit)
    }

    excludeSpaces(
        formEl.elements['exclude-spaces'].checked,
        text
    )

    const wordsCount = countWords(text)
    const sentencesCount = countSentences(text)

    renderWordCount(wordsCount)
    renderSentencesCount(sentencesCount)
    renderReadingTime(wordsCount)
    updateLettersDisplay(text)
}

function renderCharactersCount(text) {
    const characterEl = document.getElementById('total-characters')

    renderCount(text.length, characterEl)
}

function renderWordCount(wordsCount) {
    const wordEl = document.getElementById('word-count')

    renderCount(wordsCount, wordEl)
}

function renderSentencesCount(sentencesCount) {
    const sentenceEl = document.getElementById('sentence-count')

    renderCount(sentencesCount, sentenceEl)
}

function characterLimitChecked(checked, text, textarea) {
    const parentEl = textarea.parentElement
    let characterLimit
    if (checked) {
        characterLimit = getLimitValue(checked)

        if (text.length >= characterLimit) {
            parentEl.classList.add('error')

            if (!parentEl.lastElementChild?.matches('p')) {
                const errorEl = document.createElement('p')

                errorEl.textContent = `Limit reached! Your text exceeds ${characterLimit} characters.`
                parentEl.append(errorEl)
            }
        } else {
            removeError(parentEl)
        }

        text = text.slice(0, characterLimit)

    } else {
        const inputElement = document.getElementById('character-count')

        inputElement.setAttribute("hidden", "")

        removeError(parentEl)
    }

    return characterLimit
}

function renderLettersDensity(text) {
    const emtyEl = document.querySelector('.empty')

    if (emtyEl) {
        lettersEl.removeChild(emtyEl)
    }

    const letters = getLettersFrequency(text)
    const sortedLetters = sortLettersByFrequency(letters);
    const lettersList = renderLettersList(sortedLetters, text)

    if (lettersList.childNodes.length > 4) {
        showMoreBtn.style.display = 'flex'
    } else {
        showMoreBtn.style.display = "none";
        showMoreBtn.textContent = 'See more'
        showMoreBtn.classList.remove('active')
    }

    lettersEl.append(lettersList, showMoreBtn)
}

function renderCount(count, element) {
    count > 0
        ? element.textContent = `${count.toString().padStart(2, '0')}`
        : element.textContent = '00'
}

function countWords(text) {
    const words = text.match(/\p{L}+/gu) || []
    return words.length
}

function countSentences(text) {
    const sentences = text.match(/\p{L}+[.!?]+/gu) || []
    return sentences.length
}

function getLettersFrequency(text) {
    const letters = [...text.toUpperCase()]
        .filter(char => /\p{L}/u.test(char))
        .reduce((acc, char) => {
            acc[char] = (acc[char] || 0) + 1
            return acc
        }, {});

    return letters;
}

function renderReadingTime(wordsCount) {
    const readingTimeEl = document.querySelector('.time')
    const readingTime = calculateReadingTime(wordsCount)

    if (!isNaN(readingTime)) {
        if (readingTime < 1) {
            readingTimeEl.textContent = '< 1';
        } else {
            readingTimeEl.textContent = `${Math.ceil(readingTime)}`
        }
    } else {
        readingTimeEl.textContent = `0`
    }
}

function excludeSpaces(checked, text) {
    const totalCharacterEl = document.querySelectorAll('.result-item')[0]
    let textEl = totalCharacterEl.lastElementChild

    if (checked) {
        text = text.replace(/\s/g, '')
        textEl.innerText = 'Total Characters (no space)'
        renderCharactersCount(text)
    } else {
        textEl.innerText = 'Total Characters'
        renderCharactersCount(text)
    }
}

function getLimitValue(checked) {
    const inputElement = document.getElementById('character-count')

    if (checked) {
        inputElement.removeAttribute("hidden")
    }

    return inputElement.value
}

function calculateReadingTime(wordsCount) {
    const wordsPerMinute = 200;
    if (!!wordsCount) {
        const readingTime = wordsCount / wordsPerMinute
        return readingTime;
    }
}

function sortLettersByFrequency(object) {
    return Object.entries(object).sort((a, b) => b[1] - a[1]);
}

function renderLettersList(object, text) {
    let lettersListEl = document.querySelector('.letter-list')

    if (!lettersListEl) {
        lettersListEl = document.createElement('ul')

        lettersListEl.classList.add('letter-list')

        lettersEl.append(lettersListEl)
    }

    lettersListEl.innerHTML = ''

    for (const [letter, count] of object) {
        const letterEl = document.createElement('li')
        const letterElSpan = document.createElement('span')
        const countingEl = document.createElement('span')
        const percentage = (count / text.length) * 100;

        letterElSpan.textContent = letter
        countingEl.textContent = `${count} (${percentage.toFixed(2)}%)`

        letterEl.append(letterElSpan, renderProgress(percentage), countingEl)
        lettersListEl.append(letterEl)
    }

    return lettersListEl
}

function updateLettersDisplay(text) {
    const emptyEl = lettersEl.querySelector('.empty');
    if (text === '') {
        if (!emptyEl) {
            lettersEl.append(renderEmpty());
        }

        const lettersListEl = lettersEl.querySelector('.letter-list');

        if (lettersListEl) {
            lettersListEl.remove();
        }
    } else {
        if (emptyEl) {
            emptyEl.remove();
        }

        renderLettersDensity(text)
    }
}

function renderEmpty() {
    const blockEl = document.createElement('div')

    blockEl.classList.add('empty')
    blockEl.textContent = 'No characters found. Start typing to see letter density.'

    return blockEl
}

function renderProgress(value) {
    const progressEl = document.createElement('div')
    const valueEl = document.createElement('div')

    progressEl.classList.add('progress')
    valueEl.classList.add('value')
    valueEl.style.width = `${value}%`

    progressEl.appendChild(valueEl)

    return progressEl
}

export function expandList() {
    const lettersList = document.querySelector('.letter-list')

    lettersList.classList.toggle('show-all')

    if (lettersList.classList.contains('show-all')) {
        showMoreBtn.textContent = 'See less'
        showMoreBtn.classList.add('active')
    } else {
        showMoreBtn.textContent = 'See more'
        showMoreBtn.classList.remove('active')
    }
}

function removeError(parentEl) {
    if (parentEl.lastElementChild?.matches('p')) {
        const errorEl = parentEl.lastElementChild

        parentEl.classList.remove('error')
        errorEl.remove()
    }
}