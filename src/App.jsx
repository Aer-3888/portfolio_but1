import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Apropos, Home, Contact, Projet } from './pages';
const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/<propo />" element={<Apropos />} />
          <Route path="/projet" element={<Projet />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App