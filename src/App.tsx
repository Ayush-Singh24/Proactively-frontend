import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import Navbar from "./components/Navbar/Navbar";
import SixPillars from "./components/SixPillars/SixPillars";

function App() {
  return (
    <main className="main-container">
      <section>
        <Navbar />
        <MainContent />
      </section>
      <SixPillars />
    </main>
  );
}

export default App;
