import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Top() {
  return (

      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet" />
        <title>Exultant Collective</title>
        <header className="flex flex-wrap items-center justify-between px-12 h-32 -mb-32 relative">
          <div className="w-full md:w-auto">
            <a href="#" className="block text-center text-black text-lg no-underline">MARS HYDRO</a>
          </div>
          <ul className="flex-1 flex justify-center md:justify-end list-reset">
            <li>
              <a href="#" className="text-sm text-gray-800 no-underline hover:text-black">ホームに戻る</a>
            </li>
            <li className="ml-8">
              <a href="#" className="text-sm text-gray-800 no-underline hover:text-black">他の商品を見る</a>
            </li>
            <li className="ml-8">
              <a href="#" className="text-sm text-gray-800 no-underline hover:text-black">カート (2)</a>
            </li>
            <li className="ml-8 hidden md:inline">
              <a href="#" className="text-sm font-bold px-4 py-3 no-underline text-white bg-black hover:bg-gray-800">購入する</a>
            </li>
          </ul>
        </header>
        <div className="h-screen w-full px-6 md:px-12 pb-12 pt-32 flex flex-wrap justify-between">
          <div className="bg-gray-lighter md:h-full w-full md:flex-1 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://cdn.shopify.com/s/files/1/0470/9089/2956/files/SP3000.jpg?v=1614304047")'}} />
          <div className="bg-orange-100 text-orange-900 md:h-full w-full md:flex-1 flex justify-center items-center">
            <div className="px-8 md:px-16">
              <h1 className="text-lg md:text-3xl mb-6">MARS HYDRO SP3000</h1>
              <p className="mb-6"><span className="font-bold">¥85,800</span> | <span className="opacity-75 line-through">¥89,800</span></p>
              <p className="mb-6 leading-normal text-sm md:text-base">MARS HYDROの定番アイテム。個人栽培からプロの農家まで。幅広く愛されてるベストセラーです。<a href="#more" className="text-black text-sm">Read More</a></p>
              <a href="#" className="block md:inline-block text-center no-underline text-orange-900 px-5 py-3 border-2 border-orange-900 hover:bg-orange-900 hover:text-orange-100">カートに入れる</a>
            </div>
          </div>
        </div>
        <div className="p-12" id="more">
          <h2 className="text-2xl md:text-4xl max-w-2xl mx-auto text-center text-gray-900 leading-normal mb-12">MARS　HYDRO　 SP3000</h2>
          <p className="text-sm md:text-base leading-normal max-w-xl text-center mx-auto text-gray-800 mb-8">アメリカのAmazonでは☆5のレビューが各製品別に約2,000件以上！初心者向けの小さいライトからプロ用の高級モデルまで。安定のMARS HYDROと呼ばれています。そして、アメリカやオーストラリアの若い人たちの間で大人気のSPIDER FARMERも入荷中！軽くて洗練されたデザイン。今までのライトの中で一番シンプルな見た目ですが、性能はバッチリのちょっぴり高級ライン。
    </p>
          <p className="text-sm md:text-base leading-normal max-w-xl text-center text-bold mx-auto text-gray-700">詳細スペックを確認する</p>
        </div>
     
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="bg-gradient-to-r from-gray-900 via-indigo-900 to-indigo-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              SP3000はアメリカAmazonで一番売れてるLEDライトです
            </h2>
            <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
            アメリカのAmazonでは☆5のレビューが各製品別に約2,000件以上！初心者向けの小さいライトからプロ用の高級モデルまで。安定のMARS  
            </p>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                全国どこでも
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                送料無料
              </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                今月のイベント
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                当日発送
              </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                いつでも
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                3年保証
              </dd>
            </div>
          </dl>
        </div>
      </div>
    );
  
        
        <div className="px-6 py-12 md:px-12">
          <div className="text-sm w-full p-12 text-center bg-blue-100 text-blue-900">Copyright © 2021 Exultant Collective</div>
        </div>
      </div>
    );
  }
