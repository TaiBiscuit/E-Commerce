import React, { useEffect, useState } from 'react';
import { NavItem } from './NavItem';
import { useCartContext } from '../context/CartContext';
import { useUserContext } from '../context/UserContext';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import leDuck from '../assets/yellow-duck.svg'
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const {user} = useUserContext();
  const {cart} = useCartContext();
  const [isUser, setIsUser] = useState(false);
  const navigate = useNavigate();


  function goCart(e){
    e.preventDefault();
    navigate('/cart');
  }

  function logOff(){
    signOut(auth)
  }

  useEffect(() =>{
    if(user == null){
      setIsUser(false)
    } else {
      setIsUser(true)
    }
  }, [user])

 return(
 <>
 <div className="navbar bg-base-100 fixed z-50">
  <div className="flex-1">
    <NavItem className="btn btn-ghost normal-case text-xl" label="Just Buy It!" src="/"/>
  </div>
  <div className="flex-none">
    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs navItem" />
    <NavItem label="Home" src="/"/>
    <NavItem label="Saved" src="/saved"/>
    <div className="dropdown dropdown-end">
      <NavItem />
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{cart.length}</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <button className="btn btn-primary btn-block" onClick={(e) => goCart(e)}>View Cart</button>

        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      {
        isUser ? 
        <>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {
              user ?
              <>
              {
                user.photoURL ?
                <>
                <img src={user.photoURL} />
                </>
                :
                <>
                <img src={leDuck} />
                </>
              }
              </>
              :
              <>

              </>
            }
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              <p>Profile (Soon)</p>
              <span className="badge">New</span>
            </a>
          </li>
          <li><a onClick={logOff}>Logout</a></li>
        </ul>
        </>
        :
        <>
        <div className='flex'>
        <NavItem label="Log in" src="/login"/>
        </div>
        </>
      }
    </div>
  </div>
  </div>
  </>
    );
}