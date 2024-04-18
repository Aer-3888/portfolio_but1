import { NavLink } from 'react-router-dom/dist'

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-20 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p >Accueil</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/AboutMe' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          A propos
        </NavLink>
        
      </nav>
    </header>
  )
}

export default Navbar