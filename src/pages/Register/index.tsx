import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { BASE_URL } from "../../config";

const Register = () => {
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      if (!firstname || !lastname || !email || !password || !passwordConfirm || !phone) {
        return console.log('field cannot be empty');
      }
      
      if (password != passwordConfirm) {
        return console.log('passwords do not match');
      }

      const res = await fetch(`${BASE_URL}/auth/register`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({email, firstname, lastname, password, phone})
      });

      const result = await res.json();

      if (result.statusCode === 409) {
        return console.log(result.message);
      }

      setEmail('');
      setFirstname('');
      setLastname('');
      setPassword('');
      setPasswordConfirm('');
      setPhone('');

      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  }

  return (
    <div className='tracking-wide container mx-auto h-[100vh] p-4'>
      <div className="flex justify-center items-center h-full w-full min-h-[850px]">
        <div className="w-96">
          <h1 className="text-center text-5xl font-semibold mb-3">BizHub</h1>
          <div>
            <div className="p-6 shadow-md">
              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="email" className="text-xl">Email</label>
                <input className="p-2 outline outline-orange-600" type="text" value={email} onChange={(e)=> setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="email" className="text-xl">First Name</label>
                <input className="p-2 outline outline-orange-600" type="text" value={firstname} onChange={(e)=> setFirstname(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="email" className="text-xl">Last Name</label>
                <input className="p-2 outline outline-orange-600" type="text" value={lastname} onChange={(e)=> setLastname(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="password" className="text-xl">Password</label>
                <input className="p-2 outline outline-orange-600" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="confirm_password" className="text-xl">Confirm Password</label>
                <input className="p-2 outline outline-orange-600" type="password" value={passwordConfirm} onChange={(e)=> setPasswordConfirm(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="phone" className="text-xl">Phone Number</label>
                <input className="p-2 outline outline-orange-600" type="text" value={phone} onChange={(e)=> setPhone(e.target.value)} />
              </div>
              <button className="p-2 text-center w-full bg-orange-600 text-white mb-4" onClick={registerUser}>Register</button>
              <p className="text-center">Already have an account? <NavLink to="/login" className="text-orange-600">Login</NavLink></p>
            </div>

            <div className="mt-8 text-center">
              <NavLink to="/" className="transition duration-300 hover:text-orange-600">&#8592; Back to Home</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register