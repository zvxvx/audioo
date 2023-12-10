import Audio from "./Audio";
import News from "./News";
import home from "./assets/playlists/home";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
        {home.map(({ id, sound, image }) => {
          return (
            <div key={id}>
              <Audio url={sound} img={image} />
            </div>
          )
        })}
      </div>
      <News/>
    </>
  )
}

export default Home