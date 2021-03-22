import Image from "next/image";
import Link from "next/link";

export default function Top() {
  return (
    <header className="relative">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 pt-6 pb-6">
            <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img className="h-8 w-auto sm:h-10" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/291.png?v=1615720470" alt="" />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                  <button type="button" className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" aria-expanded="false">
  <span className="sr-only">Open main menu</span>
  {/* Heroicon name: outline/menu */}
  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>

                  </div>
                </div>
                <div className="hidden space-x-8 md:flex md:ml-10">
                  <a href="#" className="text-base font-medium text-white hover:text-gray-300">ブランド紹介</a>
                  <a href="#" className="text-base font-medium text-white hover:text-gray-300">商品一覧</a>
                  <a href="#" className="text-base font-medium text-white hover:text-gray-300">お問い合わせ</a>
                  
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-6">
                  <a href="#" className="text-base font-medium text-white hover:text-gray-300">
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
           
            
          

        </header>
  ) }