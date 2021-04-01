import "./styles/App.scss";

import MusicPlayer from "./components/MusicPlayer";
import Song from "./components/Song";

function App() {
  return (
    <div className="App">
      <Song></Song>
      <MusicPlayer></MusicPlayer>
    </div>
  );
}

export default App;
