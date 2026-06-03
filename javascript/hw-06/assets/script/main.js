// глобальні фунціі виніс за межі завдань, щоб не заважали а при потребі можна було їми скористатись
const getHours = (minutes) => Math.floor(minutes / 60)
const getMinutes = (minutes) => minutes % 60
const formattedMinutes = (minutes) => minutes < 10 ? "0" + minutes : minutes
const sum = (a, b) => a + b

// 1) - Оголоси функцію `formatDuration(minutes)` через **function declaration**.
//    - Всередині функції:
//      - Обчисли кількість повних годин (`Math.floor`) та хвилин, що залишились (`%`).
//      - Якщо годин `0` — повертай лише `"45 хв"` (тільки хвилини).
//      - В іншому випадку — повертай `"2 год 15 хв"` (і те, і те).
//    - Виклич функцію з кількома значеннями і виведи результат у `console.log`:
//      - `formatDuration(135)` → `"2 год 15 хв"`
//      - `formatDuration(60)` → `"1 год 00 хв"`
//      - `formatDuration(45)` → `"45 хв"`

//    _Оператори та методи: `/`, `%`, `Math.floor()`, `if/else`, template literals, `return`_

function displayTime(hours, minutes) {
    !hours ?
        console.log(`"${formattedMinutes(minutes)} хв"`)
        : console.log(`"${hours} год ${formattedMinutes(minutes)} хв"`)
}

function formatDuration(minutes) {
    displayTime(getHours(minutes), getMinutes(minutes))
}

formatDuration(135)
formatDuration(60)
formatDuration(45)

// 2) - Оголоси функцію `validateSlug(title)` через **function declaration**.
//    - Перед перевірками обріжи зайві пробіли по краях (`trim()`).
//    - Логіка з `if / else if / else`:
//      1. Якщо очищений рядок має `length === 0` — повертай: `"Помилка: назва порожня"`.
//      2. Інакше якщо `length > 50` — повертай: `"Помилка: назва задовга"`.
//      3. Інакше якщо містить пробіл (`includes(" ")`) — повертай: `"Помилка: пробіли заборонені, використай дефіс"`.
//      4. Інакше — повертай: `` `Slug прийнято: ${назва у нижньому регістрі}` ``.
//    - Виклич функцію і виведи результат у `console.log`:
//      - `validateSlug("  ")` → `"Помилка: назва порожня"`
//      - `validateSlug("the dark knight")` → `"Помилка: пробіли заборонені, використай дефіс"`
//      - `validateSlug("The-Dark-Knight")` → `"Slug прийнято: the-dark-knight"`

//    _Методи та властивості: `trim()`, `length`, `includes()`, `toLowerCase()`, `if/else if/else`, template literals, `return`_

function displayMessage(message) {
    console.log(message)
}

// Зробив окрему функцію для виводу повідомлення, але потім перчитав умову і побачив що не викоритсав `return` і вирішив шо треба переробити використовуючи `return`!
// function receiveMessage(message) {
//     if (message.length === 0) {
//         displayMessage("Помилка: назва порожня")
//     } else if (message.length > 50) {
//         displayMessage("Помилка: назва задовга")
//     } else if (message.includes(" ")) {
//         displayMessage("Помилка: пробіли заборонені, використай дефіс")
//     } else {
//         displayMessage(`Slug прийнято: ${message.toLowerCase()}`)
//     }
// }

// function validateSlug(title) {
//     receiveMessage(title.trim())
// }

function receiveMessage(message) {
    if (message.length === 0) {
        return "Помилка: назва порожня"
    } else if (message.length > 50) {
        return "Помилка: назва задовга"
    } else if (message.includes(" ")) {
        return "Помилка: пробіли заборонені, використай дефіс"
    } else {
        return `Slug прийнято: ${message.toLowerCase()}`
    }
}

// міг би просто вивести ресультат в консоль, але в мене була готова функція, не викидати ж її)))
function validateSlug(title) {
    displayMessage(receiveMessage(title.trim()))
}

validateSlug(" ")
validateSlug("the dark knight")
validateSlug("The-Dark-Knight")

