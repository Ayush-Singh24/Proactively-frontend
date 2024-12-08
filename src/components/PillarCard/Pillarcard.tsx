import { CardType } from "../SixPillars/SixPillars";
import "./index.css";

interface PillarCardProps {
  card: CardType;
  activeID: number;
}

function PillarCard({ card, activeID }: PillarCardProps) {
  return (
    <div className={`pillar__card ${activeID === card.id ? "active" : ""}`}>
      <div className="pillar__img-container">
        <img className="pillar__img" src={card.img} alt="pillar-1" />
        <div className="pillar__img-tag">
          <img className="pillar__img-tag-icon" src={card.tag.icon} />
          <div className="pillar__img-tag-text">
            <span>{card.tag.value}</span>
            <p>{card.tag.unit}</p>
          </div>
        </div>
      </div>
      <div className="pillar__text">
        <h3 className="pillar__heading">{card.title}</h3>
        <p className="pillar__description">{card.description}</p>
      </div>
    </div>
  );
}

export default PillarCard;
