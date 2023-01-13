import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import "./style.css";

export default function App() {
  return (
    <div>
      <div className="business-card">
        <Info />
        <main className="main-content">
          <About />
          <Interests />
        </main>
        <Footer />
      </div>
    </div>
  );
}
