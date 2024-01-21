import Audio from "./Audio";
import Info from "./Info";
import backyard from "./assets/playlists/backyard/backyard";

const Home = () => {
  document.documentElement.style.setProperty('background', '#27414e');
  document.documentElement.style.setProperty('color', 'rgb(255, 196, 183)');
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
      <div>{<Info />}</div>
    </>
  )
}

export default Home