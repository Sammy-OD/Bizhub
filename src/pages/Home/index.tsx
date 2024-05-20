import { useEffect, useState } from 'react'
import { Footer, ListingCard, Navbar } from '../../components'
import { BASE_URL } from '../../config';

interface Listing {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  description: string;
  imageUrls: string[];
}

const Home = () => {
  const [listings, setListings] = useState<Listing[] | null>(null);

  useEffect(() => {
    const fetchListings = async () => {
      const res = await fetch(`${BASE_URL}/listings`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const result = await res.json();
      
      if (result.length == 0) {
        return;
      }

      setListings(result);
    }

    fetchListings();
  }, [])

  return (
    <div className='tracking-wide'>
      {/* hero */}
      <div id='hero' className='relative w-full h-[65vh]'>
        <div className='w-full h-full bg-black/[.65]'>
          {/* navbar */}
          <Navbar />

          {/* hero text */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
            <h1 className='text-white text-4xl md:text-6xl font-semibold mb-7 text-center'>Explore your City</h1>
            <h3 className='text-white text-center'>Let's uncover the best places to do business</h3>
          </div>
        </div>
      </div>

      <main className='container mx-auto p-4 mb-12'>
        <section className='my-10 '>
          <h2 className='text-3xl'>Business Listings</h2>
        </section>

        {listings ?
          <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols- gap-[4rem]'>
              {listings.map((listing, i) => (
                <ListingCard key={i} listing={listing} />
              ))}
          </section>
          :
          <section className='flex w-full h-[100px] justify-center align-middle'>
            <p className='text-center text-xl'>No Listings Available</p>
          </section>
        }
      </main>

      <Footer />
    </div>
  )
}

export default Home