import './App.css';
import RouterComponent from './routes';
import {
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RouterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
