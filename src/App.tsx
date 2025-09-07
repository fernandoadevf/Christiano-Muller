import Linktree from './components/Linktree'
import BackgroundVideo from './components/ui/BackgroundVideo'

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundVideo />
      <div className="relative z-10">
        <Linktree />
      </div>
    </div>
  )
}

export default App
