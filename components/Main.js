import Image from "next/image";
import Link from "next/link";

export default function Top() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
    <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <a
                href="#"
                className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
              >
                <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">
                  全国送料無料
                </span>
                <span className="ml-4 text-sm">商品リストを見る</span>
                {/* Heroicon name: solid/chevron-right */}
                <svg
                  className="ml-2 w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
              関税なし 送料なし
              </h1>
              <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                
                <span className="text-5xl md:text-8xl text-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                天狗ライト
                </span>
                
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                アメリカで一番流行ってる最先端のLEDライトを、送料なし、関税なし、配送代行手数料なし！最安価格で購入できる日本一の植物用LED専門店。
              </p>
              <div className="mt-10 sm:mt-12">
                <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                    7日以内安心返品保証 ＆ 3年間の品質保証{" "}
                    <a href="#" className="font-medium text-white">
                      　ポリシーを見る
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-7 -mb-5 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              <img
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/tengu.png?v=1615736886"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
