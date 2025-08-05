import countryFacts from "../api/countryData.json"
import Card from "../components/UI/Card";

function About() {
  return (
    <>
      <section className="section-about container">
        <h2 className="container-title">here are the Interesting Facts
            <br />
            we're proud of
        </h2>
        <div className="gradient-cards">

    {
            countryFacts.map( (item,index) =>{
                return <Card item={item} key={index}></Card>
            } )
    }
    </div>
      </section>
    </>
  );
}

export default About;
