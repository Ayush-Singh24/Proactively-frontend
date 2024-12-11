import { useCallback, useEffect, useRef, useState } from "react";
import PillarCard from "../PillarCard/Pillarcard";
import "./index.css";

export type CardType = {
  id: number;
  title: string;
  img: string;
  tag: {
    icon: string;
    value: string;
    unit: string;
  };
  description: string;
};

const cards: CardType[] = [
  {
    id: 0,
    title: "Nutrition",
    img: "/images/pillar-1.jpeg",
    tag: {
      icon: "/icons/nutrition.svg",
      value: "121/80",
      unit: "mmHg",
    },
    description:
      "Eat a variety of foods, including vegetables, fruits, and whole grains. Choose lean proteins and limit saturated fats.",
  },
  {
    id: 1,
    title: "Physical Activity",
    img: "/images/pillar-2.jpeg",
    tag: {
      icon: "/icons/physical-activity.svg",
      value: "32",
      unit: "minutes",
    },
    description:
      "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
  },
  {
    id: 2,
    title: "Restorative Sleep",
    tag: {
      icon: "/icons/restorative-sleep.svg",
      value: "8",
      unit: "hours",
    },
    img: "/images/pillar-3.jpeg",
    description:
      "Consistent, quality sleep is essential for cognitive function and physical ealth.",
  },
  {
    id: 3,
    title: "Stress Management",
    img: "/images/pillar-4.jpeg",
    tag: {
      icon: "/icons/stress-management.svg",
      value: "60",
      unit: "bpm",
    },
    description:
      "Effective stress management techniques are crucial for mental well-being and overall health.",
  },
  {
    id: 4,
    title: "Social Connection",
    img: "/images/pillar-5.jpeg",
    tag: {
      icon: "/icons/social-connection.svg",
      value: "Feeling",
      unit: "better",
    },
    description:
      "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
  },
  {
    id: 5,
    title: "Substance abuse",
    tag: {
      icon: "/icons/substance-abuse.svg",
      value: "62",
      unit: "days;",
    },
    img: "/images/pillar-6.jpeg",
    description:
      "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
  },
];

function SixPillars() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeID, setActiveID] = useState(0);

  const scrollToCard = (step: "next" | "prev" | number) => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth =
      window.innerWidth >= 1280 ? 400 : container.offsetWidth * 0.8;
    const gap = 23;

    let newActiveID = activeID;
    if (step === "next" && activeID < cards.length - 1) {
      newActiveID = activeID + 1;
    } else if (step === "prev" && activeID > 0) {
      newActiveID = activeID - 1;
    } else if (typeof step === "number") {
      newActiveID = step;
    }

    const scrollPosition = newActiveID * (cardWidth + gap);

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    setActiveID(newActiveID);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (window.innerWidth >= 1280) return;
      const containerWidth = container.offsetWidth;
      const cardWidth =
        window.innerWidth >= 1280 ? 500 : container.offsetWidth * 0.8;
      const centerPosition = container.scrollLeft + containerWidth / 2;
      const newIndex = Math.floor(centerPosition / (cardWidth + 16));
      setActiveID(Math.min(Math.max(0, newIndex), cards.length - 1));
    };

    const handleWheel = (event: WheelEvent) => {
      if (window.innerWidth >= 1280 && event.deltaX !== 0) {
        event.preventDefault();
      }
    };

    container.addEventListener("scroll", handleScroll);
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="pillars__container">
      <div className="shadow-box-3" />
      <div className="pillars__heading">
        <h2 className="pillars__heading-text">HOW IT WORKS</h2>
        <div className="pillars__heading-wrapper">
          <div className="pillars__heading-style">
            <span className="pillars__heading--gradient">
              Lifestyle as medicine:
            </span>
            <span className="pillars__heading-secondary-text">
              The six pillars
            </span>
          </div>
          <div className="pillars__card-buttons">
            <button
              onClick={() => scrollToCard("prev")}
              disabled={activeID === 0}
            >
              <img src="/icons/arrow-btn-left.svg" />
            </button>
            <button
              onClick={() => scrollToCard("next")}
              disabled={activeID === cards.length - 1}
            >
              <img src="/icons/arrow-btn-right.svg" />
            </button>
          </div>
        </div>
      </div>
      <div className="pillars__card-index">
        {cards.map((card) => (
          <CardIndex
            key={card.id}
            id={card.id}
            title={card.title}
            activeID={activeID}
            scrollToCard={scrollToCard}
          />
        ))}
      </div>
      <div className="pillars__card-container" ref={containerRef}>
        {cards.map((card) => (
          <PillarCard key={card.id} card={card} activeID={activeID} />
        ))}
      </div>
    </section>
  );
}

function CardIndex({
  title,
  activeID,
  id,
  scrollToCard,
}: {
  title: string;
  activeID: number;
  id: number;
  scrollToCard: (id: number) => void;
}) {
  const changeActiveID = useCallback(() => {
    scrollToCard(id);
  }, [id, scrollToCard]);

  return (
    <div
      className={`index ${activeID === id ? "index--active" : ""}`}
      onClick={changeActiveID}
    >
      <span className="index__text">{title}</span>
    </div>
  );
}

export default SixPillars;
