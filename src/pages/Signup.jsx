import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

export const Signup = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext); 
  
    const handleSignIn = async () => {
      try {
        let provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
    });} catch (error) {
        console.error('Error signing in:', error);
      }
    };


    useEffect(() => {
        const userToLog = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
        return userToLog;
    }, []); 



    return (
        <>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Join us now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handleSignIn}>Sign in</button>
                </div>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}