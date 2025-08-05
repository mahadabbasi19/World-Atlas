import { useTransition } from "react";
import { useEffect } from "react";
import getCountryData from "../api/postApi";
import { useState } from "react";
import CountryCard from "../components/UI/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <p>Loading...</p>;

  const searchCountry = (country)=>{
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    else{
      return country
    }
  }

  const filterRegion = (country) =>{
    if(filter === "all") return country;
    
    return country.region === filter;

  }

const filteredCountries = countries.filter( country => searchCountry(country) && filterRegion(country))

  return (
    <section className="country-section">
      <SearchFilter 
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}

      />
      <ul className="grid grid-four-cols">
        {filteredCountries.map((country, index) => {
          return <CountryCard country={country} key={index} />;
        })}
      </ul>
    </section>
  );
}

export default Country;
