import { DiscountedLaptop } from './discountedLaptop.js';

const newLaptopsBase = [
    { brand: "Apple", model: "MacBook Air M2", price: 48000 },
    { brand: "ASUS", model: "ROG Strix G15", price: 52000 },
    { brand: "Lenovo", model: "IdeaPad 3", price: 18500 },
    { brand: "HP", model: "Pavilion 15", price: 24000 },
    { brand: "Dell", model: "XPS 13", price: 65000 },
];

const appleLaptop = new DiscountedLaptop(newLaptopsBase[0].brand, newLaptopsBase[0].model, newLaptopsBase[0].price, 10, "Back to School Sale", 5);

console.log(appleLaptop.finalPrice);
appleLaptop.updateDiscount(15);
console.log(appleLaptop.finalPrice);
appleLaptop.sell(2);
appleLaptop.addStock(3);
console.log(appleLaptop.getInfo());

const discountInventory = [
    new DiscountedLaptop(newLaptopsBase[0].brand, newLaptopsBase[0].model, newLaptopsBase[0].price, 10, "Back to School Sale", 5),
    new DiscountedLaptop(newLaptopsBase[1].brand, newLaptopsBase[1].model, newLaptopsBase[1].price, 15, "Holiday Sale", 3),
    new DiscountedLaptop(newLaptopsBase[2].brand, newLaptopsBase[2].model, newLaptopsBase[2].price, 5, "Clearance Sale", 0),
    new DiscountedLaptop(newLaptopsBase[3].brand, newLaptopsBase[3].model, newLaptopsBase[3].price, 20, "Black Friday Sale", 7),
    new DiscountedLaptop(newLaptopsBase[4].brand, newLaptopsBase[4].model, newLaptopsBase[4].price)
]

const availableLaptops = discountInventory.filter(
    (laptop) => laptop.isAvailable()
);

availableLaptops.forEach((laptop) => {
    console.log(laptop.getInfo());
});
