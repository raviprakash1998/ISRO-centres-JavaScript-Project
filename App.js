var centres = [],
  filteredData;
const searchBtn = document.getElementById("search-button");
const cityBtn = document.getElementById("city");
const stateBtn = document.getElementById("state");
const centerBtn = document.getElementById("name");
const searchInput = document.getElementById("search-input");
const userCard = document.getElementById("user-cards");

// Defining async function
const fetchData = async () => {
  const isro_centre_api = "https://isro.vercel.app/api/centres";
  const response = await fetch(isro_centre_api); // Storing response
  const data = await response.json(); // Storing data in form of JSON
  centres.push(...data.centres);
  createCardHead();
  centres.forEach((center) => createCard(center));
};

const createCardHead = async () => {
  const card = document.createElement("div");
  card.className =
    "card card-h dd-flex-center dd-justify-space-between dd-bold";

  const serNo = document.createElement("div");
  serNo.className = "dd-width-100";
  serNo.innerText = "S.No";

  const centreName = document.createElement("div");
  centreName.className = "dd-width-500";
  centreName.innerText = "Centre Name";

  const city = document.createElement("div");
  city.className = "dd-width-250";
  city.innerText = "City";

  const state = document.createElement("div");
  state.className = "dd-width-250";
  state.innerText = "State";

  card.append(serNo, centreName, city, state);

  userCard.appendChild(card);
};

// Function to define innerHTML for HTML table
const createCard = async ({ id, name, Place, State }) => {
  const cardValue = document.createElement("div");
  cardValue.className = "card dd-flex-center dd-justify-space-between";

  const serId = document.createElement("div");
  serId.className = "dd-width-100";
  serId.innerText = id;

  const centreNameValue = document.createElement("div");
  centreNameValue.className = "dd-width-500";
  centreNameValue.innerText = name;

  const cityValue = document.createElement("div");
  cityValue.className = "dd-width-250";
  cityValue.innerText = Place;

  const stateValue = document.createElement("div");
  stateValue.className = "dd-width-250";
  stateValue.innerText = State;

  cardValue.append(serId, centreNameValue, cityValue, stateValue);

  userCard.appendChild(cardValue);
};

const reRenderedData = (searchedItem) => {
  userCard.innerHTML = "";

  createCardHead();
  searchedItem.forEach((center) => createCard(center));
};

const searchCentre = () => {
  filteredData = centres.filter((center) =>
    center.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  reRenderedData(filteredData);
};

const searchCity = () => {
  filteredData = centres.filter((center) =>
    center.Place.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  reRenderedData(filteredData);
};

const searchState = () => {
  filteredData = centres.filter((center) =>
    center.State.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  reRenderedData(filteredData);
};

function bindEvents() {
  searchBtn.addEventListener("click", searchCentre);
  cityBtn.addEventListener("click", searchCity);
  stateBtn.addEventListener("click", searchState);
  centerBtn.addEventListener("click", searchCentre);
}

function main() {
  fetchData();
  bindEvents();
}

window.addEventListener("DOMContentLoaded", main);
