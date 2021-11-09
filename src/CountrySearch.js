//Notes
// innerHTML zou wat eenvoudiger zijn in de functie formatCountryInfo, maar wilde toch de 'juiste' methode proberen :)

//Imports
import axios from 'axios';

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener("submit", getInput);

//Functions

function getInput(e) {
    e.preventDefault();
    const searchCountry = document.getElementById('searchCountry');
    getCountry(searchCountry.value);
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
    }
}

function formatCountryInfo(country) {
    let countryContainer = document.getElementById('country-container');

    //Clear previous input. Including truthy!!
    while(countryContainer.firstChild) {
        countryContainer.removeChild(countryContainer.firstChild);
    }

    let countryInfoElement = document.createElement('div');

    let flagElement = document.createElement('img');
    flagElement.src = country[0].flag
    flagElement.height = 12;
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
    console.log('LENGTE IS: ' + country[0].currencies.length);
    console.log(country[0]);
    if (country[0].currencies.length = 1) {
        line2.textContent =
            'The capital is ' + country[0].capital + ' and you can pay with ' + country[0].currencies[0].name + '.';}
        else {
        line2.textContent =
            'The capital is ' + country[0].capital + ' and you can pay with ' + country[0].currencies[0].name +
        ' and you can pay with ' + country[0].currencies[1].name +'.';}
    countryInfoElement.appendChild(line2);

    let line3 = document.createElement('p');
    line3.textContent =
        'They speak  ' + country[0].languages[0].name + '.';
    countryInfoElement.appendChild(line3);

    countryContainer.appendChild(countryInfoElement);
}
