import { NavLink, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout, selectToken } from "../../store/features/authSlice";
import { useState } from "react";

const Create = () => {
  const navigate = useNavigate();
  const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    name: '',
    city: '',
    country: '',
    address: '',
    description: '',
    images: []
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e:any) => {
    const images:any = Array.from(e.target.files);
    setFormData({ ...formData, images });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('city', formData.city);
    formDataToSend.append('country', formData.country);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('description', formData.description);
    formData.images.forEach((image: any, index: any) => {
      formDataToSend.append('images', image);
    });

    fetch('http://localhost:3000/listings', {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      method: 'POST',
      body: formDataToSend
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.statusCode == 401) return dispatch(logout());
        navigate('/');
      })
      .catch(error => {
        // Handle error
        console.error('Error:', error);
      });
  };

  return (
    <div className='tracking-wide container mx-auto h-[100vh] p-4'>
      <div className="flex justify-center items-center h-full w-full min-h-[550px]">
        <div className="w-96 md:w-[50%] lg:w-[50%]">
          <h1 className="text-center text-5xl font-semibold mb-3">Create Listing</h1>
          <div>
          <form className="p-6 shadow-md" onSubmit={handleSubmit} >
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="businessName" className="text-xl">Business Name</label>
              <input 
                name="name" 
                className="p-2 outline outline-orange-600" 
                type="text" 
                value={formData.name} 
                onChange={handleChange} 
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="city" className="text-xl">City</label>
              <input 
                name="city" 
                className="p-2 outline outline-orange-600" 
                type="text" 
                value={formData.city} 
                onChange={handleChange} 
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="country" className="text-xl">Country</label>
              <input 
                name="country" 
                className="p-2 outline outline-orange-600" 
                type="text" 
                value={formData.country} 
                onChange={handleChange} 
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="address" className="text-xl">Address</label>
              <input 
                name="address" 
                className="p-2 outline outline-orange-600" 
                type="text" 
                value={formData.address} 
                onChange={handleChange} 
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="description" className="text-xl">Description</label>
              <textarea 
                name="description" 
                rows={3} 
                className="p-2 outline outline-orange-600 resize-none"
                value={formData.description} 
                onChange={handleChange} 
              ></textarea>
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="images" className="text-xl">Choose Images</label>
              <input 
                name="images" 
                type="file" 
                accept="image/*" 
                multiple 
                onChange={handleImageChange} 
              />
            </div>
            <button type="submit" className="p-2 text-center w-full bg-orange-600 text-white mb-4">Create</button>
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