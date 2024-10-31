/**
 * Gefið efni fyrir verkefni 9, ekki er krafa að nota nákvæmlega þetta en nota
 * verður gefnar staðsetningar.
 */

import { el, empty } from "./lib/elements.js";
import { weatherSearch } from "./lib/weather.js";

/**
 * @typedef {Object} SearchLocation
 * @property {string} title
 * @property {number} lat
 * @property {number} lng
 */

/**
 * Allar staðsetning sem hægt er að fá veður fyrir.
 * @type Array<SearchLocation>
 */

const locations = [
  {
    title: "Reykjavík",
    lat: 64.1355,
    lng: -21.8954,
  },
  {
    title: "Akureyri",
    lat: 65.6835,
    lng: -18.0878,
  },
  {
    title: "New York",
    lat: 40.7128,
    lng: -74.006,
  },
  {
    title: "Tokyo",
    lat: 35.6764,
    lng: 139.65,
  },
  {
    title: "Sydney",
    lat: 33.8688,
    lng: 151.2093,
  },
];

/**
 * Hreinsar fyrri niðurstöður, passar að niðurstöður séu birtar og birtir element.
 * @param {Element} element
 */
function renderIntoResultsContent(element) {
  const outputElement = document.querySelector(".output");

  if (!outputElement) {
    console.warn("fann ekki .output");
    return;
  }

  empty(outputElement);

  outputElement.appendChild(element);
}

/**
 * Birtir niðurstöður í viðmóti.
 * @param {SearchLocation} location
 * @param {Array<import('./lib/weather.js').Forecast>} results
 */
function renderResults(location, results) {
  const header = el(
    "tr",
    { class: "tbody" },
    el("th", {}, "Tími"),
    el("th", {}, "Hiti"),
    el("th", {}, "Úrkoma")
  );
  console.log(results);
  console.log(results[1]["time"]);

  const body0 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[0]["time"].split("T")[1]),
    el("td", {}, results[0]["temperature"]),
    el("td", {}, String(results[0]["precipitation"]))
  );

  const body1 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[1]["time"].split("T")[1]),
    el("td", {}, results[1]["temperature"]),
    el("td", {}, String(results[1]["precipitation"]))
  );

  const body2 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[2]["time"].split("T")[1]),
    el("td", {}, results[2]["temperature"]),
    el("td", {}, String(results[2]["precipitation"]))
  );

  const body3 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[3]["time"].split("T")[1]),
    el("td", {}, results[3]["temperature"]),
    el("td", {}, String(results[3]["precipitation"]))
  );
  const body4 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[4]["time"].split("T")[1]),
    el("td", {}, results[4]["temperature"]),
    el("td", {}, String(results[4]["precipitation"]))
  );
  const body5 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[5]["time"].split("T")[1]),
    el("td", {}, results[5]["temperature"]),
    el("td", {}, String(results[5]["precipitation"]))
  );
  const body6 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[6]["time"].split("T")[1]),
    el("td", {}, results[6]["temperature"]),
    el("td", {}, String(results[6]["precipitation"]))
  );
  const body7 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[7]["time"].split("T")[1]),
    el("td", {}, results[7]["temperature"]),
    el("td", {}, String(results[7]["precipitation"]))
  );
  const body8 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[8]["time"].split("T")[1]),
    el("td", {}, results[8]["temperature"]),
    el("td", {}, String(results[8]["precipitation"]))
  );
  const body9 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[9]["time"].split("T")[1]),
    el("td", {}, results[9]["temperature"]),
    el("td", {}, String(results[9]["precipitation"]))
  );
  const body10 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[10]["time"].split("T")[1]),
    el("td", {}, results[10]["temperature"]),
    el("td", {}, String(results[10]["precipitation"]))
  );
  const body11 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[11]["time"].split("T")[1]),
    el("td", {}, results[11]["temperature"]),
    el("td", {}, String(results[11]["precipitation"]))
  );
  const body12 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[12]["time"].split("T")[1]),
    el("td", {}, results[12]["temperature"]),
    el("td", {}, String(results[12]["precipitation"]))
  );
  const body13 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[13]["time"].split("T")[1]),
    el("td", {}, results[13]["temperature"]),
    el("td", {}, String(results[13]["precipitation"]))
  );
  const body14 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[14]["time"].split("T")[1]),
    el("td", {}, results[14]["temperature"]),
    el("td", {}, String(results[14]["precipitation"]))
  );
  const body15 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[15]["time"].split("T")[1]),
    el("td", {}, results[15]["temperature"]),
    el("td", {}, String(results[15]["precipitation"]))
  );
  const body16 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[16]["time"].split("T")[1]),
    el("td", {}, results[16]["temperature"]),
    el("td", {}, String(results[16]["precipitation"]))
  );
  const body17 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[17]["time"].split("T")[1]),
    el("td", {}, results[17]["temperature"]),
    el("td", {}, String(results[17]["precipitation"]))
  );
  const body18 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[18]["time"].split("T")[1]),
    el("td", {}, results[18]["temperature"]),
    el("td", {}, String(results[18]["precipitation"]))
  );
  const body19 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[19]["time"].split("T")[1]),
    el("td", {}, results[19]["temperature"]),
    el("td", {}, String(results[19]["precipitation"]))
  );
  const body20 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[20]["time"].split("T")[1]),
    el("td", {}, results[20]["temperature"]),
    el("td", {}, String(results[20]["precipitation"]))
  );
  const body21 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[21]["time"].split("T")[1]),
    el("td", {}, results[21]["temperature"]),
    el("td", {}, String(results[21]["precipitation"]))
  );
  const body22 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[22]["time"].split("T")[1]),
    el("td", {}, results[22]["temperature"]),
    el("td", {}, String(results[22]["precipitation"]))
  );
  const body23 = el(
    "tr",
    { class: "tbody" },
    el("td", {}, results[23]["time"].split("T")[1]),
    el("td", {}, results[23]["temperature"]),
    el("td", {}, String(results[23]["precipitation"]))
  );

  const resultsTable = el(
    "table",
    { class: "forecast" },
    header,
    body0,
    body1,
    body2,
    body3,
    body4,
    body5,
    body6,
    body7,
    body8,
    body9,
    body10,
    body11,
    body12,
    body13,
    body14,
    body15,
    body16,
    body17,
    body18,
    body19,
    body20,
    body21,
    body22,
    body23
  );

  renderIntoResultsContent(
    el(
      "section",
      {},
      el("h2", {}, `Leitarniðurstöður fyrir: ${location.title}`),
      resultsTable
    )
  );
}

