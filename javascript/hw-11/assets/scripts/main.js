import { themeBtm, toggleTheme } from "./theme.js";
import { formEl, analyzeText, showMoreBtn, expandList } from "./analyzeText.js";

themeBtm.addEventListener('click', toggleTheme)
formEl.addEventListener("input", analyzeText);
showMoreBtn.addEventListener('click', expandList)