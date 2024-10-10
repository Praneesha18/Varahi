import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DataProvider from "./data/ProductDetails";
import Footer from "./components/Footer";
import Allrouts from "./route/Allrouts";
function App() {
  return (
    <>
      <DataProvider>
        <Navbar />
        <Allrouts />
        <Footer />
      </DataProvider>
    </>
  );
}

export default App;
