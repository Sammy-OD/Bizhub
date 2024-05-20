import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../store/hooks";
import { login } from "../../store/features/authSlice";
import { BASE_URL } from "../../config";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const loginUser = async () => {
    try {
      if (!email || !password) {
        return console.log('field cannot be empty');
      }

      const res = await fetch(`${BASE_URL}/auth/login`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({email, password})
      });

      const result = await res.json();

      setEmail('');
      setPassword('');

      if (result.statusCode === 403) {
        return console.log(result.message);
      }

      dispatch(login(result.accessToken));

      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }

  return (
    <div className='tracking-wide container mx-auto h-[100vh] p-4'>
      <div className="flex justify-center items-center h-full w-full min-h-[520px]">
        <div className="w-96">
          <h1 className="text-center text-5xl font-semibold mb-3">BizHub</h1>
          <div>
            <div className="p-6 shadow-md">
              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="email" className="text-xl">Email</label>
                <input className="p-2 outline outline-orange-600" type="text" value={email} onChange={(e)=> setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="password" className="text-xl">Password</label>
                <input className="p-2 outline outline-orange-600" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
              </div>
              <button className="p-2 text-center w-full bg-orange-600 text-white mb-4" onClick={loginUser}>Login</button>
              <p className="text-center">Don't have an account? <NavLink to="/register" className="text-orange-600">Register</NavLink></p>
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

export default Login