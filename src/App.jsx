import './App.css';
import RoutesApp from './routes/Routes.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Banner from './components/Banner/Banner.jsx'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RoutesApp/>
    </div>
  )
}

export default App