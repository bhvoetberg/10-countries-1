//Notes
// innerHTML in het script  wat eenvoudiger zijn, maar wilde toch de 'juiste' methode proberen :)

//Imports
import axios from 'axios';

//Main
const searchForm = document.getElementById('search-form');
searchForm.addEventListener("submit", getInput);

//Functions

function getInput(e) {
    e.preventDefault();
    const searchCountry = document.getElementById('search-country');
    getCountry(searchCountry.value);
    //Empty input from form
    searchForm.reset();
}

async function getCountry(input) {
    try {
        const url = 'https://restcountries.com/v2/name/' + input;
        const {data: country} = await axios.get(url);
        formatCountryInfo(country);
    }
    catch(e) {
        console.error(e);
        document.getElementById('country-container').innerHTML = "This country does not exist, please try again."
    }
}

function formatCountryInfo(country) {
    let countryContainer = document.getElementById('country-container');

    //Clear previous input. This includes a truthy :)
    while(countryContainer.firstChild) {
        countryContainer.removeChild(countryContainer.firstChild);
    }

    //Element to store and format all country info
    let countryInfoElement = document.createElement('div');

    let flagElement = document.createElement('img');
    flagElement.src = country[0].flag
    flagElement.height = 24;
    countryInfoElement.appendChild(flagElement);

    let nameElement = document.createElement('span');
    nameElement.textContent = ' ' + country[0].name;
    nameElement.className = 'special-font';
    countryInfoElement.appendChild(nameElement);

    let line1 = document.createElement('p');
    line1.textContent =
        country[0].name + ' is situated in ' + country[0].subregion +
        '. It has a population of ' +
        new Intl.NumberFormat('nl-NL').format(country[0].population) + ' people.';
    countryInfoElement.appendChild(line1);

    let line2 = document.createElement('p');
    if (country[0].currencies.length = 1) {
        line2.textContent =
            'The capital is ' + country[0].capital + ' and you can pay with ' + country[0].currencies[0].name + '.';}
        else {
        line2.textContent =
            'The capital is ' + country[0].capital + ' and you can pay with ' + country[0].currencies[0].name +
        ' and you can pay with ' + country[0].currencies[1].name +'.';}
    countryInfoElement.appendChild(line2);

    let line3 = document.createElement('p');
    line3.textContent = languages(country);
    countryInfoElement.appendChild(line3);

    //Promote info to the container on the webpage
    countryContainer.appendChild(countryInfoElement);
}

function languages (country) {
    let totalLanguages = country[0].languages.length;

    if (totalLanguages = 1) {
        return 'They speak ' + country[0].languages[0].name + '.';
    } else if (totalLanguages = 2) {
        return 'They speak ' + country[0].languages[0].name + ' and ' +
            country[0].languages[1].name + '.';
    } else {
        let returnText = 'They speak ';
        for (let i = 0; i < totalLanguages - 1; i++) {
            returnText = returnText + country[0].languages[i].name + ', ';
        }
    }
}
