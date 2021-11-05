//Imports
import axios from "axios";

//Declarations
let countryContainer = document.getElementById('countryContainer');

//Main
getCountries();

//Functions
async function getCountries() {
    try {
        const apiSource = await axios.get('https://restcountries.com/v2/all');
        formatCountryInfo(sortCountriesOnPopulation(apiSource));
        }
    catch(e) {
        console.error(e);
    }
}

function sortCountriesOnPopulation(countries) {
    return countries.data.sort((a, b) => {
        return a.population - b.population;
    });
}

function formatCountryInfo(countries) {

    for (let i = 0; i < countries.length; i++) {

        //Bonus 8.2
        const {name, population, region} = countries[i];

        let countryElements = document.createElement('li');


        let elementCountryFlag = document.createElement('img');
        elementCountryFlag.src = countries[i].flags.png;
        elementCountryFlag.height = 12;
        countryElements.appendChild(elementCountryFlag);

        let elementCountryName = document.createElement('div');
        elementCountryName.textContent = name;
        elementCountryName.style.color = getRegionColor(region);
        countryElements.appendChild(elementCountryName);

        let elementCountryPopulation = document.createElement('div');
        elementCountryPopulation.textContent =
            'Has a population of ' + new Intl.NumberFormat('nl-NL').format(population) + ' people.';
        countryElements.appendChild(elementCountryPopulation);

        countryContainer.appendChild((countryElements));
    }
}

function getRegionColor(region) {
    let color;
    switch(region) {
        case "Africa":
            color = "blue";
            break;
        case "Americas":
            color = "green";
            break;
        case "Asia":
            color = "red";
            break;
        case "Europe":
            color = "yellow";
            break;
        case "Oceania":
            color = "purple";
            break;
        default:
            color = "orange";
    }
    return color;
}