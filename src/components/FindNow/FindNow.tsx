import "./index.css";

const fields = [
  {
    icon: "/icons/search-icon.svg",
    placeholder:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime perspiciatis ipsa nihil totam, error id dolor. Perspiciatis soluta quisquam cumque sit in qui quasi, itaque maiores consequatur fugit ipsa officiis!",
  },
  {
    icon: "/icons/location-icon.svg",
    placeholder:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime perspiciatis ipsa nihil totam, error id dolor. Perspiciatis soluta quisquam cumque sit in qui quasi, itaque maiores consequatur fugit ipsa officiis!",
  },
  {
    icon: "/icons/insurance.svg",
    placeholder:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime perspiciatis ipsa nihil totam, error id dolor. Perspiciatis soluta quisquam cumque sit in qui quasi, itaque maiores consequatur fugit ipsa officiis!",
  },
];

function FindNow() {
  return (
    <div className="form">
      {fields.map((field, index) => (
        <div className="form__input-container" key={index}>
          <img className="form__input-img" src={field.icon} />
          <input
            type="text"
            className="form__input"
            placeholder={field.placeholder}
          />
        </div>
      ))}
      <button className="form__button">
        <img src="/icons/search-icon-white.svg" />
        <span>Find now</span>
      </button>
    </div>
  );
}

export default FindNow;
