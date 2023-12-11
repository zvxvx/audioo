import Audio from "./Audio";
import cozy from "./assets/playlists/cozy/cozy";

const Cozy = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pb-5 px-5 justify-center">
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