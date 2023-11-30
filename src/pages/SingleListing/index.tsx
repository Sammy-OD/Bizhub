import { Navbar } from "../../components"


const SingleListing = () => {
  return (
    <div className="tracking-wide">
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
    </div>
  )
}

export default SingleListing