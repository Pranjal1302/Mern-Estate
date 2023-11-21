import { useState } from 'react'
// import { flushSync } from 'react-dom';
import {Link ,useNavigate} from 'react-router-dom'

export default function SignIn() {
  const [formdata,setformdata] = useState({})
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
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
    const res = await fetch('/api/auth/signin',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(formdata),
    });
    const data = await res.json();
   
    if(data.success === false){
      seterror(true);
      return;
    }
    setloading(false);
    seterror(null);
    navigate('/');
    } catch (error) {
      setloading(true);
      seterror(true);
    }
    
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id = 'email'onChange={handleChange}/>
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id = 'password'onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to= {"/sign-up"}>
          <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>
        {error && 'Something went wrong!!!'}
      </p>
    </div>
  )
}
