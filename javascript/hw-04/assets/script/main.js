// 1)
// - Оголосіть змінну `flightCode` і присвойте їй значення через `prompt("Введіть код рейсу:")`.
// - Напишіть логіку з `if / else if / else`:
//   1. Якщо код (з урахуванням регістру) **не починається** з `"PS"` — виведіть: `"Код рейсу недійсний: невірний префікс авіакомпанії"`.
//   2. Інакше, якщо його довжина **не дорівнює** 6 символам — виведіть: `"Код рейсу недійсний: невірна довжина"`.
//   3. Інакше, якщо він **містить пробіл** — виведіть: `"Код рейсу недійсний: містить пробіл"`.
//   4. В іншому випадку — виведіть: `"Рейс знайдено! Реєстрацію розпочато"`.

// **Підказка:** перед перевірками приведіть рядок до верхнього регістру та обріжте зайві пробіли по краях.

// _Методи та властивості: `trim()`, `toUpperCase()`, `startsWith()`, `length`, `includes()`_

function flightRegistration() {
    const flightCode = prompt("Введіть код рейсу:")?.trim().toUpperCase()
    let message = ""

    if (!flightCode) {
        message = "Ви натиснули кнопку скасування або не ввели код рейсу"
    } else if (!flightCode.startsWith("PS")) {
        message = "Код рейсу недійсний: невірний префікс авіакомпанії"
    } else if (flightCode.length !== 6) {
        message = "Код рейсу недійсний: невірна довжина"
    } else if (flightCode.includes(" ")) {
        message = "Код рейсу недійсний: містить пробіл"
    } else {
        message = "Рейс знайдено! Реєстрацію розпочато"
    }

    return message
}

alert(flightRegistration())

// 2)
// - Оголосіть змінну `passengerName` з довгим ім'ям пасажира (наприклад: `"Олександр Петрович Коваленко-Бондаренко"`).
// - Оголосіть змінну `maxLength = 20`.
// - Напишіть логіку:
//   - Якщо довжина `passengerName` більша за `maxLength` — створіть скорочену версію: перші 20 символів + `"..."` і збережіть у змінну `displayName`.
//   - Інакше — `displayName` дорівнює `passengerName` без змін.
// - Виведіть у консоль: `"Ім'я на талоні: [displayName]"`.

// **Додатково:** виведіть також довжину фінального рядка `displayName`.

// _Методи та властивості: `length`, `slice()`, template literals_

const passengerName = "Олександр Петрович Коваленко-Бондаренко"
const maxLength = 20
let displayName = ""

if (passengerName.length > maxLength) {
    displayName = passengerName.slice(0, maxLength) + "..."
} else {
    displayName = passengerName
}

console.log(`"Ім'я на талоні: ${displayName}"`)
console.log(`Довжина фінального рядка: ${displayName.length}`)

// 3)
// - Оголосіть змінну `passportNumber = "FE12345678"` (біометричний паспорт: 2 літери серії + 8 цифр = 10 символів).
// - Отримайте серію (перші 2 символи) за допомогою `slice()` і збережіть у змінну `series`.
// - Отримайте останні 4 цифри за допомогою `slice()` і збережіть у змінну `lastFour`.
// - Сформуйте безпечний рядок для відображення у форматі: `"FE****5678"`, де зірочки — це `"*".repeat(4)`.
// - Виведіть у консоль: `"Паспорт пасажира: [безпечний рядок]"`.

// **Додатково:** виведіть також оригінальну довжину номера паспорта, щоб переконатися, що він правильний (має бути 10).

// _Методи та властивості: `slice()`, `repeat()`, `length`, template literals_

const passportNumber = "FE12345678"
const series = passportNumber.slice(0, 2)
const lastFour = passportNumber.slice(-4)
const safeStar = "*".repeat(4)
const safePassport = `${series}${safeStar}${lastFour}`

console.log(`Паспорт пасажира: ${safePassport}`)
console.log(`Довжина номера паспорта: ${passportNumber.length}`)