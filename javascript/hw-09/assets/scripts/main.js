import { fetchData } from "./api/fetchApi.js";
import { BASE_URL } from "./config.js";
import { loadMoreBtn } from "./ui/loadMore.js";
import { HeroList } from "./hero/HeroList.js";
import { FilterPanel } from "./ui/FilterPanel.js";
import { sortOptions } from "./constants/sortOptions.js";

const heroData = await fetchData(BASE_URL);

const blockEl = document.querySelector(".main");
const titleEl = document.createElement('h1')

titleEl.classList.add('title')
titleEl.textContent = 'Super Hero'

const heroList = new HeroList(heroData, loadMoreBtn)

const filterPanel = new FilterPanel(sortOptions);

let heroes = [...heroData];

filterPanel.onChange = ({ search, sort }) => {
    let result = [...heroData];

    if (search) {
        result = result.filter(hero =>
            hero.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (sort === "asc") {
        result.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sort === "desc") {
        result.sort((a, b) => b.name.localeCompare(a.name));
    }

    heroList.update(result);
};

blockEl.append(titleEl, filterPanel.panelEl, heroList.container)