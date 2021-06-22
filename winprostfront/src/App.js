import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import ContestDetail from './components/contestDetail'
import 'bootstrap/dist/css/bootstrap.css'



function App() {

  return (
    <div className="App">
      <Header />
      <Main /> 
      <Footer />
      <ContestDetail />
    </div>
  );
}

export default App;
