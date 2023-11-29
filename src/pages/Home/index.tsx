import img from '../../assets/images/main-scaled.jpg'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='tracking-wide'>
      {/* hero */}
      <div id='hero' className='relative w-full h-[65vh]'>
        <div className='w-full h-full bg-black/[.65]'>
          {/* navbar */}
          <nav className='container flex mx-auto p-4 justify-between items-center'>
            <div className='text-white'>
              Logo
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

          {/* hero text */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
            <h1 className='text-white text-6xl font-semibold mb-7'>Explore your City</h1>
            <h3 className='text-white'>Let's uncover the best places to do business</h3>
          </div>
        </div>
      </div>

      <main className='container mx-auto p-4 mb-12'>
        <section className='my-10 '>
          <h2 className='text-3xl'>Business Listings</h2>
        </section>

        <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols- gap-[4rem]'>
          {Array(4).fill(0).map((_, index) => (
            <div key={index} className='transition duration-300 flex flex-col md:flex-row min-h-[250px] shadow hover:shadow-lg'>
              <div className='w-full h-1/2 md:w-1/2 md:h-full'>
                <img src={img} className='w-full h-full object-cover' alt="" />
              </div>
              <div className='w-full md:w-1/2 p-4 flex flex-col justify-between gap-8'>
                <div>
                  <h4 className='text-2xl font-semibold mb-3'>Business Name</h4>
                  <p className='text-neutral-500 mb-3'>This is just some little content to fill in space for business description</p>
                  <div className='flex gap-2'>
                    <span className='text-white bg-orange-600 p-1 px-2 rounded-full text-xs'>carpentry</span>
                    <span className='text-white bg-orange-600 p-1 px-2 rounded-full text-xs'>artisan</span>
                  </div>
                </div>
                <div className='flex gap-1.5 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-600">
                    <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                  </svg>
                  <span className='text-neutral-500'>Nigeria</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className='py-4 bg-black'>
        <div className='container mx-auto p-4'>
          <p className='text-sm text-white text-center'>&copy; 2023 SammyOD. All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default Home