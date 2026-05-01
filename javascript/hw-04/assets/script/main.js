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

function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60

    if (hours === 0) {
        return `${remainingMinutes} хв`
    }

    return `${hours} год ${remainingMinutes} хв`
}

console.log(formatDuration(135))
console.log(formatDuration(60))
console.log(formatDuration(45))

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

function validateSlug(title) {
    const trimmedTitle = title.trim()

    if (trimmedTitle.length === 0) {
        return "Помилка: назва порожня"
    } else if (trimmedTitle.length > 50) {
        return "Помилка: назва задовга"
    } else if (trimmedTitle.includes(" ")) {
        return "Помилка: пробіли заборонені, використай дефіс"
    } else {
        return `Slug прийнято: ${trimmedTitle.toLowerCase()}`
    }
}

console.log(validateSlug("  "))
console.log(validateSlug("the dark knight"))
console.log(validateSlug("The-Dark-Knight"))

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

function calcTicketPrice(basePrice, age, hasStudentCard) {
    const price = basePrice ?? 200
    let finalPrice
    let discountName

    if (age < 7) {
        finalPrice = 0
        discountName = "дитяча"
    } else if (age >= 65) {
        finalPrice = price * 0.5
        discountName = "пенсійна"
    } else if (hasStudentCard) {
        finalPrice = price * 0.7
        discountName = "студентська"
    } else {
        finalPrice = price
        discountName = "відсутня"
    }

    console.log(`Квиток: ${finalPrice} грн (знижка: ${discountName})`)
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

function printSchedule(startHour, sessionCount, durationMinutes) {
    let currentTime = startHour * 60

    for (let i = 1; i <= sessionCount; i++) {
        const startHour = Math.floor(currentTime / 60)
        const startMinute = currentTime % 60
        const endHour = Math.floor((currentTime + durationMinutes) / 60)
        const endMinute = (currentTime + durationMinutes) % 60

        if (currentTime >= 23 * 60) {
            break
        }

        console.log(`Сеанс ${i}: ${startHour}:${startMinute < 10 ? "0" + startMinute : startMinute} – ${endHour}:${endMinute < 10 ? "0" + endMinute : endMinute}`)
        currentTime += durationMinutes
    }
}

printSchedule(10, 5, 105)