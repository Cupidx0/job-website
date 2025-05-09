import React from "react";
import { toast } from "react-toastify";
import { signOut,sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
export const UserDetails =()=>{
    const navigate = useNavigate();
    const user = auth.currentUser;
    const logOut = async()=>{
        try {
        await signOut(auth);
        toast.success("Signout successful!");
        navigate('/home');
        } catch (err) {
        console.error(err);
        toast.error(err.message);
        }    
    };
    const resetPassword = async()=>{
        if(user&&user.email){
            try{
                await sendPasswordResetEmail(auth, user.email);
                toast.success('reset password link sent');
            }catch(err){
                console.error(err.message);
                toast.error(err.message);
            }
        }else{
            console.error(err.message);
            toast.error(err.message);
        }
    };
    return(
        <>
            <div className="top-0 m-4">
                <h2 className="text-2xl font-bold">profile</h2>
                <p>View all your profile details here.</p>
            </div>
            <div className="flex gap-3">
                <section className="flex flex-col items-center justify-center p-4 border border-gray-400 bg-gray-900 rounded-md max-w-[250px] max-h-[400px] ml-4 cursor-grab transition-transform duration-300 overflow-scroll ease-in-out">
                    <h3>{user? user.email : 'not logged in'}</h3>
                    <button
                    onClick={resetPassword}
                    >reset password</button>
                </section>
                <section className="flex flex-col items-center justify-center p-4 border border-gray-400 bg-gray-900 rounded-md max-w-[350px] max-h-[400px] cursor-grab transition-transform duration-300 overflow-scroll ease-in-out">
                    <h4>Bio and other details</h4>
                </section>
            </div>
            <button 
             className=" m-6 rounded-md p-1 text-md cursor-pointer bg-red-500 hover:bg-red-400"
             onClick={logOut}
             >logout</button>
        </>
    )
}
export default UserDetails