
function Card({item}){
    return <>
    <div className="card">
      <div className="container-card bg-blue-box">
        <p className="card-title">{item.countryName}</p>
        <p>
          <span className="card-description">Capital:</span>
          {item.capital}
        </p>
        <p>
          <span className="card-description">Population:</span>
          {item.population}
        </p>
        <p>
          <span className="card-description">Interesting Fact:</span>
          {item.interestingFact}
        </p>
      </div>
    </div>
    </>
}

export default Card;