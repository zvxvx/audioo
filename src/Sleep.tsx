import Audio from './Audio';
import sleep from './assets/playlists/sleep/sleep';

const Sleep = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
      {sleep.map(({ id, sound, image }) => {
        return (
          <div key={id}>
            <Audio url={sound} img={image} />
          </div>
        )
      })}
    </div>
  )
}

export default Sleep