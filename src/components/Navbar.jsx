import { NavLink } from 'react-router-dom/dist'

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-20 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p >Accueil</p>
        </NavLink>
        
    </header>
  )
}

export default Navbar