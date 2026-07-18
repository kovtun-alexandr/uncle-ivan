import { fetchData } from "./api/fetchApi.js";
import { BASE_URL } from "./config.js";
import { HeroDetail } from "./hero/HeroDetail.js";
import { backBtm } from "./ui/back.js";

const heroData = await fetchData(BASE_URL);

const heroEl = document.querySelector('.hero-detail')

const params = new URLSearchParams(window.location.search)
const heroId = params.get("id")
const hero = heroData.find(hero => hero.id == heroId);

const heroDetail = new HeroDetail(hero, heroEl, backBtm)