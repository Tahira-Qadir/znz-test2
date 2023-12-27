import "./App.css";
import Blog from "./components/Blog";
import Company from "./components/Company";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ShopNow from "./components/ShopNow";


function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        <Products />
        <Company />
        <Blog />
        <ShopNow />
        <Footer />
      </div>
    </>
  );
}

export default App;
