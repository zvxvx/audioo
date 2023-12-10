import zen from "./assets/playlists/zen/zen";
import Audio from "./Audio";
const Zen = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
      {zen.map(({ id, sound, image }) => {
        return (
          <div key={id}>
            <Audio url={sound} img={image} />
          </div>
        )
      })}
    </div>
  )
}

export default Zen