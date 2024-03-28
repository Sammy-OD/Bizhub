import { NavLink } from "react-router-dom"

const Create = () => {
  return (
    <div className='tracking-wide container mx-auto h-[100vh] p-4'>
      <div className="flex justify-center items-center h-full w-full min-h-[550px]">
        <div className="w-96 md:w-[50%] lg:w-[50%]">
          <h1 className="text-center text-5xl font-semibold mb-3">Create Listing</h1>
          <div>
            <form className="p-6 shadow-md">
              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="email" className="text-xl">Business Name</label>
                <input className="p-2 outline outline-orange-600" type="text" />
              </div>
              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="password" className="text-xl">Location</label>
                <input className="p-2 outline outline-orange-600" type="text" />
              </div>
              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="confirm_password" className="text-xl">Description</label>
                <textarea rows={6} className="p-2 outline outline-orange-600 resize-none"></textarea>
              </div>
              <button className="p-2 text-center w-full bg-orange-600 text-white mb-4">Create</button>
            </form>

            <div className="mt-8 text-center">
              <NavLink to="/" className="transition duration-300 hover:text-orange-600">&#8592; Back to Home</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create