import Image from "next/image";
import Link from "next/link";

export default function Top() {
  return (

<div className="relative z-20 flex justify-center items-center flex-wrap h-screen overflow-hidden">
<div className="relative z-20 w-full flex flex-wrap justify-around max-w-4xl">
  <div className="w-full md:w-64">
    <div className="relative mb-10">
    <Image
    src="/../public/img/56211.jpg"
    width={256}
    height={256}  className="w-64 h-64 object-cover" />
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-start">
        <div className="w-1 h-16 bg-gray-900 -mb-6" />
      </div>
    </div>
    <h3 className="text-lg uppercase tracking-tighter text-center font-sans">1.何個買っても関税ゼロ</h3>
  </div>
  <div className="w-full md:w-64 md:mt-16">
    <div className="relative mb-10">
    <Image
    src="/../public/img/3693393.jpg"
    width={256}
    height={256} className="w-64 h-64 object-cover" />
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-start">
        <div className="w-1 h-16 bg-gray-900 -mb-6" />
      </div>
    </div>
    <h3 className="text-lg uppercase tracking-tighter text-center font-sans">2.何個買っても送料ゼロ</h3>
  </div>
  <div className="w-full md:w-64 md:mt-32">
    <div className="relative mb-10">
    <Image
    src="/../public/img/happy.jpg"
    width={256}
    height={256} className="w-64 h-64 object-cover" />
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-start">
        <div className="w-1 h-16 bg-gray-100 -mb-6" />
      </div>
    </div>
    <h3 className="text-lg uppercase tracking-tighter text-center text-white font-sans">3.3年間の品質保証</h3>
  </div>
</div>
<div className="z-10 w-1/2 h-full bg-gray-900 absolute top-0 right-0 -mr-20" />
<div className="z-10 w-1 h-64 bg-gray-100 absolute bottom-0 right-0 mr-5" />
</div>	
  )
}