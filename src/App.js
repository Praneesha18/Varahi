import Navbar from './components/Navbar'
import Home from './pages/Home';
import DataProvider from './data/ProductDetails';
function App() {
  return (
<>
<Navbar/>
<DataProvider><Home/></DataProvider>

</>
  );
}

export default App;
