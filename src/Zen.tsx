import zen from "./assets/playlists/zen/zen";
import Audio from "./Audio";
const Zen = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pb-5 px-5 justify-center">
      {zen.map(({ id, sound, image }) => {
        return (
          <div key={id}>
            <Audio url={sound} img={image} id={id} />
          </div>
        )
      })}
    </div>
  )
}

export default Zen