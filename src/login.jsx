import React, { use, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import {toast} from 'react-toastify';
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
//import { auth } from "./firebase";
//import { createUserWithEmailAndPassword } from "firebase/auth";
import './index.css';
//import { useState } from "react";
export const Login = ()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();
  const handleLogin = async(e)=> {
    e.preventDefault();
    if(!email||!password){
      setError('please input the details above !');
      toast.error('fill the input to login.');
      return;
    }
    setError(''); 
    await loggedIn();
  }
  const loggedIn = async()=>{
    try{
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log ('logging in :',result.user.email);
      toast.success('login sucessful');
      navigate('/home');
    }catch (err){
      console.error(err);
      toast.error(err.message);
    }
  }
  return (
    <div className="max-w-md mx-auto p-4 bg-black border border-gray-600 rounded-xl shadow-md mt-10">
      <h1 className="text-center  text-2xl font-bold">Login Page</h1>
      <form className="space-y-4" onSubmit={handleLogin}>
        <label className="text-sm font-bold ">
          Email:
          <input type="mail"
           name="Email"
           placeholder="email"
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           className="mt-1 block w-full border px-3 py-2 rounded-md text-white"
            />
        </label>
        <br />
        <label className="text-sm font-bold">
          Password:
          <input type="password"
           name="password"
           placeholder="password"
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
           className="mt-1 block w-full border px-3 py-2 rounded-md text-white"
            />
        </label>
        <br />
        {error && <p className="text-red-500">{error}</p>}
        <button 
            type="submit"
            className="w-full bg-green-600 border border-gray-200 text-white py-2 rounded-md hover:bg-blue-700">
            {/* <Link to="/home">*/}Login{/*</Link>*/}
        </button>
        <p className="mt-4 text-sm text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
export default Login;