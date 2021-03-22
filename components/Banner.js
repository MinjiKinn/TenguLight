
import Image from "next/image";
import Link from "next/link";


export default function Review() {
  return (
      <div>
        
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet" />
        <title>TENGU-light</title>
        
        <div className="w-full py-40 text-center flex items-center justify-center bg-gray-100">
       
        <h2 className="text-5xl max-w-2xl text-bold leading-tight text-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            『 MARS HYDRO 』 公式代理店</h2>
        </div>	
        
        
        <div className="w-full py-24 relative mb-20">
          <div className="bg-gray-300 max-w-3xl text-center relative z-20 mx-auto py-6">
            <h3 className="text-2xl mb-4">入荷希望の商品があれば教えてください！</h3>
            <p className="text-sm mb-1">欲しいライトがあるけど個人輸入は難しい！</p>
            <p className="text-sm mb-1">天狗ライトで取り扱って欲しい商品を教えてください！</p>
            <p className="text-sm mb-6">関税なし、配送料なしでお宅までお届けします。</p>
            <form className="flex w-full max-w-xs mx-auto">
              <input type className="h-12 flex-1 py-2 px-4 rounded-full" placeholder="ブランド名・商品名など" />
              <button className="h-12 w-24 bg-gray-900 text-white text-sm uppercase ml-2 rounded-full">送信</button>
            </form>
          </div>
          <img src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/ts_7cb933ce-87b5-4d1e-a642-8a906ee20979.jpg?v=1614304231" className="absolute top-0 left-0 w-full h-full object-cover z-10" />
        </div>
        
      </div>
    );
  }
