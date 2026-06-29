export class DiscountedLaptop {
    constructor(brand, model, originalPrice, discountPercentage, discountReason, quantity = 0) {
        this.brand = brand
        this.model = model
        this.originalPrice = originalPrice
        this.discountPercentage = discountPercentage > 0 && discountPercentage < 100 ? discountPercentage : 0
        this.finalPrice = this.getFinalPrice()
        this.discountReason = discountReason || "No discount"
        this.quantity = quantity
    }

    updateDiscount(newPercent) {
        if (newPercent > 0 && newPercent < 100) {
            this.discountPercentage = newPercent
            this.finalPrice = this.getFinalPrice()
        }
    }

    getFinalPrice() {
        return this.originalPrice * (1 - this.discountPercentage / 100)
    }

    sell(amount) {
        if (amount > 0 && amount <= this.quantity) {
            this.quantity -= amount
            console.log(`Продано ${amount} одиниць. Залишок: ${this.quantity}`)
        } else {
            console.log(`Недостатьня кількість одиниць товару. Запитано: ${amount}, доступно: ${this.quantity}`)
        }
    }

    addStock(amount) {
        if (amount > 0) {
            this.quantity += amount
            console.log(`Додано ${amount} одиниць. Залишок: ${this.quantity}`)
        } else {
            console.log("Кількість повинна бути більше 0");
        }

    }

    isAvailable() {
        return this.quantity > 0;
    }

    getInfo() {
        return `Ноутбук ${this.brand} ${this.model}. Причина уцінки: ${this.discountReason}. Ціна: ${this.finalPrice} грн.`
    }
}