
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Footer from './components/footerMain';
import LandingPage from './components/landingPage';
import Navbar from './components/navbarMain';


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
