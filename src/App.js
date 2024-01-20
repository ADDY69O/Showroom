
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Footer from './components/Footer';
import LandingPage from './components/landingPage';
import Navbar from './components/Navbar';


function App() {
  return <>
  <BrowserRouter>
  <Navbar/>
<Routes>

<Route exact path='/' element={<LandingPage/>} />

</Routes>

</BrowserRouter>
  </>;
}

export default App;
