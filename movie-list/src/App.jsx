import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MovieBox from "./Components/MovieBox";
import MovieGrid from "./Components/MovieGrid";

function App() {
  return (
    <div>
      <Header />
      <MovieGrid />
      <Footer />
      <BrowserRouter>
        <Routes>
         <Route path='/movies/:id'  element= {<MovieBox />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
