import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import GoodBooks from './components/GoodBooks';

const bookData = {
  JavaScript: [
    { name: "You Don’t Know JS", ratings: "4.5/5" },
    {
      name: "Effective JavaScript: 68 specific ways to harness the power of JavaScript",
      ratings: "4/5",
    },
    { name: "A Smarter Way to Learn JavaScript", ratings: "4.2/5" }
  ],
  SciFi: [
    { name: "The Martian", ratings: "4.4/5" },
    { name: "Nineteen Eighty-Four ", ratings: "4.2/5" },
    { name: "The Time Machine ", ratings: "4/5" },
  ],
  Mystery: [
    { name: "The Silent Patient", ratings: "4.1/5" },
    { name: "Murder on the Orient Express", ratings: "4.2/5" },
    { name: "The Hound of the Baskervilles", ratings: "4.1/5" }
  ],
};

function App() {
  return (
    <div>
      <Header/>
      <GoodBooks/>
      <Footer/>
    </div>
  );
}

export default App;
