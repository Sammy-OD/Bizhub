import { Footer, Navbar } from "../../components"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Listing {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  description: string;
  imageUrls: string[];
  user: {
    email: string;
    firstname: string;
    lastname: string;
    phone: string;
  }
}

const initialListing: Listing = {
  id: '',
  name: '',
  city: '',
  country: '',
  address: '',
  description: '',
  imageUrls: [],
  user: {
    email: '',
    firstname: '',
    lastname: '',
    phone: ''
  }
};

const SingleListing = () => {
  const [listing, setListing] = useState<Listing>(initialListing);
  const { id } = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      const res = await fetch(`http://localhost:3000/listings/${id}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const result = await res.json();
      setListing(result);
    }

    fetchListing();
  }, [])

  return (
    <div className="tracking-wide">
        {/* hero */}
        <div id="hero2" style={{backgroundImage: `url(${listing.imageUrls[0]})`}} className='relative w-full h-[65vh]'>
        <div className='w-full h-full bg-black/[.65]'>
          {/* navbar */}
          <Navbar />

          {/* hero text */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center w-full'>
            <h1 className='text-white text-2xl md:text-6xl font-semibold mb-7 text-center'>{listing.name}</h1>
            <div className='flex gap-1.5 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              <p className='text-white text-xs md:text-base'>{listing.city}, {listing.country}</p>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto max-w-3xl p-4 py-32">
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-medium">Description</h2>
          <div>
            <p className="mb-4">{listing.description}</p>
            {/* <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or rannjdomised words which don't look even slightly believable. If you are going to use a passage of fhorem Ipvbsum.</p> */}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-medium">Featured Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {listing.imageUrls && listing.imageUrls.map((img, i) => (
              <div className="h-48" key={i}><img className="w-full h-full object-cover" src={img} alt="" /></div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-medium">Location</h2>
          <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            {listing.address}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-medium">Contact</h2>
          <div className="flex flex-col md:flex-row gap-12 justify-between">
            <div className="flex flex-col items-center gap-4">
              <div className="border p-4 rounded-full border-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                </svg>
              </div>
              {listing.user.firstname} {listing.user.lastname}
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="border p-4 rounded-full border-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
              </div>
              {listing.user.phone}
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="border p-4 rounded-full border-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </div>
              {listing.user.email}
            </div>
          </div>

          <form className="w-full mt-10">
            <input type="text" placeholder="Name" className="w-full border border-gray-500 p-2 px-6 rounded-full mb-4" />
            <input type="text" placeholder="Email" className="w-full border border-gray-500 p-2 px-6 rounded-full mb-4" />
            <textarea rows={5} placeholder="Your Message Here..." className="w-full border border-gray-500 p-2 px-6 rounded-3xl mb-4 resize-none"></textarea>
            <button className="p-2 flex text-center w-full bg-orange-600 text-white rounded-full mb-4 justify-center items-center gap-2 text-lg font-medium">
            <span>Send Message</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default SingleListing