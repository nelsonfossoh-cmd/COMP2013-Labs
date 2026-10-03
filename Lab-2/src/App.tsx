import './App.css';
import ResortContainer from './components/ResortContainer.tsx';
import data from "./data/data.ts";

function App() {
  return (
    <div>
        <h1>Resorts Life</h1>
        <ResortContainer data = {data} />
    </div>
  );
  
}

export default App;
