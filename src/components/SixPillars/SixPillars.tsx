import PillarCard from "../PillarCard/Pillarcard";
import "./index.css";
function SixPillars() {
  return (
    <section className="pillars__container">
      <div className="pillars__heading">
        <h2 className="pillars__heading-text">HOW IT WORKS</h2>
        <div className="pillars__heading-style">
          <span className="pillars__heading--gradient">
            Lifestyle as medicine:
          </span>
          <span className="pillars__heading-secondary-text">
            The six pillars
          </span>
        </div>
      </div>
      <div className="pillars__card-container">
        <PillarCard />
      </div>
    </section>
  );
}

export default SixPillars;
