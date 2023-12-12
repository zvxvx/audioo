import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Backyard from "./playlists/Backyard";
import Cozy from "./playlists/Cozy";
import Sleep from "./playlists/Sleep";
import Zen from "./playlists/Zen";
import Footer from "./Footer";

function App() {
  return (
    <div className="min-h-[100dvh]">
      <div className="mx-auto sm:w-5/6">
        <Header />
        <div className="min-h-full bg-gradient-to-b from-slate-950/20 to-slate-950/60 border-x border-slate-950/10">
          <Routes>
            <Route path="/index.html" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/backyard" element={<Backyard />} />
            <Route path="/cozy" element={<Cozy />} />
            <Route path="/sleep" element={<Sleep />} />
            <Route path="/zen" element={<Zen />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
