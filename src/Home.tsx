import Audio from "./Audio";
import News from "./News";
import backyard from "./assets/playlists/backyard/backyard";

const Home = () => {
  document.documentElement.style.setProperty('background', '#40535e');
  document.documentElement.style.setProperty('color', '#f2b5aa');
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pb-5 px-5 justify-center">
        {backyard.slice(0, 3).map(({ id, sound, image }) => {
          return (
            <div key={id}>
              <Audio url={sound} img={image} id={id} />
            </div>
          )
        })}
      </div>
      <div className="hidden sm:block">{<News />}</div>
    </>
  )
}

export default Home