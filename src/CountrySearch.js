//Imports
import axios from 'axios';

// //Declarations
let countryInfo = document.getElementById('country-search-container');

//Main
getCountry();


//Functions
async function getCountry() {
    try {
        const {data: country} = await axios.get('https://restcountries.com/v2/name/peru');
        formatCountryInfo(country);
    }
    catch(e) {
        console.error(e);
    }
}

function formatCountryInfo(country) {

    let countryInfoElement = document.createElement('div');

    let flagElement = document.createElement('img');
    flagElement.src = country[0].flag
    flagElement.height = 12;
    countryInfoElement.appendChild(flagElement);

    let nameElement = document.createElement('span');
    nameElement.textContent = ' ' + country[0].name;
    countryInfoElement.appendChild(nameElement);

    let infoElement = document.createElement('div');
    infoElement.textContent =
        country[0].name + ' is situated in ' + country[0].subregion +
        '. It has a population of ' +
        new Intl.NumberFormat('nl-NL').format(country[0].population) + ' people.';
    countryInfoElement.appendChild(infoElement);

    countryInfo.appendChild(countryInfoElement);

    //Netherlands is situated in Westen Europe. Is has a population of 123 people


    console.log('naam ' + country[0].name);
    console.log('vlag ' + country[0].flag);
    console.log('regio ' + country[0].subregion);
    console.log('pop ' + country[0].population);
    console.log('cur ' + country[0].currencies[0].name);
    console.log('taal ' + country[0].languages[0].name);
}



//Submit button is enter + submit


function getInput(e) {
    e.preventDefault();
    const SearchInput = document.getElementById('search');
    console.log(searchInput.value);
}