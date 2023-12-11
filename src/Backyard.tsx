import Audio from "./Audio";
import home from "./assets/playlists/home";
import backyard from "./assets/playlists/backyard/backyard";

const Backyard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5">
      {home.map(({ id, sound, image }) => {
        return (
          <div key={id}>
            <Audio url={sound} img={image} id={id} />
          </div>
        )
      })}
      {backyard.map(({ id, sound, image }) => {
        return (
          <div key={id}>
            <Audio url={sound} img={image} id={id} />
          </div>
        )
      })}
    </div>
  )
}

export default Backyard