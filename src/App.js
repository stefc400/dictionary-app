import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </div>
        <main>
          <Dictionary defaultKeyword="sunset" />
          <Footer />
        </main>
      </div>
    </div>
  );
}
