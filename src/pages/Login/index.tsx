

const Login = () => {
  return (
    <div className='tracking-wide container mx-auto h-[100vh]'>
      <div className="flex justify-center items-center h-full w-full">
        <div className="w-96">
          <h1 className="text-center text-5xl font-semibold mb-3">BizHub</h1>
          <div>
            <form className="p-6 shadow-md">
              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="username" className="text-xl">Username</label>
                <input className="p-2 outline outline-orange-600" type="text" />
              </div>
              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="username" className="text-xl">Password</label>
                <input className="p-2 outline outline-orange-600" type="password" />
              </div>
              <button className="p-2 text-center w-full bg-orange-600 text-white mb-4">Login</button>
              <p className="text-center">Don't have an account? <a href="#" className="text-orange-600">Register</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login