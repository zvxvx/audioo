import Audio from "./Audio";
import backyard from "./assets/playlists/backyard/backyard";
const Backyard = () => {
  document.documentElement.style.setProperty('background', '#5b422b')
  document.documentElement.style.setProperty('color', '#6fc298')
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5 pb-5 px-5 justify-center">
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