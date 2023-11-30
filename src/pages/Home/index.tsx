import { ListingCard, Navbar } from '../../components'

const Home = () => {
  return (
    <div className='tracking-wide'>
      {/* hero */}
      <div id='hero' className='relative w-full h-[65vh]'>
        <div className='w-full h-full bg-black/[.65]'>
          {/* navbar */}
          <Navbar />

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
            <ListingCard key={index} />
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