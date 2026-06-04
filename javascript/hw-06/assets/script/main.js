const inventory = [
    { id: 1, name: "Laptop Pro 16", price: 45000, category: "Laptops", stock: 5 },
    { id: 2, name: "Wireless Mouse", price: 1200, category: "Accessories", stock: 15 },
    { id: 3, name: "Gaming Monitor", price: 12000, category: "Monitors", stock: 0 },
    { id: 4, name: "USB-C Cable", price: 450, category: "Accessories", stock: 50 },
    { id: 5, name: "Mechanical Keyboard", price: 3500, category: "Accessories", stock: 8 },
    { id: 6, name: "Smartphone X", price: 28000, category: "Phones", stock: 3 },
];

console.log(inventory)

// 1)
// Створіть змінну `availableAccessories`.
// Використовуючи метод `filter`, виберіть з масиву `inventory` товари, у яких `category === "Accessories"` і `stock > 0`.
// Виведіть результат у консоль.

const availableAccessories = inventory.filter(item => item.category === "Accessories" && item.stock > 0)

console.log(availableAccessories)

// 2)
// Створіть масив `salePrices` за допомогою методу `map`.
// Якщо `price > 5000`, нова ціна = `price * 0.85`, інакше ціна залишається без змін.
// Результатом `map` має бути рядок: `` `${item.name} - нова ціна: ${finalPrice} грн` ``.
// Виведіть отриманий масив у консоль.

const salePrices = inventory.map(item => {
    const finalPrice = item.price > 5000 ? item.price * 0.85 : item.price
    return `${item.name} - нова ціна: ${finalPrice} грн`
})

console.log(salePrices)

// 3)
// За допомогою `some` перевірте, чи є в магазині хоча б один товар з `stock === 0`. Виведіть результат (`true/false`).
// За допомогою `every` перевірте, чи всі товари коштують більше `100` грн.
// За допомогою `find` знайдіть об'єкт товару, у якого `id === 3`.
// Виведіть результат у консоль.

const hasOutOfStockItem = inventory.some(item => item.stock === 0)
console.log("Чи є в магазині товар з `stock === 0`", hasOutOfStockItem)

const allItemsExpensive = inventory.every(item => item.price > 100)
console.log("Чи всі товари коштують більше 100 грн", allItemsExpensive)

const itemWithId3 = inventory.find(item => item.id === 3)
console.log(itemWithId3)

// 4)
// Створіть змінну `totalInventoryValue`.
// Використовуйте `reduce`, щоб пройти по масиву `inventory`.
// На кожній ітерації додавайте до акумулятора результат множення `item.price * item.stock`.
// Виведіть фінальну суму у консоль з повідомленням: `"Загальна вартість складу: ... грн"`.

const totalInventoryValue = inventory.reduce((acc, item) => acc + (item.price * item.stock), 0)

console.log(`Загальна вартість складу: ${totalInventoryValue} грн`)

// 5)
// Оголосіть об'єкт `storeManager`.
// Додайте йому властивість `items`, куди скопіюйте масив `inventory`.
// Додайте метод `updateStock(productId, newStock)`:
//     Метод має знайти товар за `id` у масиві `this.items` і змінити його `stock` на `newStock`.
//     Якщо товар знайдено, вивести: `"Запас товару [назва] оновлено до [кількість]"`.
// Додайте метод `printInventory()`:
//     Він має вивести в консоль назву та кількість кожного товару у зручному вигляді (використовуй `forEach`).
// Перевірте роботу: викличте `storeManager.updateStock(1, 10)` та `storeManager.printInventory()`.

const storeManager = {
    items: [...inventory],
    updateStock(productId, newStock) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.stock = newStock;
            console.log(`Запас товару ${item.name} оновлено до ${newStock}`);
        }
    },
    printInventory() {
        this.items.forEach(item => {
            console.log(`${item.name} - кількість: ${item.stock}`);
        });
    }
}

storeManager.updateStock(1, 10)
storeManager.printInventory()