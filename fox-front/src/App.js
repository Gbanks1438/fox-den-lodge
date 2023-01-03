import image from './images/Big-Bowman-Pond.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
       <div>
          <h1>Frontend stuff</h1>
        </div>
      <header className="App-header">
        <img src={image} className="lodge-image" alt="lodge on Big Bowman Pond" />
      </header>
    </div>
  );
}

export default App;
