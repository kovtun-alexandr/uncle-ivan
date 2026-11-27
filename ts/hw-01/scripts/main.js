import { themeBtn, toggleTheme } from "./theme.js";
import { formEl, analyzeText, showMoreBtn, expandList } from "./analyzeText.js";
themeBtn === null || themeBtn === void 0 ? void 0 : themeBtn.addEventListener('click', toggleTheme);
formEl === null || formEl === void 0 ? void 0 : formEl.addEventListener("input", analyzeText);
showMoreBtn.addEventListener('click', expandList);
