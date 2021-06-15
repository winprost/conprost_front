import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import TeamBoard from './pages/teamBoard'
import ContestDetail from './pages/contestDetail'
import 'bootstrap/dist/css/bootstrap.css'



function App() {

  return (
    <div className="App">
      <Header />
      <Main /> 
      <TeamBoard/>
      <ContestDetail/>
      <Footer />
    </div>
  );
}

export default App;
