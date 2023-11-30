import img from '../../assets/images/main-scaled.jpg';

const ListingCard = () => {
  return (
    <div className='transition duration-300 flex flex-col md:flex-row min-h-[250px] shadow hover:shadow-lg'>
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
            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
          <span className='text-neutral-500'>Nigeria</span>
        </div>
      </div>
    </div>
  )
}

export default ListingCard