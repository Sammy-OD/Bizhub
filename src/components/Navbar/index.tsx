import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { jwtDecode } from "jwt-decode";

import { useAppSelector } from "../../store/hooks";
import { selectToken } from "../../store/features/authSlice";

interface DecodedToken {
  sub: string;
  // Add other properties if needed
  firstname: string
}

const Navbar = () => {
  const [scrollDistance, setScrollDistance] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const token = useAppSelector(selectToken);
  const decoded = token ? jwtDecode(token) as DecodedToken : null;

  const handleScroll = () => {
    setScrollDistance(window.scrollY);
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className={`transition-all duration-300 fixed w-full z-40 py-4 backdrop-blur ${scrollDistance > 150 ? "bg-black/80 py-[4px]" : null}`}>
      <nav className='container relative flex mx-auto p-4 justify-between items-center'>
        <div className='text-white font-semibold text-3xl'>
          <NavLink to="/">BizHub</NavLink>
        </div>
        <ul className='hidden md:flex items-center gap-7 text-white'>
          {/* <li>
            <NavLink className="transition duration-300 hover:text-orange-600" to='/'>Home</NavLink>
          </li> */}
          {token ?
            <li>
              <p className="font-bold">Hello {decoded && decoded.firstname}</p>
            </li>
            : <>
              <li>
                <NavLink className="transition duration-300 hover:text-orange-600" to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink className="transition duration-300 hover:text-orange-600" to="/register">Register</NavLink>
              </li>
            </>
          }
          <li>
            <NavLink className="bg-orange-600 p-3 px-4 rounded-full" to="/create">&#x2b; Add Listing</NavLink>
          </li>
        </ul>

        {/* mobile */}
        {menuOpen && 
          <ul className='absolute top-full left-0 flex md:hidden flex-col items-center gap-7 bg-black text-white w-full py-8'>
            {/* <li>
              <NavLink className="transition duration-300 hover:text-orange-600" to='/'>Home</NavLink>
            </li> */}
          {token ?
            <li>
              <p>Hello {decoded && decoded.firstname}</p>
            </li>
            : <>
              <li>
                <NavLink className="transition duration-300 hover:text-orange-600" to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink className="transition duration-300 hover:text-orange-600" to="/register">Register</NavLink>
              </li>
            </>
          }
            <li className="bg-orange-600 p-2 px-4 rounded-full">
              <a href="#">&#x2b; Add Listing</a>
            </li>
          </ul>
        }
        <span className="text-white md:hidden" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </span>
      </nav>
    </div>
  )
}

export default Navbar