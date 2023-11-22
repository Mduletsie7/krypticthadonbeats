import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-hero-section'>
        <h1>Latest Release</h1></div>

      <Hero />
      <Footer />
    </div>
  );
}

export default App;
