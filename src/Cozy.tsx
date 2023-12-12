import Audio from "./Audio";
import cozy from "./assets/playlists/cozy/cozy";

const Cozy = () => {
  document.documentElement.style.setProperty('background', '#411c20');
  document.documentElement.style.setProperty('color', '#e5a4a4');
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5 pb-5 px-5 justify-center">
      {cozy.map(({ id, sound, image }) => {
        return (
          <div key={id}>
            <Audio url={sound} img={image} id={id} />
          </div>
        )
      })}
    </div>
  )
}

export default Cozy