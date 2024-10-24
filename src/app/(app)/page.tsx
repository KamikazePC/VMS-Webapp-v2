'use client'

import { useRouter } from "next/navigation";
import { Building2 } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="text-center mb-8">
        <Building2 className="text-white w-16 h-16 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-white mb-2">Estate Management System</h1>
        <p className="text-xl text-gray-200">Streamline your property management process</p>
      </div>
      <button 
        onClick={() => router.push('/admin')} 
        className="bg-white text-blue-600 rounded-full py-3 px-8 font-bold text-lg shadow-lg hover:bg-blue-100 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      >
        Login to Dashboard
      </button>
      <p className="mt-8 text-sm text-gray-200">
        Don't have an account? <a href="#" className="underline hover:text-white">Contact us</a> to get started.
      </p>
    </div>
  );
}