import Audio from "./Audio";
import thunder from "./assets/audio/one-thunder.mp3";
import lightning from "./assets/img/lightning.png?icon";
import rain from "./assets/audio/two-rain.mp3";
import rainImg from "./assets/img/rain.png?icon";
import wind from "./assets/audio/three-wind.mp3";
import windImg from "./assets/img/wind.png?icon";
const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
        <Audio url={thunder} img={lightning} />
        <Audio url={rain} img={rainImg} />
        <Audio url={wind} img={windImg} />
      </div>
    </>
  )
}

export default Home