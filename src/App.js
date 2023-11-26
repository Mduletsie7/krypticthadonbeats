import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import LeaseBeats from './components/LeaseBeats';
import NotableCredits from './components/NotableCredits';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <LeaseBeats />
      <h1>Production Credits</h1>
      <NotableCredits />
      <Footer />
    </div>
  );
}

export default App;
