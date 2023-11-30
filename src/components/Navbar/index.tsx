import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [scrollDistance, setScrollDistance] = useState(0);

  const handleScroll = () => {
    setScrollDistance(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className={`transition-all duration-300 fixed w-full z-40 py-4 backdrop-blur ${scrollDistance > 150 ? "bg-black/80 py-2" : null}`}>
      <nav className='container flex mx-auto p-4 justify-between items-center'>
        <div className='text-white font-semibold text-3xl'>
          BizHub
        </div>
        <ul className='flex gap-7 text-white'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar