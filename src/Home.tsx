import Audio from "./Audio";
import News from "./News";
import backyard from "./assets/playlists/backyard/backyard";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 p-5 justify-center">
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