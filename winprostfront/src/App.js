import './App.css';
import Pages from './pages/index';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'



function App() {

  return (
    <Router>
      <Pages /> 
    </Router>
  );
}

export default App;
