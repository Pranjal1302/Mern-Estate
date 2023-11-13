import { useState } from 'react'
// import { flushSync } from 'react-dom';
import {Link} from 'react-router-dom'

export default function SignUp() {
  const [formdata,setformdata] = useState({})
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);
  const handleChange = (e) =>{
    setformdata({
      ...formdata,
      [e.target.id]:e.target.value,
    });
  };
  const handleSubmit = async (e) =>{
    try {
      setloading(true);
      seterror(false);
      e.preventDefault();
    const res = await fetch('/api/auth/signup',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(formdata),
    });
    const data = await res.json();
    setloading(false);
    if(data.success === false){
      seterror(true);
      return;
    }
    } catch (error) {
      setloading(true);
      seterror(true);
    }
    
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <input type='text' placeholder='username' className='border p-3 rounded-lg' id = 'username'onChange={handleChange}/>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id = 'email'onChange={handleChange}/>
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id = 'password'onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to= {"/sign-in"}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>
        {error && 'Something went wrong!!!'}
      </p>
    </div>
  )
}