// 3) - Оголоси функцію `calcTicketPrice(basePrice, age, hasStudentCard)` через **function declaration**.
//    - Якщо `basePrice` не передано — використай значення `200` за допомогою оператора `??`.
//    - Логіка `if / else if / else`:
//      1. Якщо `age < 7` — квиток безкоштовний (`0 грн`), знижка `"дитяча"`.
//      2. Інакше якщо `age >= 65` — знижка 50%.
//      3. Інакше якщо `hasStudentCard` — знижка 30%.
//      4. Інакше — повна ціна, знижка `"відсутня"`.
//    - Виводь у консоль: `` `Квиток: ${finalPrice} грн (знижка: ${discountName})` ``
//    - Виклич функцію кілька разів:
//      - `calcTicketPrice(200, 5, false)` → `"Квиток: 0 грн (знижка: дитяча)"`
//      - `calcTicketPrice(200, 70, false)` → `"Квиток: 100 грн (знижка: пенсійна)"`
//      - `calcTicketPrice(200, 22, true)` → `"Квиток: 140 грн (знижка: студентська)"`
//      - `calcTicketPrice(undefined, 30, false)` → `"Квиток: 200 грн (знижка: відсутня)"`

//    _Оператори та методи: `??`, `if/else if/else`, арифметика (`*`, `-`), template literals, `return` або `console.log`_

function printTicket(finalPrice, discountName) {
    console.log(`Квиток: ${finalPrice} грн (знижка: ${discountName})`)
}

function isThereDiscount(age, price, hasStudentCard) {
    let calculatedPrice = 0

    if (age < 7) {
        printTicket(calculatedPrice, "дитяча")
    } else if (age >= 65) {
        calculatedPrice = price * 0.5
        printTicket(calculatedPrice, "пенсійна")
    } else if (hasStudentCard) {
        calculatedPrice = price * 0.7
        printTicket(calculatedPrice, "студентська")
    } else {
        printTicket(price, "відсутня")
    }
}

function calcTicketPrice(basePrice, age, hasStudentCard) {
    const price = basePrice ?? 200

    isThereDiscount(age, price, hasStudentCard)
}

calcTicketPrice(200, 5, false)
calcTicketPrice(200, 70, false)
calcTicketPrice(200, 22, true)
calcTicketPrice(undefined, 30, false)

// 4) - Оголоси функцію `printSchedule(startHour, sessionCount, durationMinutes)` через **function declaration**.
//    - Переведи `startHour` у хвилини від початку доби (`startHour * 60`).
//    - У циклі `for` від `1` до `sessionCount` включно:
//      - Обчисли час початку і кінця поточного сеансу.
//      - Якщо час початку `>= 23 * 60` — зупини цикл через `break`.
//      - Інакше — виведи рядок: `` `Сеанс ${i}: ${startH}:${startM} – ${endH}:${endM}` ``
//      - Зрушити поточний час на `durationMinutes` для наступної ітерації.
//    - Для форматування хвилин: якщо хвилин менше 10 — додай `"0"` спереду (напр. `"09"` замість `"9"`).
//    - Виклич функцію:
//      - `printSchedule(10, 5, 105)` — сеанси з 10:00, по 1 год 45 хв, максимум 5 шт.

//    _Оператори та методи: `for`, `break`, `%`, `Math.floor()`, `if`, template literals, конкатенація рядків_

function displaySessionTime(sessionNumber, startHour, startMinute, endHour, endMinute) {
    console.log(`Сеанс ${sessionNumber}: ${startHour}:${formattedMinutes(startMinute)} – ${endHour}:${formattedMinutes(endMinute)}`)
}

function printSchedule(startHour, sessionCount, durationMinutes) {
    let currentTime = startHour * 60

    for (let i = 1; i <= sessionCount; i++) {
        const startHour = getHours(currentTime)
        const startMinute = getMinutes(currentTime)
        const endHour = getHours(sum(currentTime, durationMinutes))
        const endMinute = getMinutes(sum(currentTime, durationMinutes))

        if (currentTime >= 23 * 60) {
            break
        }

        displaySessionTime(i, startHour, startMinute, endHour, endMinute)
        currentTime += durationMinutes
    }
}

printSchedule(10, 5, 105)