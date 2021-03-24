import Image from "next/image";
import Link from "next/link";


export default function Review() {
  return (

<div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
<div className="relative">
  <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
    <h2 className="text-base font-semibold tracking-wider text-red-700 uppercase">PRODUCT</h2>
    <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
      商品一覧
    </p>
    <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
      初心者向けの小さいライトからプロ用の最先端LEDライトまで！
    </p>
  </div>
  <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
      <Image
        src="/img/sp3000.jpg"
        alt="Picture of the author"
        width={416}
        height={198}
        className="h-48 w-full object-cover"
        />
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
            <p className="text-xl font-medium text-gray-900">
              <a href="#" className="hover:underline">
                85,800
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
             
              <span>
              税込・送料無料
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <Image
        src="/img/sf7000.png"
        alt="Picture of the author"
        width={416}
        height={198}
        />
      
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
              SF7000
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
              税込・送料無料
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
      <Image
        src="/img/ts3000.png"
        alt="Picture of the author"
        width={416}
        height={198}
        />
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
              TS3000
            </p>
            
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a href="#">
              <span className="sr-only">159,800</span>
              <img className="h-10 w-10 rounded-full" src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/coin.png?v=1615763229" alt="" />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-lg font-medium text-gray-900">
              <a href="#" className="hover:underline">
                79,800
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
             
              <span>
              税込・送料無料
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
      <Image
        src="/img/sp150.png"
        alt="Picture of the author"
        width={416}
        height={198}
        /> 
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
            <p className="text-lg font-medium text-gray-900">
              <a href="#" className="hover:underline">
                29,800
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
            
              <span>
              税込・送料無料
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
              税込・送料無料
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
       <Image
        src="/../public/img/sf4000.png"
        alt="Picture of the author"
        width={416}
        height={198}
        />  
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
              SF4000
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
                134,900
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              
              <span>
              税込・送料無料
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>
</div>
  )
}