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
        let sorted = sortOnPopulation(apiSource);
        // console.log(apiSource.data[1].name);   !!!!!!!!!!
        formatCountryInfo(sorted);
        }
    catch(e) {
        console.error(e);
    }
}

function sortOnPopulation(input) {
    const sorted = input.data.sort((a, b) => {
        return a.population - b.population;
    })
    // console.log(input.data[1].population);
    console.log(sorted[3].population);
    return input;
}

function formatCountryInfo(result) {
    for (let i = 0; i < result.data.length; i++) {
        let countryElements = document.createElement('li');

        let elementCountryName = document.createElement('div');
        elementCountryName.textContent = result.data[i].name;
        countryElements.appendChild(elementCountryName);

        let elementCountryPopulation = document.createElement('div');
        elementCountryPopulation.textContent = 'Has a population of ' + result.data[i].population + ' people.';
        countryElements.appendChild(elementCountryPopulation);

        const newLine = document.createElement('br');
        countryContainer.appendChild(newLine);
        countryContainer.appendChild((countryElements));
    }
    console.log(countryContainer);
}




