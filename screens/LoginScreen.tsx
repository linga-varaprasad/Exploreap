import React from 'react';
import { ArrowLeftIcon, FacebookIcon, GoogleIcon } from '../assets/icons';

interface LoginScreenProps {
  onLogin: () => void;
  onBack: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, onBack }) => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-base-200/50 p-6 font-sans">
      <header className="flex w-full items-center">
        <button onClick={onBack} className="p-2 -ml-2">
          <ArrowLeftIcon className="h-6 w-6 text-base-content" />
        </button>
      </header>

      <main className="flex flex-1 flex-col justify-center px-4">
        <div className="mb-8">
          <h2 className="font-display text-4xl font-bold text-base-content">Welcome back</h2>
        </div>
        
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-base-content-secondary">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="mt-1 w-full rounded-xl border-base-300 bg-white p-4 transition-shadow focus:border-secondary focus:ring-2 focus:ring-secondary/50"
              required
            />
          </div>
          
          <div>
            <label className="text-sm font-medium text-base-content-secondary">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              className="mt-1 w-full rounded-xl border-base-300 bg-white p-4 transition-shadow focus:border-secondary focus:ring-2 focus:ring-secondary/50"
              required
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-sm font-medium text-secondary hover:text-secondary-focus">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-secondary py-4 text-lg font-bold text-white shadow-md shadow-secondary/30 transition-transform hover:scale-105"
          >
            Login
          </button>
        </form>

        <div className="my-8 flex items-center">
          <hr className="flex-grow border-t border-base-300" />
          <span className="mx-4 text-sm text-base-content-secondary">Or continue with</span>
          <hr className="flex-grow border-t border-base-300" />
        </div>

        <div className="flex gap-4">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-base-300 bg-white py-3 font-medium transition-all hover:bg-base-200 hover:shadow-md">
            <GoogleIcon className="h-6 w-6" /> Google
          </button>
          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-base-300 bg-white py-3 font-medium text-[#1877F2] transition-all hover:bg-base-200 hover:shadow-md">
            <FacebookIcon className="h-6 w-6" /> Facebook
          </button>
        </div>
        
        <p className="mt-8 text-center text-sm text-base-content-secondary">
          Don't have an account?{' '}
          <a href="#" className="font-medium text-secondary hover:text-secondary-focus">
            Sign Up
          </a>
        </p>
      </main>
    </div>
  );
};

export default LoginScreen;