import { FaLongArrowAltRight } from "react-icons/fa";

function HeroSection() {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore The World, One Country at a Time
          </h1>
          <p className="paragraph">
            Every country holds unique beauty, history, and culture. Travel
            expands your horizons, offering adventure, relaxation, and
            unforgettable memories. Start exploring today!
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaLongArrowAltRight />{" "}
          </button>
        </div>
        <div className="hero-image ">
          <img
            src="./images/world.png"
            alt="world beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
