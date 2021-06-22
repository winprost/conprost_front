import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import TeamBoard from './components/teamBoard'
import 'bootstrap/dist/css/bootstrap.css'



function App() {

  return (
    <div className="App">
      <Header />
      <Main /> 
      <Footer />
      <TeamBoard />
    </div>
  );
}

export default App;
