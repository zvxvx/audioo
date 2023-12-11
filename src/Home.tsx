import Audio from "./Audio";
import News from "./News";
import home from "./assets/playlists/home";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 p-5 justify-center">
        {home.map(({ id, sound, image }) => {
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