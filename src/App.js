import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SchoolList from "./components/SchoolList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchoolContacts from "./components/SchoolContacts";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app__body">
          <Routes>
            <Route path="/" element={<SchoolList />} />
            <Route path="/school" element={<SchoolContacts />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
