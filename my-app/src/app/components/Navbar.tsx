"use client"
import React from 'react';
import { Brain, Moon, Sun } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Link from 'next/link';

const Navbar = () => {
  const { 
    isDark, 
    setIsDark, 
    isConnected, 
    account, 
    balance, 
    connectWallet 
  } = useApp();

  return (
    <nav className={`flex justify-between items-center p-4 ${
      isDark ? 'bg-gray-800/50' : 'bg-white/50'
    } backdrop-blur-sm`}>
      <Link href="/" className={`text-2xl font-bold flex items-center gap-2 ${
        isDark ? 'text-purple-300' : 'text-purple-600'
      }`}>
        <Brain className="w-8 h-8" />
        SereNova
      </Link>
      <div className="flex gap-4 items-center">
        <button
          onClick={() => setIsDark(!isDark)}
          className={`p-2 rounded-full transition-colors ${
            isDark ? 'bg-gray-700 text-purple-300' : 'bg-purple-200 text-purple-700'
          }`}
        >
          {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>

        <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
          Balance: {balance}
        </button>
        
        <button 
          className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors" 
          onClick={isConnected ? undefined : connectWallet}
        >
          {isConnected ? `${account?.substring(0, 6)}...${account?.substring(account?.length - 4)}` : "Connect MetaMask"}
        </button>

        <Link 
          href="/sessions" 
          className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
        >
          Book Session
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;