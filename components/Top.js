import Image from "next/image";
import Link from "next/link";
import { Transition } from '@headlessui/react'
import { useState } from 'react'




export default function Top() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    
    <header className="relative">
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 pt-6 pb-6">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/291.png?v=1615720470"
                  alt=""
                />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Heroicon name: outline/menu */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-10">
              <a
                href="#"
                className="text-base font-medium text-white hover:text-gray-300"
              >
                ブランド紹介
              </a>
              <a
                href="#"
                className="text-base font-medium text-white hover:text-gray-300"
              >
                商品一覧
              </a>
              <a
                href="#"
                className="text-base font-medium text-white hover:text-gray-300"
              >
                お問い合わせ
              </a>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a
              href="#"
              className="text-base font-medium text-white hover:text-gray-300"
            >
              マイページ
            </a>
            <button
              className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="button"
            >
              カートを見る
            </button>
          </div>
        </nav>
      </div>
      {/*
      Mobile menu, show/hide based on menu open state.

      Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    */}
     <Transition
        show={isOpen}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
    
      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <img
                className="h-8 w-auto"
                src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/291.png?v=1615720470"
                alt=""
              />
            </div>
            <div className="-mr-2">
            
      
              <button onClick={() => setIsOpen(false)} 
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"
              >
                <span className="sr-only">Close menu</span>

                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              
            </div>
          </div>
         
          
        
     
          <div className="pt-5 pb-6">
            <div className="px-2 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                ブランド紹介
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                商品一覧
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                お問い合わせ
              </a>
            </div>
            <div className="mt-6 px-5">
              <a
                href="#"
                className="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-red-400 to-red-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700"
              >
                カートを見る
              </a>
            </div>
            <div className="mt-6 px-5">
              <p className="text-center text-base font-medium text-gray-500">
                もっと詳しくは　
                <a href="#" className="text-gray-900 hover:underline">
                  ログイン
                </a>
              </p>
            </div>
          </div>
         
        </div>
        
      </div>
      </Transition>
      
    </header>
    
    
  );
}
