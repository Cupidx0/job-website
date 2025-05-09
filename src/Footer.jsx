
import React from 'react';
import './index.css';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Footer(){
    const date = new Date().getFullYear();
    return (
        <footer 
            className="flex flex-col items-center justify-center bg-black text-white absolute bottom-0 w-full ">
            <p className=" ml-15 flex flex-direction-row justify-center items-center">
                <nav className="mr-3">
                    <ul className="ml-4 block space-x">
                        <li className='flex item-center gap-2 transition-transform hover:scale-105 hover:text-blue-500'>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li className='flex item-center gap-2 transition-transform hover:scale-105 hover:text-blue-500'>
                            <Link to='/j'>Services</Link>
                        </li>
                        <li className='flex item-center gap-2 transition-transform hover:scale-105 hover:text-blue-500'>
                            <a href="#products">Products</a>
                        </li>
                    </ul>
                </nav>
                <nav className="mr-6">
                    <ul className="ml-4 block space-x">
                        <li className='flex item-center gap-2 transition-transform hover:scale-105 hover:text-blue-500'>
                            <a href="#about">About</a>
                        </li>
                        <li className='flex item-center gap-2 transition-transform hover:scale-105 hover:text-blue-500'>
                            <a href="#contact">Contact</a>
                        </li>
                        <li className='flex item-center gap-2 transition-transform hover:scale-105 hover:text-blue-500'>
                            <a href="#privacy">Privacy Policy</a>
                        </li>
                    </ul>
                </nav>
                <nav className="mr-3">
                    <ul className="ml-3 block space-x ">
                        <li className='flex item-center gap-2 transition-transform hover:scale-105 hover:text-blue-500'>
                            <a href="#terms">Terms of Service</a>
                        </li>
                        <li className='flex item-center gap-2 transition-transform hover:scale-105 hover:text-blue-500'>
                            <a href="#faq">FAQ</a>
                        </li>
                        <li className='flex item-center gap-2 transition-transform hover:scale-105 hover:text-blue-500'>
                            <Link to='/signup'>Sign Up</Link>
                        </li>
                    </ul>
                </nav>
                <nav className="mr-3">
                    Follow us on:
                    <ul className="ml-4 block space-x text-center">
                    <li>
                        <a 
                            href="https://twitter.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 transition-transform hover:scale-105 hover:text-blue-500">
                            <FaTwitter size={25} className="bg-blue-700 rounded-xl p-1" />
                            Twitter
                        </a>
                    </li>
                    <li><a href="https://facebook.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 transition-transform hover:scale-105 hover:text-blue-500">
                            <FaFacebook size={25} className="bg-blue-700 rounded-xl p-1" />
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='flex item-center gap-2 transition-transform hover:scale-105 hover:text-orange-300'>
                            <FaInstagram size={25} className='bg-orange-600 rounded-md p-0'/>
                            Instagram
                        </a>
                    </li>
                    </ul>
                </nav>
            </p>
            <p>&copy; {date} Godwin Ltd. All rights reserved.</p>
        </footer>
        )
}
export default Footer