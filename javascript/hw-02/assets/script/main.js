import { cleanPrice, increasedPriceShort, result } from "./task_1.js";
import { priceRoundedDown, priceRoundedUp } from "./task_2.js";
import { transactionId } from "./task_3.js";
import { getDeliveryCost, calculateProductCost, formatOrderTotal } from "./task_4.js";
import { logClientStatus } from "./task_5.js";

// 1)
console.log("=== Обробка \"брудних\" даних ===")
console.log("Чисте число:", cleanPrice)
console.log("Збільшена ціна на 24%:", increasedPriceShort)
console.log("Результат з одним знаком після коми:", result, '- його тип:', typeof result)
console.log("")

// 2)
console.log("=== Математика округлення ===")
console.log("Ціна, округлена в меншу сторону:", priceRoundedDown)
console.log("Ціна, округлена в більшу сторону:", priceRoundedUp)
console.log("")

// 3)
console.log("=== Генератор номеру транзакції ===")
console.log("Транзакція №$" + transactionId)
console.log("")

// 4)
console.log("=== Функціональна архітектура чека ===")
//можна записати так:
//const orderTotal = getDeliveryCost() + calculateProductCost(priceRoundedDown, 3)
//або так:
const deliveryCost = getDeliveryCost(80)
const productCost = calculateProductCost(priceRoundedDown, 3)
const orderTotal = deliveryCost + productCost
const finalMessage = formatOrderTotal(orderTotal)
console.log(finalMessage)
console.log("")

// 5)
console.log("=== Робота зі станами даних ===")
console.log(logClientStatus("Олександр"))
console.log(logClientStatus(null))
console.log(logClientStatus())