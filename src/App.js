import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import LeaseBeats from './components/LeaseBeats';
import NotableCredits from './components/NotableCredits';
import ContactForm from './components/ContactForm';
// import Discography from './components/Discography';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <LeaseBeats />
      <h1>Notable Credits</h1>
      <NotableCredits />
      <ContactForm />
      {/* <Discography /> */}
      <Footer />
    </div>
  );
}

export default App;
