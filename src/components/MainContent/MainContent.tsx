import FindNow from "../FindNow/FindNow";
import ImageLoop from "../ImageLoop/ImageLoop";
import "./index.css";
function MainContent() {
  return (
    <section className="container">
      <div className="content">
        <h1 className="content__heading">
          Book an appointment with{" "}
          <span className="content__heading-gradient-text">
            lifestyle medicine{" "}
          </span>
          experts
        </h1>
        <p className="content__description">
          Optimize your lifestyle and reverse chronic diseases.
        </p>
      </div>
      <FindNow />
      <ImageLoop />
      <div className="shadow-box-1" />
      <div className="shadow-box-2" />
    </section>
  );
}

export default MainContent;