/**
 * Birta villu í viðmóti.
 * @param {Error} error
 */
function renderError(error) {
  console.log(error);
  const message = error.message;
  renderIntoResultsContent(el("p", {}, `Villa: ${message}`));
}

/**
 * Birta biðstöðu í viðmóti.
 */
function renderLoading() {
  renderIntoResultsContent(el("p", {}, "Leita..."));
}

/**
 * Framkvæmir leit að veðri fyrir gefna staðsetningu.
 * Birtir biðstöðu, villu eða niðurstöður í viðmóti.
 * @param {SearchLocation} location Staðsetning sem á að leita eftir.
 */
async function onSearch(location) {
  renderLoading();

  let results;
  try {
    results = await weatherSearch(location.lat, location.lng);
  } catch (error) {
    renderError(error);
    return;
  }

  renderResults(location, results ?? []);

  // TODO útfæra
  // Hér ætti að birta og taka tillit til mismunandi staða meðan leitað er.
}

/**
 * Framkvæmir leit að veðri fyrir núverandi staðsetningu.
 * Biður notanda um leyfi gegnum vafra.
 */
async function onSearchMyLocation() {
  // TODO útfæra
}

/**
 * Býr til takka fyrir staðsetningu.
 * @param {string} locationTitle
 * @param {() => void} onSearch
 * @returns {HTMLElement}
 */
function renderLocationButton(locationTitle, onSearch) {
  // Notum `el` fallið til að búa til element og spara okkur nokkur skref.
  const locationElement = el(
    "li",
    { class: "locations__location" },
    el("button", { class: "locations__button", click: onSearch }, locationTitle)
  );

  /* Til smanburðar við el fallið ef við myndum nota DOM aðgerðir
  const locationElement = document.createElement('li');
  locationElement.classList.add('locations__location');
  const locationButton = document.createElement('button');
  locationButton.appendChild(document.createTextNode(locationTitle));
  locationButton.addEventListener('click', onSearch);
  locationElement.appendChild(locationButton);
  */

  return locationElement;
}

/**
 * Býr til grunnviðmót: haus og lýsingu, lista af staðsetningum og niðurstöður (falið í byrjun).
 * @param {Element} container HTML element sem inniheldur allt.
 * @param {Array<SearchLocation>} locations Staðsetningar sem hægt er að fá veður fyrir.
 * @param {(location: SearchLocation) => void} onSearch
 * @param {() => void} onSearchMyLocation
 */
function render(container, locations, onSearch) {
  // Búum til <main> og setjum `weather` class
  const parentElement = document.createElement("main");
  parentElement.classList.add("weather");

  // Búum til <header> með beinum DOM aðgerðum
  const headerElement = document.createElement("header");
  const heading = document.createElement("h1");
  heading.appendChild(document.createTextNode("Veður"));
  headerElement.appendChild(heading);
  parentElement.appendChild(headerElement);

  // TODO útfæra inngangstexta
  // Búa til <div class="loctions">
  const locationsElement = document.createElement("div");
  locationsElement.classList.add("locations");

  // Búa til <ul class="locations__list">
  const locationsListElement = document.createElement("ul");
  locationsListElement.classList.add("locations__list");

  // <div class="loctions"><ul class="locations__list"></ul></div>
  locationsElement.appendChild(locationsListElement);

  // <div class="loctions"><ul class="locations__list"><li><li><li></ul></div>
  for (const location of locations) {
    const liButtonElement = renderLocationButton(location.title, () => {
      console.log("Halló!!", location);
      onSearch(location);
    });
    locationsListElement.appendChild(liButtonElement);
  }

  parentElement.appendChild(locationsElement);

  const outputElement = document.createElement("div");
  outputElement.classList.add("output");
  parentElement.appendChild(outputElement);

  container.appendChild(parentElement);
}

// Þetta fall býr til grunnviðmót og setur það í `document.body`
render(document.body, locations, onSearch, onSearchMyLocation);
