
import './App.css'
import LoopingPlayer from './components/LoopingPlayer'
import ProgressPlayer from './components/ProgressPlayer'
import StopPlayer from './components/StopPlayer'
// import BasicAudioPlayer from './components/Basic'
import VolumeControlPlayer from './components/VolumeControlPlayer'

function App() {
 

  return (
    <div>
      {/* <BasicAudioPlayer/> */}
      <VolumeControlPlayer />
      <LoopingPlayer />
      <StopPlayer />
      <ProgressPlayer/>
    </div>
  )
}

export default App
