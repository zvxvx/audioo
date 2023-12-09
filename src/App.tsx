import Audio from "./Audio";
import logo from "./assets/img/logo.svg";
import thunder from "./assets/audio/one-thunder.mp3";
import lightning from "./assets/img/lightning.png?icon";
import rain from "./assets/audio/two-rain.mp3";
import rainImg from "./assets/img/rain.png?icon";
import wind from "./assets/audio/three-wind.mp3";
import windImg from "./assets/img/wind.png?icon";
function App() {
  return (
    <div className="h-[100dvh] text-slate-200">
      <img src={logo} alt="audioo" className="w-1/2 mx-auto" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 justify-center">
        <Audio url={thunder} img={lightning} />
        <Audio url={rain} img={rainImg} />
        <Audio url={wind} img={windImg} />
      </div>
    </div>
  );
}

export default App;
