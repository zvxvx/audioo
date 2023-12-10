import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Backyard from "./Backyard";
import Footer from "./Footer";
import Cozy from "./Cozy";
import Sleep from "./Sleep";

function App() {
  return (
    <div className="h-[100dvh] bg-purple-950/30 text-slate-200">
      <div className="mx-auto w-5/6">
        <Header />
        <div className="bg-slate-950/50 p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/backyard" element={<Backyard />} />
            <Route path="/cozy" element={<Cozy />} />
            <Route path="/sleep" element={<Sleep />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
