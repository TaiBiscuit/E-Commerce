import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


export const Login = () => {

    const handleGoogleSignIn = async () => {
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
    
    function handleSignIn(e){
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginEmail(email, password);
    }


    const loginEmail = async (email, password) => {
        const res = await signInWithEmailAndPassword(auth, email, password);
        return res
    }


    return (
        <>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={(e) => {handleSignIn(e)}}>
                    <div className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" name='password' className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary" >Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}