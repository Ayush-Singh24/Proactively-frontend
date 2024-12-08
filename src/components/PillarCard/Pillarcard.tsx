import "./index.css";
function PillarCard() {
  return (
    <div className="pillar__card">
      <div className="pillar__img-container">
        <img
          className="pillar__img"
          src="/images/pillar-1.jpeg"
          alt="pillar-1"
        />
        <div className="pillar__img-tag">
          <img className="pillar__img-tag-icon" src="/icons/nutrition.svg" />
          <div className="pillar__img-tag-text">
            <span>121/80</span>
            <p>mmHg</p>
          </div>
        </div>
      </div>
      <div className="pillar__text">
        <h3 className="pillar__heading">Nutrition</h3>
        <p className="pillar__description">
          Evidence supports the use of a whole food, plant-predominant diet to
          prevent, treat and reverse chronic illness.
        </p>
      </div>
    </div>
  );
}

export default PillarCard;
