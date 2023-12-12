import zen from "./assets/playlists/zen/zen";
import Audio from "./Audio";
const Zen = () => {
  document.documentElement.style.setProperty('background', '#644668');
  document.documentElement.style.setProperty('color', '#8dd3dd');
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5 pb-5 px-5 justify-center">
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