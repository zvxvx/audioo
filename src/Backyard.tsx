import Audio from "./Audio";
import { home, backyard } from "./sounds";

const Backyard = () => {
  return (
    <>
      {home.map(({ id, sound, image }) => {
        return (
          <div key={id}>
            <Audio url={sound} img={image} />
          </div>
        )
      })}
      {backyard.map(({ id, sound, image }) => {
        return (
          <div key={id}>
            <Audio url={sound} img={image} />
          </div>
        )
      })}
    </>
  )
}

export default Backyard