import Audio from './Audio';
import sleep from './assets/playlists/sleep/sleep';

const Sleep = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5">
      {sleep.map(({ id, sound, image }) => {
        return (
          <div key={id}>
            <Audio url={sound} img={image} id={id} />
          </div>
        )
      })}
    </div>
  )
}

export default Sleep