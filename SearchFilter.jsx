function SearchFilter({ search, setSearch, filter, setFilter, countries , setCountries }) {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  const sortCountries = (value)=>{
      const sortCountries = [...countries].sort((a,b)=>{
       return (value === 'asc')?
        a.name.common.localeCompare(b.name.common)
        : 
        b.name.common.localeCompare(a.name.common);
      })
      setCountries(sortCountries)
  }

  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={handleInputChange}
      />
    <div><
        button onClick={ ()=>{sortCountries('asc')}}>Asc</button>f
        </div>
    <div><
        button onClick={ ()=>{sortCountries('dsc')}}>Asc</button>
        </div>

      <div>
        <select name="" id="" className="select-section" value={filter}
        onChange={handleSelectChange}>
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
}

export default SearchFilter;
