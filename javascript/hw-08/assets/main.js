import { laptops } from './constants/laptops.js';
import { categories } from './constants/categories.js';
import { createCategoryButtons } from './ui/createCategoryButtons.js';
import { Products } from './products.js';

const mainSection = document.querySelector('main section')
const productsContainer = document.createElement('div')
const categoryButtonsContainer = document.createElement('div')

categoryButtonsContainer.classList.add('category-buttons')
mainSection.append(categoryButtonsContainer, productsContainer)
createCategoryButtons(categories, categoryButtonsContainer)

const buttons = categoryButtonsContainer.querySelectorAll('.category-button')
const products = new Products(laptops, productsContainer, buttons)