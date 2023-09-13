import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MovieBox from "./Components/MovieBox";
import MovieGrid from "./Components/MovieGrid";

const Home = () => {
  return (
    <>
      {" "}
      <Header />
      <MovieGrid />
      <Footer />
    </>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies/:id" element={<MovieBox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
