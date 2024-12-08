import "./index.css";

const fields = [
  {
    icon: "/icons/search-icon.svg",
    placeholder: "Condition, procedure, speciality",
  },
  {
    icon: "/icons/location-icon.svg",
    placeholder: "City, state, or zipcode",
  },
  {
    icon: "/icons/insurance.svg",
    placeholder: "Insurance carrier",
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
