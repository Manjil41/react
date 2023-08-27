
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from './About';
import Home from './Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />


        {/* defining routes */}
        <Routes>
          <Route path='about' element={<About />} />
          <Route path='/' element={<Home />} />

        </Routes>


        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
