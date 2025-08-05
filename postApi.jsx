import axios from "axios"

const api = axios.create({
    baseURL:"https://restcountries.com/v3.1"
})

// get method
const getCountryData =  ()=>{
    return api.get('/all?fields=name,population,region,capital,flags')
}

// get data of indv country
const getCountryIndData =  (name)=>{
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,tld,currencies,languages,borders,capital,flags`)
}

export {getCountryIndData};

export default getCountryData;