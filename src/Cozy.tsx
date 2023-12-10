import Audio from "./Audio";
import cozy from "./assets/playlists/cozy/cozy";

const Cozy = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
      {cozy.map(({ id, sound, image }) => {
        return (
          <div key={id}>
            <Audio url={sound} img={image} />
          </div>
        )
      })}
    </div>
  )
}

export default Cozy