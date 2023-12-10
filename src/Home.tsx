import Audio from "./Audio";
import News from "./News";
import { home } from "./sounds";

const Home = () => {
  return (
    <>
      {home.map(({ id, sound, image }) => {
        return (
          <div key={id}>
            <Audio url={sound} img={image} />
          </div>
        )
      })}
    </>
  )
}

export default Home