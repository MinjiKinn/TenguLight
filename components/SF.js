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
            <a href="#" className="block text-center text-black text-lg no-underline">Exultant Collective</a>
          </div>
          <ul className="flex-1 flex justify-center md:justify-end list-reset">
            <li>
              <a href="#" className="text-sm text-gray-800 no-underline hover:text-black">Home</a>
            </li>
            <li className="ml-8">
              <a href="#" className="text-sm text-gray-800 no-underline hover:text-black">Products</a>
            </li>
            <li className="ml-8">
              <a href="#" className="text-sm text-gray-800 no-underline hover:text-black">Cart (2)</a>
            </li>
            <li className="ml-8 hidden md:inline">
              <a href="#" className="text-sm font-bold px-4 py-3 no-underline text-white bg-black hover:bg-gray-800">Checkout</a>
            </li>
          </ul>
        </header>
        <div className="h-screen w-full px-6 md:px-12 pb-12 pt-32 flex flex-wrap justify-between">
          <div className="bg-gray-lighter md:h-full w-full md:flex-1 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1474376962954-d8a681cc53b2?w=1200")'}} />
          <div className="bg-orange-100 text-orange-900 md:h-full w-full md:flex-1 flex justify-center items-center">
            <div className="px-8 md:px-16">
              <h1 className="text-lg md:text-3xl mb-6">Exultant - Collective Classic Backpack</h1>
              <p className="mb-6"><span className="font-bold">£799.99</span> | <span className="opacity-75 line-through">£899.99</span></p>
              <p className="mb-6 leading-normal text-sm md:text-base">Lorem ipsum dolor sit amet, ne nec tation nonumy salutatus. Ne malis audire mnesarchum qui. Et praesent mnesarchum appellantur usu. Eu hinc ullum percipitur eos. <a href="#more" className="text-black text-sm">Read More</a></p>
              <a href="#" className="block md:inline-block text-center no-underline text-orange-900 px-5 py-3 border-2 border-orange-900 hover:bg-orange-900 hover:text-orange-100">Add to cart</a>
            </div>
          </div>
        </div>
        <div className="p-12" id="more">
          <h2 className="text-2xl md:text-4xl max-w-2xl mx-auto text-center text-gray-900 leading-normal mb-12">Product Description</h2>
          <p className="text-sm md:text-base leading-normal max-w-xl text-center mx-auto text-gray-800 mb-8">Dico modus appellantur eum at, atqui dicunt ut sea, debet congue munere ne usu. Error laudem quaestio te eum, ad cum nihil corrumpit adolescens, no eirmod mediocrem expetenda quo. In per solet iuvaret. Id audire commune cotidieque mei. Quo diceret patrioque ut, ex his animal forensibus maiestatis. No iisque maiorum invenire his, eos ex omnis facer delicata.</p>
          <p className="text-sm md:text-base leading-normal max-w-xl text-center mx-auto text-gray-800">Ad sed liber nihil, pri liber omnium principes id, at est argumentum constituam temporibus. Solum munere per ad. Rationibus repudiandae nec in. Quo eu verear suscipit abhorreant. Dicam fastidii nam eu, quo recusabo periculis dissentiunt id.</p>
        </div>
        <div className="px-6 py-12 md:px-12">
          <div className="text-sm w-full p-12 text-center bg-blue-100 text-blue-900">Copyright © 2019 Exultant Collective</div>
        </div>
      </div>
    );
  }
