import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import LeaseBeats from './components/LeaseBeats';
// import Discography from './components/Discography';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <LeaseBeats />
      {/* <Discography /> */}
      <Footer />
    </div>
  );
}

export default App;
