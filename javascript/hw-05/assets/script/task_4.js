import { priceRoundedDown } from "./task_2.js"

// ## 4. Функціональна архітектура чека
// Вам потрібно розбити процес підрахунку замовлення на маленькі логічні кроки (функції), які можна буде використовувати повторно.

// **Ваше завдання:**
// 1. Напишіть функцію, яка просто повертає фіксоване число (вартість доставки замовлення).
// 2. Напишіть функцію, яка приймає ціну та кількість товару, а повертає результат їх множення.
// 3. Напишіть функцію, яка приймає фінальну суму, а повертає готовий рядок для клієнта: `"Загальна сума замовлення: [сума] грн"`.

// **Фінальний крок:**
// Викличте ці три функції так, щоб результат роботи перших двох (доставка та вартість товарів) додався між собою і був переданий у третю функцію для формування фінального повідомлення.

function getDeliveryCost() {
    return 80
}

function calculateProductCost(price, quantity) {
    return price * quantity
}

function formatOrderTotal(total) {
    return `Загальна сума замовлення: ${total} грн`
}

//можна записати так:
//const orderTotal = getDeliveryCost() + calculateProductCost(priceRoundedDown, 3)

//або так:
const deliveryCost = getDeliveryCost()
const productCost = calculateProductCost(priceRoundedDown, 3)
const orderTotal = deliveryCost + productCost
export const finalMessage = formatOrderTotal(orderTotal)