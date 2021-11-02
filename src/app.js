import axios from "axios";

console.log('Hallo daar!');

async function getCountries() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        // console.log(result.data[0].name);
        // console.log(result.data[0].population);
        // console.log(result.data[0].region);
        // console.log(result.data);
        const countriesContainer = document.getElementById('countries');
        countriesContainer.textContent = result.data.value;
        return result.data;
    } catch(e) {
        console.error(e);
    }
}
//
let info = getCountries();
console.log(info[0].name);
