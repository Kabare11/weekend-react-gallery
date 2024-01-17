import GalleryList from "../GalleryList/GalleryList";
import "../../index.css";

function App() {
  return (
    <div data-testid="app">
      <header>
        <h1>React Gallery</h1>
      </header>
      //todo Parent of all gallery items
      <GalleryList />
    </div>
  );
}

export default App;
