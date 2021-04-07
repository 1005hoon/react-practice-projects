// Base url
const BASE_URL = "https://api.rawg.io/api/";
const KEY_URL = `key=975c403e14d94a53bf3b931f010933b1`;

// Getting Date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;

  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();

  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const POPULAR_GAMES = `games?${KEY_URL}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const UPCOMING_GAMES = `games?${KEY_URL}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const NEW_GAMES = `games?${KEY_URL}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${BASE_URL}${POPULAR_GAMES}`;
export const upcomingGamesUrl = () => `${BASE_URL}${UPCOMING_GAMES}`;
export const newGamesUrl = () => `${BASE_URL}${NEW_GAMES}`;
