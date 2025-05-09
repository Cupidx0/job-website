import React, {useState} from 'react';
import './index.css';
import {toast} from 'react-toastify';
//import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { auth} from './firebase';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './components/customIcons';
import { GoogleAuthProvider,createUserWithEmailAndPassword,signInWithPopup} from 'firebase/auth';
export const SignUp =()=>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSignup = async(e)=>{
      e.preventDefault();
      if(!firstName||!lastName||!email||!password||!confirmPassword){
        setError("please fill in your details !");
        toast.error('please fill in your details!');
        return;
      }else if(password != confirmPassword){
        setError("passwords does not match!");
        toast.error('passwords does not match!');
      }
      setError("");
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created:", userCredential.user.email);
        toast.success("Signup successful!");
        navigate('/home');
      } catch (err) {
        console.error(err);
        toast.error(err.message);
      }
    };
    const googleUp = async()=>{
      const provider = new GoogleAuthProvider();
      try {
        const userGoogleCredential = await signInWithPopup(auth,provider);
        console.log("User created:", userGoogleCredential.user);
        toast.success("Signup successful!");
        navigate('/home');
      } catch (err) {
        console.error(err);
        toast.error(err.message);
      }
    };
    return(
        <div className="max-w-md text-white mx-auto p-3 bg-black border border-gray-600 rounded-xl shadow-md mb-10 mt-0 overflow-scroll">
      <h2 className="text-xl text-center font-bold mb-1">Create An Account</h2>
      <form  className="space-y mb-1" onSubmit={handleSignup}>
        <div>
          <label htmlFor='firstname' className="block text-sm font-medium">First Name</label>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value = {firstName}
            onChange ={(e)=> setFirstName(e.target.value)}
            className="mt-1 block w-full border px-3 py-1 rounded-md text-white"
          />
        </div>
        <div>
          <label htmlFor='lastname' className="block text-sm font-medium">Last Name</label>
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value = {lastName}
            onChange = {(e)=> setLastName(e.target.value)}
            className="mt-1 block w-full border px-3 py-1 rounded-md text-white"
          />
        </div>
        <div>
          <label htmlFor='email' className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value = {email}
            onChange = {(e)=>setEmail(e.target.value)}
            className="mt-1 block w-full border px-3 py-1 rounded-md text-white"
          />
        </div>
        <div>
          <label htmlFor='password' className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value = {password}
            onChange = {(e)=>setPassword(e.target.value)}
            className="mt-1 block w-full border px-3 py-1 rounded-md text-white"
          />
          <label htmlFor='confirmpassword' className="block text-sm font-medium">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value = {confirmPassword}
            onChange = {(e)=>setConfirmPassword(e.target.value)}
            className="mt-1 block w-full border px-3 py-1 mb-1 rounded-md text-white"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className='text-center'>
          <button
            type="submit"
            className="w-full border border-gray-600 bg-green-600 text-white py-1 rounded-md hover:bg-blue-700"
          >
            Sign Up
          </button>
          <divider>or</divider>
          <button 
            onClick={googleUp}
            className="flex text-center w-full border border-gray-600 bg-black-400 mt-3 text-white py-1 gap-1 items-center pl-[100px] rounded-md hover:bg-black-400"
            ><GoogleIcon className='mt-1 text-center items-center ml-[500px]'/>Sign In With Google</button>
        </div>
        <p className="mt-4 text-sm  text-center">
          Already have an account?{' '}
          <Link to ="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </form>
    </div>
    )
}
export default SignUp