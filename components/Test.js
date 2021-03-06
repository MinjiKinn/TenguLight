{

  return (
  

    {/*
This example requires Tailwind CSS v2.0+ 

This example requires some changes to your config:

```
// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
      }
    }
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
```
*/},
    <div className="bg-white"> 
      <div className="relative overflow-hidden">
        <header className="relative">
          <div className="bg-gray-900 pt-6">
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
                  <a href="#" className="text-base font-medium text-white hover:text-gray-300">??????????????????</a>
                  <a href="#" className="text-base font-medium text-white hover:text-gray-300">????????????</a>
                  <a href="#" className="text-base font-medium text-white hover:text-gray-300">??????????????????</a>
                  
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-6">
                <a href="#" className="text-base font-medium text-white hover:text-gray-300">
                  ???????????????
                </a>
                <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
                  ??????????????????
                </a>
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
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/291.png?v=1615720470" alt="" />
                </div>
                <div className="-mr-2">
                  <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">??????????????????</a>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">????????????</a>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">??????????????????</a>
              
                </div>
                <div className="mt-6 px-5">
                  <a href="#" className="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700">Start free trial</a>
                </div>
                <div className="mt-6 px-5">
                  <p className="text-center text-base font-medium text-gray-500">????????????????????????<a href="#" className="text-gray-900 hover:underline">????????????</a></p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    <a href="#" className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                      <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">??????????????????</span>
                      <span className="ml-4 text-sm">????????????????????????</span>
                      {/* Heroicon name: solid/chevron-right */}
                      <svg className="ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">?????????LED?????????</span>
                      <span className="block text-red-700">???????????????</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      ????????????????????????????????????????????????LED?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????LED??????????????????
                    </p>
                    <div className="mt-10 sm:mt-12">
                      <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                        
                        <p className="mt-3 text-sm text-gray-300 sm:mt-4">7??????????????????????????? ??? 3????????????????????? <a href="#" className="font-medium text-white">????????????????????????</a>.</p>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                    <img className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/tengu.png?v=1615736886" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Feature section with screenshot */}
          <div className="relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32">
            <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
              <div>
                <h2 className="text-base font-semibold tracking-wider text-red-700 uppercase">?????????????????????</h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  ?????????????????????????????????????????????????????????
                </p>
                <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                  ???????????????Amazon?????????5????????????????????????????????????2,000???????????????????????????????????????????????????????????????????????????????????????????????????MARS HYDRO??????????????????????????????????????????????????????????????????????????????????????????????????????????????????SPIDER FARMER???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                </p>
              </div>
              <div className="mt-12 -mb-10 sm:-mb-24">
                <img className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/world.png?v=1615759798" alt="" />
              </div>
            </div>
          </div>
          {/* Feature section with grid */}
          <div className="relative bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <h2 className="text-base font-semibold tracking-wider text-red-700 uppercase">?????????????????????????????????</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                ???????????????TOP6
              </p>
              <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                ?????????????????????????????????LED?????????????????????????????????????????????????????????????????????
              </p>
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r bg-red-700 rounded-md shadow-lg">
                            {/* Heroicon name: outline/cloud-upload */}
                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">??????????????????</h3>
                        <p className="mt-5 text-base text-gray-500">
                          ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r bg-red-700 rounded-md shadow-lg">
                            {/* Heroicon name: outline/lock-closed */}
                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">20???????????????</h3>
                        <p className="mt-5 text-base text-gray-500">
                          ???????????????????????????????????????20?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r bg-red-700 rounded-md shadow-lg">
                            {/* Heroicon name: outline/refresh */}
                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">??????LED?????????</h3>
                        <p className="mt-5 text-base text-gray-500">
                          MARS HYDRO??????SPIDER FARMER????????????????????????????????????????????????SAMSUNG LM301B???????????????????????????????????????
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r bg-red-700 rounded-md shadow-lg">
                            {/* Heroicon name: outline/shield-check */}
                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">???????????????</h3>
                        <p className="mt-5 text-base text-gray-500">
                          ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????IP65?????????????????????
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r bg-red-700 rounded-md shadow-lg">
                            {/* Heroicon name: outline/cog */}
                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">??????????????????</h3>
                        <p className="mt-5 text-base text-gray-500">
                         ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r bg-red-700 rounded-md shadow-lg">
                            {/* Heroicon name: outline/server */}
                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                            </svg>
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">0???????????????</h3>
                        <p className="mt-5 text-base text-gray-500">
                          ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial section */}
          <div className="pb-16 bg-gradient-to-r bg-gray-800 lg:pb-0 lg:z-10 lg:relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="relative lg:-my-8">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 lg:hidden" />
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                  <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                    <img className="object-cover lg:h-full lg:w-full" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/icon4.png?v=1615761957" alt="" />
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                  <blockquote>
                    <div>
                      <svg className="h-12 w-12 text-white opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="mt-6 text-2xl font-medium text-white">
                        ?????????????????????????????????????????????????????????Amazon?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????TS600???2????????????????????????????????????????????????????????????????????????????????????
                      </p>
                    </div>
                    <footer className="mt-6">
                      <p className="text-base font-medium text-white">Amazon???????????? Fea***???</p>
                      <p className="text-base font-medium text-red-700">MARS HYDRO TS600 ??????</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          {/* Blog section */}
          <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
            <div className="relative">
              <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base font-semibold tracking-wider text-red-700 uppercase">PRODUCT</h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  ????????????
                </p>
                <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                  ???????????????????????????????????????????????????????????????LED??????????????????
                </p>
              </div>
              <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/SP3000.jpg?v=1602743776" alt="" />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-red-700">
                        <a href="#" className="hover:underline">
                          MARS HYDRO
                        </a>
                      </p>
                      <a href="#" className="block mt-2">
                        <p className="text-4xl font-semibold text-gray-900">
                          SP150
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#">
                          <span className="sr-only">Roel Aufderehar</span>
                          <img className="h-10 w-10 rounded-full" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/coin.png?v=1615763229" alt="" />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-xl font-medium text-gray-900">
                          <a href="#" className="hover:underline">
                            29,800
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                         
                          <span>
                          ?????????????????????
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/FC6500-1.png?v=1615764731" alt="" />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-red-700">
                        <a href="#" className="hover:underline">
                          MARS HYDRO
                        </a>
                      </p>
                      <a href="#" className="block mt-2">
                        <p className="text-4xl font-semibold text-gray-900">
                          FC6500
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#">
                          <span className="sr-only">Brenna Goyette</span>
                          <img className="h-10 w-10 rounded-full" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/coin.png?v=1615763229" alt="" />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-lg font-medium text-gray-900">
                          <a href="#" className="hover:underline">
                            158,900
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                         
                          <span>
                          ?????????????????????
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/sf7000main.png?v=1615764610" alt="" />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-red-700">
                        <a href="#" className="hover:underline">
                          SPIDER FARMER
                        </a>
                      </p>
                      <a href="#" className="block mt-2">
                        <p className="text-4xl font-semibold text-gray-900">
                          SF7000
                        </p>
                        
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#">
                          <span className="sr-only">Daniela Metz</span>
                          <img className="h-10 w-10 rounded-full" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/coin.png?v=1615763229" alt="" />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-lg font-medium text-gray-900">
                          <a href="#" className="hover:underline">
                            Daniela Metz
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                         
                          <span>
                          ?????????????????????
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/SP3000.jpg?v=1602743776" alt="" />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-red-700">
                        <a href="#" className="hover:underline">
                          MARS HYDRO
                        </a>
                      </p>
                      <a href="#" className="block mt-2">
                        <p className="text-4xl font-semibold text-gray-900">
                          SP3000
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#">
                          <span className="sr-only">Roel Aufderehar</span>
                          <img className="h-10 w-10 rounded-full" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/coin.png?v=1615763229" alt="" />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-lg font-medium text-gray-900">
                          <a href="#" className="hover:underline">
                            29,800
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                        
                          <span>
                          ?????????????????????
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/FC6500-1.png?v=1615764731" alt="" />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-red-700">
                        <a href="#" className="hover:underline">
                          MARS HYDRO
                        </a>
                      </p>
                      <a href="#" className="block mt-2">
                        <p className="text-4xl font-semibold text-gray-900">
                          FC6500
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#">
                          <span className="sr-only">Brenna Goyette</span>
                          <img className="h-10 w-10 rounded-full" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/coin.png?v=1615763229" alt="" />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-lg font-medium text-gray-900">
                          <a href="#" className="hover:underline">
                            158,900

                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                        
                          <span>
                          ??????
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/sf7000main.png?v=1615764610" alt="" />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-red-700">
                        <a href="#" className="hover:underline">
                          SPIDER FARMER
                        </a>
                      </p>
                      <a href="#" className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          SF7000
                        </p>
                        
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#">
                          <span className="sr-only">Daniela Metz</span>
                          <img className="h-10 w-10 rounded-full" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/coin.png?v=1615763229" alt="" />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          <a href="#" className="hover:underline">
                            Daniela Metz
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          
                          <span>
                          ??????
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/SP3000.jpg?v=1602743776" alt="" />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-red-700">
                        <a href="#" className="hover:underline">
                          MARS HYDRO
                        </a>
                      </p>
                      <a href="#" className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          SP3000
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#">
                          <span className="sr-only">Roel Aufderehar</span>
                          <img className="h-10 w-10 rounded-full" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/coin.png?v=1615763229" alt="" />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          <a href="#" className="hover:underline">
                            29,800
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                      
                          <span>
                          ??????
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/FC6500-1.png?v=1615764731" alt="" />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-red-700">
                        <a href="#" className="hover:underline">
                          MARS HYDRO
                        </a>
                      </p>
                      <a href="#" className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          FC6500
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#">
                          <span className="sr-only">Brenna Goyette</span>
                          <img className="h-10 w-10 rounded-full" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/coin.png?v=1615763229" alt="" />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          <a href="#" className="hover:underline">
                            158,900
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                         
                          <span>
                            ??????
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/sf7000main.png?v=1615764610" alt="" />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-red-700">
                        <a href="#" className="hover:underline">
                          SPIDER FARMER
                        </a>
                      </p>
                      <a href="#" className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          SF7000
                        </p>
                        
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#">
                          <span className="sr-only">Daniela Metz</span>
                          <img className="h-10 w-10 rounded-full" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/coin.png?v=1615763229" alt="" />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          <a href="#" className="hover:underline">
                            159,800
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                      
                  
                          <span>
                            ??????
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="relative bg-gray-900">
            <div className="relative h-56 bg-gray-900 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
              <img className="w-full h-full object-cover" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/tengu.png?v=1615736886" alt="" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600" style={{mixBlendMode: 'multiply'}} />
            </div>
            <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                  ???????????????????????????
                </h2>
                <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                  ??????????????????????????????????????????
                </p>
                <p className="mt-3 text-lg text-gray-300">
                  ??????????????????????????????????????????????????????????????????TIP????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                      hello@fatlightslim.com
                      {/* Heroicon name: solid/external-link */}
                      <svg className="-mr-1 ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-gray-50" aria-labelledby="footerHeading">
          <h2 id="footerHeading" className="sr-only">Footer</h2>
          <div className="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-8 xl:col-span-1">
                <img className="h-10" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/291.png?v=1615720470" alt="Company name" />
                <p className="text-gray-500 text-base">
                  ????????????????????????????????????????????????????????????????????????
                </p>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Dribbble</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                      MARS SP ????????????
                    </h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                          SP150
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                          SP3000
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                          SP6500
                        </a>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                      MARS TS ????????????
                    </h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                          TS600
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                          TS1000
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                          TSW2000
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                          TS3000
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                      SPIDER FARMER
                    </h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                          SF1000
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                          SF2000
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                          SF4500
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                          SF7000
                        </a>
                      </li>
                     
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                      ????????????
                    </h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        ??????????????????
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                          ??????????????????
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                          ??????????????????????????????
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                         ????????????
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-200 py-8">
              <p className="text-base text-gray-400 xl:text-center">
                ?? 2021 Workflow, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}



