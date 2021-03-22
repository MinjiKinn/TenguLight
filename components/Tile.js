import Image from "next/image";
import Link from "next/link";
import Head from "next/head";


export default function Top() {
  return (
  
  <div className="w-full py-32 px-24 flex flex-wrap justify-around relative">
            <Image
    src="/../public/img/tengulight.png"
    width={256}
    height={256} className="w-64 h-64 object-cover mb-12 md:mb-0" />
          <Image
    src="/../public/img/tsl2000.png"
    width={256}
    height={256} className="w-64 h-64 object-cover mb-12 md:mb-0" />
         <Image
    src="/../public/img/150.png"
    width={256}
    height={256} className="w-64 h-64 object-cover mb-12 md:mb-0" />
           <Image
    src="/../public/img/tengu2.jpg"
    width={256}
    height={256} className="w-64 h-64 object-cover" />
          <h4 className="text-6xl text-gray-800 font-bold tracking-tighter absolute top-0 left-0 mt-12 ml-20">TENGU</h4>
          <h4 className="text-6xl text-gray-800 font-bold tracking-tighter absolute bottom-0 right-0 mb-16 mr-20">LIGHT</h4>
        </div>
  )
}