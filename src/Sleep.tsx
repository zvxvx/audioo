import Audio from './Audio';
import sleep from './assets/playlists/sleep/sleep';

const Sleep = () => {
  document.documentElement.style.setProperty('background', '#19202f');
  document.documentElement.style.setProperty('color', '#4cc594');
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5 pb-5 px-5 justify-center">
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