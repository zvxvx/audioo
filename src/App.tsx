import { Howl, Howler } from 'howler';
import logo from './assets/img/audiologo.svg';
import lightning from './assets/img/bolt.png?audio';

function App() {


  return (
    <div className='h-[100dvh] flex flex-col items-center bg-purple-950/20 text-slate-200'>
      <img src={logo} alt="audioo" className='w-1/2' />
      <button><img src={lightning} alt="lightning" /></button>
    </div>
  )
}

export default App
